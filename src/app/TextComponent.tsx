import React from 'react';
import styles from "./page.module.css";

const TextComponent = ({text, style}) => {
    return (
        <div className={style}>
            {text}
        </div>
    );
};

export default TextComponent;