import {useEffect, useState} from 'react';
import { useUserStore } from '../store/userStore';
import UserCard from '../components/UserCard/UserCard';
import SearchBar from '../components/SearchBar/SearchBar';
import UserDetailsModal from '../components/UserDetailsModal/UserDetailsModal';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import {User} from "../types/user.ts";

const HomePage = () => {
    const {
        filteredUsers,
        loading,
        error,
        fetchUsers,
        filterUsers,
    } = useUserStore();

    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="container">
            <h1>User List</h1>
            <SearchBar onSearch={filterUsers} />

            <div className="user-list">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onDetailsClick={setSelectedUser}
                        />
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>

            {selectedUser && (
                <UserDetailsModal
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
};

export default HomePage;