import React, { useContext } from "react";
import { StyledDeleteTechButton } from "../../styles/buttons";
import { Tech } from "./styles";
import { IoTrash } from "react-icons/io5";
import { TechContext } from "../../contexts/TechContext";

export const StyledTech = ({ tech, getTechList }) => {
    const { setDeleteModal, setTechToDelete, setUpdateModal, setTechToUpdate } =
        useContext(TechContext);

    return (
        <Tech>
            <div
                className="techContainer"
                onClick={() => {
                    setTechToUpdate([tech.id, tech.title]);
                    setUpdateModal(true);
                }}
            >
                <h3>{tech.title}</h3>
                <p>{tech.status}</p>
            </div>
            <div className="deleteButtonContainer">
                <StyledDeleteTechButton
                    id={tech.id}
                    onClick={() => {
                        setTechToDelete(tech.id);
                        setDeleteModal(true);
                    }}
                >
                    <IoTrash name="IoTrash" size={20} color={"white"} />
                </StyledDeleteTechButton>
            </div>
        </Tech>
    );
};
