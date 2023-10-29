import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const defaultValue= {
    user: null,
    setUser: () => {},
};

export const AuthContext = React.createContext(defaultValue);

export const useAuthContext = () => React.useContext(AuthContext);

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(undefined);
    const navigate = useNavigate();

    React.useEffect(() => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            if (!user) {
                setUser(null)
            } else {
                setUser(user)
            }
        } catch (error) {
            localStorage.removeItem('user')
            setUser(null)
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user: user,
                setUser: setUser,
                logout: () => {
                    navigate('/')
                    localStorage.removeItem('user')
                    setUser(null)
                }
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
