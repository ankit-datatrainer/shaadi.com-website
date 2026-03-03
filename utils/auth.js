export function getAuthUser() {
    const user = localStorage.getItem('authUser');
    return user ? JSON.parse(user) : null;
}

export function setAuthUser(user) {
    localStorage.setItem('authUser', JSON.stringify(user));
}

export function removeAuthUser() {
    localStorage.removeItem('authUser');
}
