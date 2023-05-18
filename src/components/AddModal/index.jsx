import React, { useContext } from "react";
import {
    StyledAddTechButton,
    StyledCloseModalButton,
} from "../../styles/buttons";
import { AddModal } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/UserContext";

export const StyledAddModal = ({ setAddModal }) => {
    const { autoLogin } = useContext(UserContext);

    const formSchema = yup.object().shape({
        title: yup
            .string()
            .required("Digite o nome da tecnologia")
            .max(50, "Nome muito longo"),
        status: yup.string().required("Obrigatório selecionar o status"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(formSchema),
    });

    const addTechFunction = async (formData) => {
        const localStorageToken = localStorage.getItem("@TOKEN");
        const token = JSON.parse(localStorageToken);
        console.log(formData);
        try {
            const response = await api.post("/users/techs", formData, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data);
            toast.success("Tecnologia cadastrada com sucesso");
        } catch (error) {
            console.error(error);
            toast.error("Não foi possível cadastrar a tecnologia");
        }
    };

    const onSubmitFunction = async (data) => {
        console.log(data);
        await addTechFunction(data);
        setAddModal(false);
        autoLogin();
    };

    return (
        <AddModal>
            <div className="modalContainer container">
                <div className="modalHeader">
                    <h2>Cadastrar Tecnologia</h2>
                    <StyledCloseModalButton onClick={() => setAddModal(false)}>
                        X
                    </StyledCloseModalButton>
                </div>
                <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
                    <label htmlFor="title">Nome</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Nome da tecnologia"
                        {...register("title")}
                    />
                    {errors.title && <span>{errors.title.message}</span>}
                    <label htmlFor="status">Selecionar status</label>
                    <select id="status" {...register("status")}>
                        <option value="" hidden>
                            Seleciona o status
                        </option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status && <span>{errors.status.message}</span>}
                    <StyledAddTechButton disabled={!isDirty || !isValid}>
                        Cadastrar Tecnologia
                    </StyledAddTechButton>
                </form>
            </div>
        </AddModal>
    );
};
