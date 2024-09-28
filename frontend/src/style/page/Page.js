import styled from "styled-components";

const CssPage  = {
    Conteiner: styled.div`
    max-width: 1440px;
    margin: 0 auto;
    `,
    Color: styled.div`
    background: ${props => props.$color};
    `
}

export default CssPage