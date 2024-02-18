import React from 'react';
import {MAIN_FORM_TEXT, STEP_TEXT, STEP_TITLE_INVITE} from "@/app/constants";
import styles from "./page.module.css";

const DescriptionStepsComponent = ({stepNumber, stepText, stepTitle }) => {
    return (
        <div>
            <div className={styles.step}> {stepNumber}</div>
            <div className={styles.stepTitle}>{stepTitle}</div>
            <div className={styles.mainText}>{stepText}</div>
        </div>
    );
};

export default DescriptionStepsComponent;