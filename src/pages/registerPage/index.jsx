import React, { useEffect, useContext } from "react";
import { RegisterPage } from "./styles";
import { StyledButtonPrimary } from "../../styles/buttons";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

export const StyledRegisterPage = () => {
    const {
        setIsLoginPage,
        setIsRegisterPage,
        setIsDashboardPage,
        isLoading,
        setIsLoading,
    } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        setIsLoginPage(false);
        setIsDashboardPage(false);
        setIsRegisterPage(true);
    }, []);

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .required("Obrigatório informar o nome completo")
            .min(3, "Nome muito curto")
            .max(200, "Nome muito longo"),
        email: yup
            .string()
            .required("Obrigatório informar um e-mail")
            .email("E-mail inválido"),
        password: yup
            .string()
            .required("Obrigatório informar uma senha")
            .matches(/(?=.*\d)/, "Sua senha deve ter pelo menos um número")
            .matches(
                /(?=.*[a-zA-z])/,
                "Sua senha deve ter pelo menos uma letra"
            )
            .matches(
                /(?=.*[$*&@#])/,
                "Sua senha deve ter pelo menos um caracter especial - $*&@#"
            )
            .matches(
                /[0-9a-zA-Z$*&@#]{8,25}/,
                "A senha deve ter entre 8 e 25 caracteres"
            ),
        passwordConfirmation: yup
            .string()
            .required("Obrigatório confirmar a senha")
            .oneOf(
                [yup.ref("password")],
                "A senha digitada é diferente da informada anteriormente."
            ),
        bio: yup
            .string()
            .required("Obrigatório fornecer uma bio")
            .max(200, "Limite de 200 caracteres"),
        contact: yup
            .string()
            .required("Obriga´torio informar um telefone de contato")
            .matches(
                /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm,
                "Telefone inválido"
            ),
        course_module: yup.string().required("Obrigatório selecionar o módulo"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(formSchema),
    });

    const registerFunction = async (formData) => {
        try {
            setIsLoading(true);
            const response = await api.post("/users", formData);
            toast.success("Conta criada com sucesso");
            setTimeout(() => {
                setIsLoading(false);
                navigate("/");
            }, 3000);
        } catch (error) {
            toast.error("Já existe um usuário cadastrado com este e-mail");
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmitFunction = async (data) => {
        console.log(data);
        await registerFunction(data);
    };

    return (
        <RegisterPage className="container">
            <h2>Crie sua conta</h2>
            <p>Rápido e grátis, vamos nessa</p>
            <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Digite aqui seu nome completo"
                    {...register("name")}
                />
                {errors.name && <span>{errors.name.message}</span>}
                <label htmlFor="email">E-Mail</label>
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
                <label htmlFor="passwordConfirmation">Confirmar Senha</label>
                <input
                    type="password"
                    id="passwordConfirmation"
                    placeholder="Digite novamente sua senha"
                    {...register("passwordConfirmation")}
                />
                {errors.passwordConfirmation && (
                    <span>{errors.passwordConfirmation.message}</span>
                )}
                <label htmlFor="bio">Bio</label>
                <input
                    type="text"
                    id="bio"
                    placeholder="Fale sobre você"
                    {...register("bio")}
                />
                {errors.bio && <span>{errors.email.message}</span>}
                <label htmlFor="contact">Contato</label>
                <input
                    type="text"
                    id="contact"
                    placeholder="(12) 34567-8910"
                    {...register("contact")}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <label htmlFor="course_module">Selecionar módulo</label>
                <select id="course_module" {...register("course_module")}>
                    <option value="" hidden>
                        Seleciona o status
                    </option>
                    <option value="Primeiro módulo">Primeiro módulo</option>
                    <option value="Segundo módulo">Segundo módulo</option>
                    <option value="Terceiro módulo">Terceiro módulo</option>
                    <option value="Quarto módulo">Quarto módulo</option>
                    <option value="Quinto módulo">Quinto módulo</option>
                    <option value="Sexto módulo">Sexto módulo</option>
                </select>
                {errors.course_module && (
                    <span>{errors.course_module.message}</span>
                )}
                <StyledButtonPrimary
                    type="submit"
                    disabled={!isDirty || !isValid}
                >
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                </StyledButtonPrimary>
            </form>
        </RegisterPage>
    );
};
