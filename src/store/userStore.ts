import { create } from 'zustand';
import { User } from '../types/user';
import { fetchUsers } from '../api/users';

interface UserState {
    users: User[];
    filteredUsers: User[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => Promise<void>;
    filterUsers: (searchTerm: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
    users: [],
    filteredUsers: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const users = await fetchUsers();
            set({ users, filteredUsers: users, loading: false });
        } catch (error) {
            set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
        }
    },
    filterUsers: (searchTerm: string) => {
        set((state) => ({
            filteredUsers: state.users.filter((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }));
    },
}));