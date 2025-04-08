import styles from './SearchBar.module.css';
import {useEffect, useState} from "react";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchTerm);
        }, 1000);

        return () => clearTimeout(timer);
    }, [searchTerm, onSearch]);

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
        </div>
    );
};

export default SearchBar;