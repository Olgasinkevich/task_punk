import React from 'react';
import styles from "./page.module.css";

const SquareDescription = ({iconDescription, description}) => {
    return (
        <div className={styles.squareContainer}>
            {iconDescription}
            {description}
        </div>
    );
};

export default SquareDescription;