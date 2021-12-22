import styles from './styles.module.scss';
import React from "react";

const Carousel = () => {
    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(true);
    const [visible3, setVisible3] = React.useState(true);
    const [visible4, setVisible4] = React.useState(true);
    const [visible5, setVisible5] = React.useState(true);
    const [visible6, setVisible6] = React.useState(true);
    const [visible7, setVisible7] = React.useState(true);
    const [visible8, setVisible8] = React.useState(true);

    return (
        <>
            <p className={styles.sectionParagraph}>Сообщает ли один из ваших пациентов о следующих симптомах?
                <span className={styles.sectionSpan}>(нажмите на любую иконку и узнайте больше)</span></p>

        <div className={styles.container}>
            <div className={styles.wheel}></div>
            <button className={styles.buttonOne} onClick={() =>  setVisible1(!visible1)}/>
            <button className={styles.buttonTwo} onClick={() =>  setVisible2(!visible2)}/>
            <button className={styles.buttonThree} onClick={() =>  setVisible3(!visible3)}/>
            <button className={styles.buttonFour} onClick={() =>  setVisible4(!visible4)} />
            <button className={styles.buttonFive} onClick={() =>  setVisible5(!visible5)}/>
            <button className={styles.buttonSix} onClick={() =>  setVisible6(!visible6)}/>
            <button className={styles.buttonSeven} onClick={() =>  setVisible7(!visible7)}/>
            <button className={styles.buttonEight} onClick={() =>  setVisible8(!visible8)}/>





                {
                    !visible1 ? <div className={styles.textPositionOne}>
                        <p>Ограниченная способность поднимать руки
                            и переносить предметы</p>
                    </div> : null
                }
            {
                !visible2 ? <div className={styles.textPositionTwo}>
                    <p>Нарушения жевания и глотания</p>
                </div> : null
            }
            {
                !visible3 ? <div className={styles.textPositionThree}>
                    <p>Дыхательная недостаточность/ респираторная дисфункция</p>
                </div> : null
            }
            {
                !visible4 ? <div className={styles.textPositionFour}>
                    <p>Неспособность бегать, изменение походки</p>
                </div> : null
            }
            {
                !visible5 ? <div className={styles.textPositionFive}>
                    <p>Контрактура суставов</p>
                </div> : null
            }
            {
                !visible6 ? <div className={styles.textPositionSix}>
                    <p>Вывих бедра</p>
                </div> : null
            }
            {
                !visible7 ? <div className={styles.textPositionSeven}>
                    <p>Утомляемость</p>
                </div> : null
            }
            {
                !visible8 ? <div className={styles.textPositionEight}>
                    <p>Сколиоз</p>
                </div> : null
            }

        </div>

</>

    );

}

export default Carousel;
