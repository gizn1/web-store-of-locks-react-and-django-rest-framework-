import styled from "styled-components";


const WhyCss = {
    Headline: styled.div`
    text-align: center;
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 44px;
font-weight: 600;
line-height: 62px;
letter-spacing: 0%;
text-align: center;
margin-bottom: 56px;

    `,
    Conteiner:styled.div`
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-left: 100px;
margin-right: 100px;
max-width: 1239px;
margin-bottom: 100px;
    `,

Item: styled.div`
padding: 24px;
display: flex;
flex-direction: column;
border-left: 1px solid rgb(196, 204, 215);
border-right: 1px solid rgb(196, 204, 215);
max-width: 345px;
align-items: center;
`,
Text: styled.div`
    width: 345px;
    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: center;
    margin-top: 38px;
`
}


export default WhyCss