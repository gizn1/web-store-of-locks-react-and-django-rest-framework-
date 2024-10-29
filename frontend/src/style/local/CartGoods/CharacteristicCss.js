import styled from "styled-components";

const CharacteristicCss = {
    Conteiner: styled.div`
    margin-left: 100px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 24px;
    max-height: 370px;
    `,
    Parment: styled.div`
    max-width: 605px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    margin-left: ${props => props.ml ? '30px':''};
    background: ${ props => props.$bg ? 'rgb(250, 250, 250); ':' rgb(255, 255, 255)'} ;
    padding: 16px 12px;
    `,
    ParametrTitl: styled.span`
    color: rgb(24, 24, 24);
    font-family: SF Pro Text;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    max-width: 260px;
    `,
    ParametrValue: styled.div`
    max-width: 260px;
    width: 100%;
    color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
    `
}

export default CharacteristicCss