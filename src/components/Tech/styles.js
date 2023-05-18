import styled from "styled-components";

export const Tech = styled.li`
    height: var(--button-height-1);
    padding: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    gap: 1rem;
    background-color: var(--color-gray-4);
    border-radius: var(--radius-2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    :hover {
        background-color: var(--color-gray-2);
    }

    cursor: pointer;

    .techContainer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        font-size: var(--title);
        font-weight: var(--font-weight-1);
        line-height: var(--line-height);
        color: var(--color-gray-0);
    }

    p {
        font-size: var(--headline);
        font-weight: var(--font-weight-2);
        line-height: var(--line-height);
        color: var(--color-gray-1);
        padding-right: 4rem;
    }
`;
