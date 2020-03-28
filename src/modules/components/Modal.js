import React from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styles from "./Modal.module.css";

const Modal = ({ children, activator }) => {
    const [show, setShow] = React.useState(false);

    const content = show && (
        <div className={styles.overlay} >
            <div className={styles.modal}>
            <div className={styles.modalBody}>{children}</div>
                <button
                className={styles.modallose}
                type="button"
                onClick={() => setShow(false)}
                >X</button>

            </div>
        </div>
    )
    return (
        <>
        {activator({ setShow })}
        {createPortal( content, document.body)}
            </>
    )
}
export { Modal }