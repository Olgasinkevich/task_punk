import React from 'react';
import styles from "@/app/page.module.css";
import ContainerDescription from "@/app/ContainerDescription";
import ContainerForm from "@/app/ContainerForm";


const Content = () => {

    return (
        <div className={styles.content}>
    <ContainerForm />
            <ContainerDescription />
        </div>
    );
};

export default Content;