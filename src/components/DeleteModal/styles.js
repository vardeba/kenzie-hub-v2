import styled from "styled-components";

export const DeleteModal = styled.div`
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
        height: 18rem;
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

        h1 {
            font-size: var(--title * 2);
            font-weight: var(--font-weight-1);
            line-height: var(--line-height);
            color: var(--color-gray-0);
            margin-bottom: 2rem;
        }

        .deleteModalButtons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        @media (min-width: 30rem) {
            max-width: 23.0625rem;
        }
    }
`;
