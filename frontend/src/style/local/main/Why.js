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

@media(max-width:430px) {
        
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 22px;
font-weight: 600;
line-height: 34px;
letter-spacing: 0%;
text-align: center;
        }

    `,
    Conteiner:styled.div`
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-left: 100px;
margin-right: 100px;
max-width: 1239px;
margin-bottom: 100px;
@media(max-width:430px) {
    margin:  0 16px;
    margin-bottom: 40px;
        flex-direction:column;
            }
    `,

Item: styled.div`
padding: 24px;
display: flex;
flex-direction: column;
border-left: 1px solid rgb(196, 204, 215);
border-right: 1px solid rgb(196, 204, 215);
max-width: 345px;
align-items: center;
@media(max-width:430px) {
    
    padding:  24px 28px;
    border-left: transparent;
    border-right: transparent;
    border-top: 1px solid rgb(196, 204, 215);
    border-bottom: 1px solid rgb(196, 204, 215);
            }
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
    @media(max-width:430px) {
        margin-top: 20px;
        max-width: 287px;
color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0%;
text-align: center;
    }
`
}


export default WhyCss