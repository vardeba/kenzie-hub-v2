import styled from "styled-components";

export const Header = styled.header`
    height: 4.5rem;
    display: flex;
    align-items: center;

    .headerContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    h1 {
        font-size: var(--title);
        font-weight: var(--font-weight-1);
        line-height: var(--line-height);
        color: var(--color-primary);
    }

    .textAlignCenter {
        position: absolute;
        left: 0;
        top: 0;

        h1 {
            text-align: center;
        }
    }
`;
