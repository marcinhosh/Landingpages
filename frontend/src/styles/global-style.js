import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 12px;
        padding: 0;
    }    
    body {
        ${({ theme }) => css`
        background: ${theme.colors.mainBg} 
    `}
    }
`