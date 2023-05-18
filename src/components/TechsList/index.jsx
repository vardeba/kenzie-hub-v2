import React, { useContext, useEffect, useState } from "react";
import { StyledTech } from "../Tech";
import { TechsList } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";

export const StyledTechsList = () => {
    const { user } = useContext(UserContext);

    const [techList, setTechList] = useState([]);

    useEffect(() => {
        const localStorageToken = localStorage.getItem("@TOKEN");
        const token = JSON.parse(localStorageToken);
        const getTechList = async () => {
            try {
                const response = await api.get(`/profile`, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                setTechList(response.data.techs);
            } catch (error) {
                console.error(error);
            }
        };

        getTechList();
    }, [user]);

    const getTechList = async () => {
        const localStorageToken = localStorage.getItem("@TOKEN");
        const token = JSON.parse(localStorageToken);

        try {
            const response = await api.get(`/profile`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            setTechList(response.data.techs);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TechsList className="container">
            {techList < 1 ? (
                <h1>Nenhuma tecnologia cadastrada</h1>
            ) : (
                techList.map((tech) => {
                    return (
                        <StyledTech
                            key={tech.id}
                            tech={tech}
                            getTechList={getTechList}
                        />
                    );
                })
            )}
        </TechsList>
    );
};
