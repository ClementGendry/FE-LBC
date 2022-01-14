import Link from 'next/link';
import { ConversationInterface } from '../../types/conversation';
import RightArrow from '../RightArrow/rightArrow';
import styles from './Conversation.module.css';

const Conversation: React.FC<ConversationInterface> = (conversation): JSX.Element => {
    let timestamp: Date = new Date((conversation.lastMessageTimestamp)*1000);
    const lastMessage: string = timestamp.toLocaleDateString('fr-FR',
        { year: 'numeric', month: 'long', day: 'numeric' 
    });

    return (
        <Link href={`/messages/${conversation.id}`} passHref>
            <div className={styles.conversationContainer}>
                <div className={styles.dataContainer}>
                    <p>Between {conversation.recipientNickname} & {conversation.senderNickname}</p>
                    <span className={styles.lastMessage}>{lastMessage}</span>
                </div>
                <div className={styles.arrow}>
                    <RightArrow />
                </div>
            </div>
        </Link>
    )
}

export default Conversation;