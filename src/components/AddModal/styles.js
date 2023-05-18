import styled from "styled-components";

export const AddModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 100vw;
    min-height: 100vh;

    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    left: 0;
    top: 0;

    .modalContainer {
        height: 22rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: var(--color-gray-3);
        border-radius: var(--radius-2);

        .modalHeader {
            width: 100%;
            height: 2.5rem;

            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 2rem;

            position: relative;
        }

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

        input,
        select {
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
    }
`;
