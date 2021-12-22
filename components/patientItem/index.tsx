import styles from './styles.module.css';
import React from "react";
import {kidPatient} from "../../utils/patientsData";



const PatientItem = (props: any) => {
    return (
        <div className={styles.columnWrapper}>
            <h4 className={styles.title}>{props.title}</h4>
            <img className={styles.image} src={props.imageUrl} alt=""/>

            {props.textArray.map(( text:string ) => (
                <div key={text} className={styles.paragraphContainer}>
                    <p className={styles.paragraph} key={text}>{text}</p>
                </div>))}

        </div>
    );

}

export default PatientItem;
