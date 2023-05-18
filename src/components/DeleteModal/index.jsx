import React from "react";
import { useNavigate } from "react-router-dom";
import {
    StyledCancelDeleteTechButton,
    StyledCloseModalButton,
    StyledDeleteTechPrimary,
} from "../../styles/buttons";
import { DeleteModal } from "./styles";

export const StyledDeleteModal = ({
    setDeleteModal,
    techToDelete,
    deleteTechFunction,
    autoLogin,
}) => {
    const navigate = useNavigate();

    return (
        <DeleteModal>
            <div className="modalContainer container">
                <div className="modalHeader">
                    <h2>Deletar Tecnologia</h2>
                    <StyledCloseModalButton
                        onClick={() => setDeleteModal(false)}
                    >
                        X
                    </StyledCloseModalButton>
                </div>
                <h1>Deseja deletar esta tecnologia da lista?</h1>
                <div className="deleteModalButtons">
                    <StyledCancelDeleteTechButton
                        onClick={() => setDeleteModal(false)}
                    >
                        Cancelar
                    </StyledCancelDeleteTechButton>
                    <StyledDeleteTechPrimary
                        onClick={() => {
                            deleteTechFunction(techToDelete);
                            setDeleteModal(false);
                            autoLogin();
                        }}
                    >
                        Deletar
                    </StyledDeleteTechPrimary>
                </div>
            </div>
        </DeleteModal>
    );
};
