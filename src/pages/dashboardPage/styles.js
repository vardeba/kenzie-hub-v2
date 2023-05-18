import styled from "styled-components";

export const DashboardPage = styled.div`
    display: flex;
    flex-direction: column;

    .dashboardHeaderContainer {
        height: 8.1875rem;
        padding-top: 2rem;
        padding-bottom: 2rem;

        border-top: 0.0625rem solid var(--color-gray-3);
        border-bottom: 0.0625rem solid var(--color-gray-3);
    }

    .dashboardHeader {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;

        h1 {
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
        }
    }

    .techsHeader {
        height: 2rem;
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-size: var(--title);
            font-weight: var(--font-weight-2);
            line-height: var(--line-height);
            color: var(--color-gray-0);
        }
    }

    @media (min-width: 30rem) {
        .dashboardHeaderContainer {
            height: 7.375rem;
        }
        .dashboardHeader {
            flex-direction: row;
            align-items: center;
        }
    }
`;
