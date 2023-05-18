import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [addModal, setAddModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [techToDelete, setTechToDelete] = useState("");
    const [updateModal, setUpdateModal] = useState(false);
    const [techToUpdate, setTechToUpdate] = useState([]);

    const deleteTechFunction = async (id) => {
        const localStorageToken = localStorage.getItem("@TOKEN");
        const token = JSON.parse(localStorageToken);
        try {
            const response = await api.delete(`/users/techs/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            toast.success("Tecnologia deletada com sucesso");
        } catch (error) {
            toast.error("Não foi possível deletar a tecnologia");
        }
    };

    return (
        <TechContext.Provider
            value={{
                addModal,
                setAddModal,
                deleteModal,
                setDeleteModal,
                techToDelete,
                setTechToDelete,
                deleteTechFunction,
                updateModal,
                setUpdateModal,
                techToUpdate,
                setTechToUpdate,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};
