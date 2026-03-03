import { createContext, useContext, useState, useEffect } from 'react';
import { getAuthUser, removeAuthUser, setAuthUser } from '../utils/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(getAuthUser());

    useEffect(() => {
        setUser(getAuthUser());
    }, []);

    const login = (userData) => {
        setAuthUser(userData);
        setUser(userData);
    };

    const logout = () => {
        removeAuthUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
