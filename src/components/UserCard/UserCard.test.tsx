import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './UserCard';

const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: {
        street: '123 Main St',
        suite: 'Apt 4',
        city: 'New York',
        zipcode: '10001',
        geo: {
            lat: '40.7128',
            lng: '74.0060',
        },
    },
    username: 'johndoe',
    website: 'example.com',
    company: {
        name: 'Company Inc',
        catchPhrase: 'Great company',
        bs: 'bs',
    },
};

describe('UserCard Component with SWC', () => {
    it('should render user data correctly', () => {
        const mockClick = vi.fn();
        render(<UserCard user={mockUser} onDetailsClick={mockClick} />);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('should call handler on button click', async () => {
        const mockClick = vi.fn();
        render(<UserCard user={mockUser} onDetailsClick={mockClick} />);

        await fireEvent.click(screen.getByText('Info'));
        expect(mockClick).toHaveBeenCalledWith(mockUser);
    });
});