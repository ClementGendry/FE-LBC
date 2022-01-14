import Link from 'next/link';
import { UserInterface } from '../../types/user';
import RightArrow from '../RightArrow/rightArrow';
import styles from './User.module.css';

const User: React.FC<UserInterface> = (user): JSX.Element => {
    const {id, nickname} = user;
    const firstLetter = nickname.substring(0, 1);
    let bgRandomColor = Math.floor(Math.random() * 16777215).toString(16);

    return (
        <Link href={`/conversations/${id}`} passHref>
            <div className={styles.userContainer}>
                <div className={styles.dataContainer}>
                    <div className={styles.firstLetter} style={{backgroundColor: `#${bgRandomColor}`}}>
                        { firstLetter }
                    </div>
                    <p>{nickname}</p>
                </div>
                <div className={styles.arrow}>
                    <RightArrow />
                </div>
            </div>
        </Link>
    )
}

export default User;