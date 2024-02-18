import React from 'react';
import styles from "./page.module.css";
import SquareDescription from "@/app/SquareDescription";
import {
    MAIN_FORM_TEXT,
    STEP,
    STEP_TITLE_COLLECT,
    STEP_TITLE_GET,
    STEP_TITLE_INVITE
} from "@/app/constants";
import Image from "next/image";
import DescriptionStepsComponent from "@/app/DescriptionStepsComponent";



const ContainerDescription: React.FC = (Х) => {
    const componentImage = [
        <Image className={styles.squareImage} src="/assets/invite.svg" alt="Logo Svg" width={100} height={100}/>,
        <Image className={styles.squareImage} src="/assets/collect-coins.svg" alt="Logo Svg" width={100}
               height={100}/>,
        <Image className={styles.squareImage} src="/assets/voucher.svg" alt="Logo Svg" width={100} height={100}/>
    ];
    const titles = [
        STEP_TITLE_INVITE, STEP_TITLE_COLLECT, STEP_TITLE_GET
    ];

    const texts = [
        MAIN_FORM_TEXT, MAIN_FORM_TEXT, MAIN_FORM_TEXT
    ];


    return (
        <div className={`${styles.container} ${styles.containerHidden}`}>
            {componentImage.map((components, index) => (
                <SquareDescription
                    key={index}
                    iconDescription={componentImage[index]}
                    description={<DescriptionStepsComponent
                        stepNumber={`${STEP} ${index + 1}`}
                        stepText={texts[index]}
                        stepTitle={titles[index]}/>}/>
            ))}

        </div>
    );
}

    export default ContainerDescription;