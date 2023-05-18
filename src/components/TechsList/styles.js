import styled from "styled-components";

export const TechsList = styled.ul`
    min-height: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    background-color: var(--color-gray-3);
    border-radius: var(--radius-2);

    h1 {
        text-align: center;
        margin-top: 1rem;
        font-size: var(--title);
        font-weight: var(--font-weight-1);
        line-height: var(--line-height);
        color: var(--color-gray-0);
    }
`;
