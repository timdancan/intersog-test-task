import styles from './UserDetailsModal.module.css';
import { User } from '../../types/user';

interface UserDetailsModalProps {
    user: User | null;
    onClose: () => void;
}

const UserDetailsModal = ({ user, onClose }: UserDetailsModalProps) => {
    if (!user) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
            </div>
        </div>
    );
};

export default UserDetailsModal;