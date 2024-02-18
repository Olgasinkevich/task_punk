import React from 'react';
import styles from "./page.module.css";
import {TITLE_FORM_TEXT, MAIN_FORM_TEXT, PLACEHOLDER, GET_BUTTON_TEXT, ERROR_STATE} from "@/app/constants";
import TextComponent from "@/app/TextComponent";

const ContainerForm = () => {
    return (
        <div className={`${styles.container} ${styles.containerForm} ${styles.borderStyle}`}>
<TextComponent style={styles.titleForm} text={TITLE_FORM_TEXT}/>
            <TextComponent text={MAIN_FORM_TEXT} style={styles.mainText}/>
            <form className={styles.marginBottom}>
                <text className={styles.error}>{ERROR_STATE}</text>
                <input className={`${styles.viewFormButton} ${styles.viewForm}  ${styles.borderStyle}`}
                    type="email"
                    placeholder={PLACEHOLDER}
                />
            </form>
            <button type={'submit'} className={`${styles.viewFormButton} ${styles.viewButton} ${styles.borderStyle}`}>
                {GET_BUTTON_TEXT}
            </button>
        </div>
    );
};

export default ContainerForm;