
import React from "react";
import {adultPatient, kidPatient} from "../../utils/patientsData";
import PatientItem from "../patientItem";
import {inspect} from "util";
import styles from './styles.module.css'




const Patients = () => {
    return (
            <div className={styles.flexWrapper}>

                <PatientItem
                    title={adultPatient.title}
                    imageUrl={adultPatient.imageUrl}
                    textArray={adultPatient.textArray}
                />

                <PatientItem
                    title={kidPatient.title}
                    imageUrl={kidPatient.imageUrl}
                    textArray={kidPatient.textArray}
                />
            </div>
    );

}

export default Patients;
