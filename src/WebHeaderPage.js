import React from 'react';
import styles from "@/app/page.module.css";
import Image from "next/image";




const WebHeaderPage = () => {
    return (
        <div className={styles.header}>

<Image src ="/assets/logo.svg" alt="Logo Svg" width={100} height={100} />
        </div>
    );
};

export default WebHeaderPage;