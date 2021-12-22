import React from "react";
import styles from './styles.module.css';
import Header from "../../components/header";
import Patients from "../../components/patients";
import Carousel from "../../components/carousel";




const MainPageContent = () => {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <Patients />
                <Carousel />
            </div>
        </>
    );
}

export default MainPageContent;
