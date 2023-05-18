import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { StyledLoginPage } from "./pages/loginPage";
import { StyledRegisterPage } from "./pages/registerPage";
import { StyledDashboardPage } from "./pages/dashboardPage";
import { StyledHeader } from "./components/Header";
import { StyledLoading } from "./components/Loading";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { StyledNotFoundPage } from "./pages/notFoundPage";

export const App = () => {
    const { isLoading } = useContext(UserContext);
    return (
        <div>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<StyledHeader />}>
                    <Route index element={<StyledLoginPage />} />
                    <Route path="/register" element={<StyledRegisterPage />} />
                    <Route
                        path="/dashboard"
                        element={<StyledDashboardPage />}
                    />
                </Route>
                <Route path="*" element={<StyledNotFoundPage />} />
            </Routes>
            {isLoading ? <StyledLoading /> : <></>}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

//Apenas para atualizar o repositório