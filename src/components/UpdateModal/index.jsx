import React, { useContext } from "react";
import {
    StyledAddTechButton,
    StyledCloseModalButton,
} from "../../styles/buttons";
import { UpdateModal } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";

export const StyledUpdateModal = () => {
    const { techToUpdate, setUpdateModal } = useContext(TechContext);
    const { autoLogin } = useContext(UserContext);
    const formSchema = yup.object().shape({
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

    const updateTechFunction = async (formData) => {
        const localStorageToken = localStorage.getItem("@TOKEN");
        const token = JSON.parse(localStorageToken);
        try {
            const response = await api.put(
                `/users/techs/${techToUpdate[0]}`,
                formData,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Tecnologia atualizada com sucesso");
        } catch (error) {
            toast.error("Não foi possível atualizar a tecnologia");
        }
    };

    const onSubmitFunction = async (data) => {
        await updateTechFunction(data);
        setUpdateModal(false);
        autoLogin();
    };

    return (
        <UpdateModal>
            <div className="modalContainer container">
                <div className="modalHeader">
                    <h2>Atualizar Tecnologia</h2>
                    <StyledCloseModalButton
                        onClick={() => setUpdateModal(false)}
                    >
                        X
                    </StyledCloseModalButton>
                </div>
                <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
                    <label htmlFor="title">Nome</label>
                    <input
                        type="text"
                        id="title"
                        placeholder={techToUpdate[1]}
                        disabled
                    />
                    <label htmlFor="status">Atualizar status</label>
                    <select id="status" {...register("status")}>
                        <option value="" hidden>
                            Selecione o status
                        </option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {errors.status && <span>{errors.status.message}</span>}
                    <StyledAddTechButton disabled={!isDirty || !isValid}>
                        Atualizar Tecnologia
                    </StyledAddTechButton>
                </form>
            </div>
        </UpdateModal>
    );
};
