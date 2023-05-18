import React, { useContext } from "react";
import { Header } from "./styles.js";
import { Link, Outlet } from "react-router-dom";
import { StyledBackButton, StyledExitButton } from "../../styles/buttons.js";
import { UserContext } from "../../contexts/UserContext.jsx";

export const StyledHeader = () => {
    const {
        isDashboardPage,
        isRegisterPage,
        isLoginPage,
        logoutFunction,
        isLoading,
    } = useContext(UserContext);

    return (
        <>
            <Header>
                <div className="headerContainer container">
                    <div
                        className={
                            isLoginPage
                                ? "textAlignCenter container"
                                : undefined
                        }
                    >
                        <h1 className="">Kenzie Hub</h1>
                    </div>
                    {isRegisterPage && (
                        <nav>
                            <Link to="/">
                                <StyledBackButton>Voltar</StyledBackButton>
                            </Link>
                        </nav>
                    )}
                    {isDashboardPage && (
                        <nav>
                            <StyledExitButton
                                onClick={() => logoutFunction()}
                                disabled={isLoading ? true : false}
                            >
                                {isLoading ? "Saindo..." : "Sair"}
                            </StyledExitButton>
                        </nav>
                    )}
                </div>
            </Header>
            <Outlet />
        </>
    );
};
