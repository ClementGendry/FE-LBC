import { MessageInterface } from '../../types/message';
import styles from './Message.module.css';

const Message: React.FC<MessageInterface> = (message): JSX.Element => {
    return (
        <div className={styles.message}>
            {message.body}
        </div>
    )
}

export default Message;