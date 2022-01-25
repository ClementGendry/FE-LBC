import styles from './Sender.module.css';

interface SenderInterface {
    placeholder: string,
    changeListener?: any,
    submitListener?: any,
} 

const Sender: React.FC<SenderInterface> = ({placeholder, changeListener, submitListener}): JSX.Element => {
    return(
        <div className={styles.senderContainer}>
            <input
                className={styles.senderInput}
                placeholder={placeholder}
                onChange={changeListener}
            />
            <button className={styles.senderButton} onClick={submitListener}>Send</button>
        </div>
    );
};

export default Sender;