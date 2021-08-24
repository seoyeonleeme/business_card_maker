import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput,authService }) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'Seoyeon',
            company: 'SpaceX',
            theme: 'dark',
            title: 'Software Engineer',
            email: 'seoyeon@gmail.com',
            message: 'Go for it',
            fileName: 'seoyeon',
            fileURL: null,
        },
        '2': {
            id: '2',
            name: 'Elon Musk',
            company: 'Solarcity',
            theme: 'light',
            title: 'Software Engineer',
            email: 'elonm@gmail.com',
            message: 'Go for it',
            fileName: 'elon',
            fileURL: process.env.PUBLIC_URL + '/images/elonmusk.jpg',
        },
        '3': {
            id: '3',
            name: 'Henry Cavill',
            company: 'Tesla Motors',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'henryc@gmail.com',
            message: 'Go for it',
            fileName: 'henry',
            fileURL: process.env.PUBLIC_URL + '/images/henrycavill.jpg',
        },
    });

    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        });
    });

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };

    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards ={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards ={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;