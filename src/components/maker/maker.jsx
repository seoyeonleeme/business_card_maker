import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
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
        {
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
        {
            id: '3',
            name: 'Henry Cavill',
            company: 'Tesla Motors',
            theme: 'colorful',
            title: 'Software Engineer',
            email: 'henryc@gmail.com',
            message: 'Go for it',
            fileName: 'henry',
            fileURL: process.env.PUBLIC_URL + '/images/henrycavill.jpg',
        }
    ]);
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

    const addCard = card => {
        const updated = [...cards, card];
        setCards(updated);  
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards ={cards} addCard={addCard}/>
                <Preview cards ={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;