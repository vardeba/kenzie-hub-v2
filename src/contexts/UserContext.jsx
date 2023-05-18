import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginPage, setIsLoginPage] = useState(false);
    const [isRegisterPage, setIsRegisterPage] = useState(false);
    const [isDashboardPage, setIsDashboardPage] = useState(false);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const logoutFunction = () => {
        setIsLoading(true);
        toast.success("Logout realizado");
        setTimeout(() => {
            setUser({});
            localStorage.clear();
            setIsLoading(false);
            navigate("/");
        }, 3000);
    };

    const autoLogin = async () => {
        const localStorageToken = localStorage.getItem("@TOKEN");

        if (!localStorageToken) {
            navigate("/");
        } else {
            setIsLoading(true);
            const token = JSON.parse(localStorageToken);

            try {
                const response = await api.get(`/profile`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
                setIsLoading(false);
                navigate("/dashboard");
            } catch (error) {
                navigate("/");
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        autoLogin();
    }, []);

    return (
        <UserContext.Provider
            value={{
                isLoading,
                setIsLoading,
                isLoginPage,
                setIsLoginPage,
                isRegisterPage,
                setIsRegisterPage,
                isDashboardPage,
                setIsDashboardPage,
                user,
                setUser,
                logoutFunction,
                autoLogin,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
