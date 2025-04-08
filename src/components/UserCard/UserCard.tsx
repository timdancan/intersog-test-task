import { User } from '../../types/user';

import styles from './UserCard.module.css';

interface UserCardProps {
    user: User;
    onDetailsClick: (user: User) => void;
}

const UserCard = ({ user, onDetailsClick }: UserCardProps) => {
    return (
        <div className={styles.card}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button
                className={styles.detailsButton}
                onClick={() => onDetailsClick(user)}
            >
                Info
            </button>
        </div>
    );
};

export default UserCard;