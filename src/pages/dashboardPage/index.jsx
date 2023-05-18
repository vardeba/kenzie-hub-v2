import React, { useContext, useEffect, useState } from "react";
import { StyledAddButton } from "../../styles/buttons";
import { DashboardPage } from "./styles";
import { MdAdd } from "react-icons/md";
import { StyledTechsList } from "../../components/TechsList";
import { UserContext } from "../../contexts/UserContext";
import { StyledAddModal } from "../../components/AddModal";
import { TechContext } from "../../contexts/TechContext";
import { StyledDeleteModal } from "../../components/DeleteModal";
import { StyledUpdateModal } from "../../components/UpdateModal";

export const StyledDashboardPage = () => {
    const {
        setIsLoginPage,
        setIsRegisterPage,
        setIsDashboardPage,
        user,
        autoLogin,
    } = useContext(UserContext);

    const {
        deleteModal,
        setDeleteModal,
        techToDelete,
        setTechToDelete,
        deleteTechFunction,
        updateModal,
    } = useContext(TechContext);

    const [addModal, setAddModal] = useState(false);

    useEffect(() => {
        setIsRegisterPage(false);
        setIsLoginPage(false);
        setIsDashboardPage(true);
    }, []);

    return (
        <DashboardPage>
            <div className="dashboardHeaderContainer">
                <section className="dashboardHeader container">
                    <h1>{user.name}</h1>
                    <p>{user.course_module}</p>
                </section>
            </div>
            <div className="techsContainer container">
                <div className="techsHeader">
                    <h2>Tecnologias</h2>
                    <StyledAddButton onClick={() => setAddModal(true)}>
                        <MdAdd name="MdAdd" size={20} color={"white"} />
                    </StyledAddButton>
                </div>
            </div>
            <StyledTechsList />
            {addModal ? <StyledAddModal setAddModal={setAddModal} /> : <></>}
            {deleteModal ? (
                <StyledDeleteModal
                    setDeleteModal={setDeleteModal}
                    techToDelete={techToDelete}
                    setTechToDelete={setTechToDelete}
                    deleteTechFunction={deleteTechFunction}
                    autoLogin={autoLogin}
                />
            ) : (
                <></>
            )}
            {updateModal ? <StyledUpdateModal /> : <></>}
        </DashboardPage>
    );
};
