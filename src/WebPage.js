import React from 'react';
import WebHeaderPage from "./WebHeaderPage";

const styles = {
    content: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'orange',

    }
}
const WebPage = () => {
    return (
        <div>
        <WebHeaderPage/>

        <div style = {styles.content}>
            Hello, World!
        </div>
        </div>
    );
};

export default WebPage;