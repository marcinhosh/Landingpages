import styledComponents, { css } from "styled-components";

export const Wrapper = styledComponents.div`
${(props) => css`
    background: ${props.background};
`}

`;