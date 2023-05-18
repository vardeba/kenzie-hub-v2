import styled from "styled-components";

export const LoginPage = styled.div`
    max-width: 18.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: var(--color-gray-3);
    border-radius: var(--radius-2);
    padding-top: 2rem;
    padding-bottom: 2rem;

    h2 {
        font-size: var(--title);
        font-weight: var(--font-weight-1);
        line-height: var(--line-height);
        color: var(--color-gray-0);
        margin-bottom: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        text-align: start;
        font-size: var(--headline);
        font-weight: var(--font-weight-4);
        line-height: var(--line-height);
        color: var(--color-gray-0);
        margin-bottom: 0.75rem;
    }

    input {
        height: var(--button-height-1);
        background-color: var(--color-gray-2);
        border: none;
        border-radius: var(--radius-2);
        padding-left: 1rem;
        font-size: var(--headline);
        font-weight: var(--font-weight-4);
        line-height: var(--line-height);
        color: var(--color-gray-0);
        margin-bottom: 1.5rem;
    }

    p {
        font-size: var(--headline);
        font-weight: var(--font-weight-2);
        line-height: var(--line-height);
        color: var(--color-gray-1);
        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    span {
        text-align: start;
        font-size: var(--headline);
        font-weight: var(--font-weight-2);
        color: var(--color-negative);
        transform: translateY(-1rem);
    }

    @media (min-width: 30rem) {
        max-width: 23.0625rem;
    }
`;
