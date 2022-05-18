import styledComponents, { css } from "styled-components";

export const Wrapper = styledComponents.div`
${({theme}) => css`
    background: ${theme.colors.secundaryBr};
`}

`;