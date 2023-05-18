import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledButtonGray, StyledButtonPrimary } from "../../styles/buttons";
import { LoginPage } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/UserContext";

export const StyledLoginPage = () => {
    const {
        setIsLoginPage,
        setIsRegisterPage,
        setIsDashboardPage,
        setUser,
        isLoading,
        setIsLoading,
    } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        setIsRegisterPage(false);
        setIsDashboardPage(false);
        setIsLoginPage(true);
    }, []);

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("Informe o e-mail")
            .email("E-mail inválido"),
        password: yup.string().required("Informe a senha"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(formSchema),
    });

    const loginFunction = async (formdata) => {
        try {
            setIsLoading(true);
            const response = await api.post("/sessions", formdata);
            await setUser(response.data.user);
            localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
            localStorage.setItem(
                "@USERID",
                JSON.stringify(response.data.user.id)
            );
            toast.success("Login realizado!");
            setTimeout(() => {
                setIsLoading(false);
                navigate("/dashboard");
            }, 3000);
        } catch (error) {
            toast.error("Usuário ou senha incorretos");
            setIsLoading(false);
        }
    };

    const onSubmitFunction = async (data) => {
        await loginFunction(data);
    };

    return (
        <LoginPage className="container">
            <h2>Login</h2>
            <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite aqui seu email"
                    {...register("email")}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                />
                {errors.password && <span>{errors.password.message}</span>}
                <StyledButtonPrimary
                    type="submit"
                    disabled={!isDirty || !isValid}
                >
                    {isLoading ? "Entrando" : "Entrar"}
                </StyledButtonPrimary>
            </form>
            <p>Ainda não possui uma conta?</p>
            <Link to="/register">
                <StyledButtonGray>Cadastre-se</StyledButtonGray>
            </Link>
        </LoginPage>
    );
};
