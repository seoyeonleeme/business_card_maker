import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
    <header className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
        <img className={styles.logo} src= {process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
        <h1 className={styles.title}>Seoyeon's Business Card Maker</h1>
    </header>
);

export default Header;

/*onLogout && 부분은 CSS 확인하기 위해서 잠시 true && 로 바꿔서 작업했었음*/