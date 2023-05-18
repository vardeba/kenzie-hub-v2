import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

:root {

    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-gray-4: #121214;
    --color-gray-3: #212529;
    --color-gray-2: #343B41;
    --color-gray-1: #868E96;
    --color-gray-0: #F8F9FA;
    --color-white: #ffffff;
    --color-black: #000000;
    --color-negative: #E83F5B;
    --color-success: #3FE864;

    --title: 1rem; /* 16 */
    --headline: 0.75rem; /* 12 */
    --line-height: 1.3;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 500;
    --font-weight-4: 400;

    --radius-1: 0.5rem; /* 08 */
    --radius-2: 0.25rem; /* 04 */

    --button-border: 0.0875rem;

    --button-height-1: 3rem; /* 48 */
    --button-height-2: 2rem; /* 32 */

    --input-height: 3rem; /* 48 */

    --padding-btn-1: 0 1.375rem; /* 22 */
    --padding-btn-1: 0 1rem; /* 16 */

    --font-family-1: 'Inter', sans-serif;
    --font-family-2: 'Nunito', sans-serif;
}

body {
    background-color: #121214;
}


button {
    cursor: pointer;
    transition: 0.3s ease;
    filter: brightness(0.9);
    :hover {
        filter: brightness(1.0);
    }
}

.container {
    width: 20rem;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 30rem) {
    .container {
        width: 48.75rem;
    }
}
`;
