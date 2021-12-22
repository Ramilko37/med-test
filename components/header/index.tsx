import styles from "../../containers/mainpage/styles.module.css";
import React from "react";



const Header = () => {
    return (
        <div className={styles.titleWrapper}>
            <h1 className={styles.title}>А вдруг СМА?</h1>
            <h2>Выберите, кто Ваш пациент:</h2>
        </div>
    );

}

export default Header;
