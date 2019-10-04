export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axiosWithAuth.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    });
};