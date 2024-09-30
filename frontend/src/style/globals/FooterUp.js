import styled from "styled-components";


const FooterUp = {
Conteiner:styled.div`
width: 748px;
margin: 0 auto;
padding-bottom: 56px;
@media(max-width:430px) {
    width: 343px;
    padding-bottom: 32px;
}
`,
    Headline: styled.div`
    margin-right: auto;
    margin-left: auto;

color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 44px;
font-weight: 600;
line-height: 62px;
letter-spacing: 0%;
text-align: center;
padding-top: 64px;
margin-bottom: 24px;
@media(max-width:430px) {
    margin-bottom:16px;
    padding-top: 32px;
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 22px;
font-weight: 600;
line-height: 34px;
letter-spacing: 0%;
text-align: center;
}
    `,
    Text: styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 518px;
color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: center;
margin-bottom: 24px;
@media(max-width:430px) {

color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: center;
float: center;
}

    `,
    ConteinerForm: styled.form`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    
    justify-content: space-between;
    max-width: 748px;
    @media(max-width:430px) {
        flex-direction: column;}
    `,
    Imput: styled.input`
    width: 208px;
    height: 26px;
    background: rgba(22, 28, 36, 0.04);
    padding: 12px 16px;
    border: transparent;
    @media(max-width:430px) {
        width: auto;
        margin-bottom: 16px;
    }

color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
&:active, :hover, :focus{
    outline: 0;
    outline-offset: 0;
}
    `,

    Small: styled.div`
    display: none;
    @media(max-width:430px) {
display: block;
    }
    `,
Big:styled.div`
        display: block;
        @media(max-width:430px) {
    display: none;
        } 
    `
}
export default FooterUp