import styled from "styled-components";

const StateCss = {
Conteiner: styled.div`
    max-width: 826px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 40px 0;
    margin-bottom: 93px;
    @media(max-width:430px) {
        
    display: flex;
    flex-wrap: wrap;
    padding: 30px 30px 0px 30px;
    }
`,
Item: styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width:430px) {
        
        height: 66px;
        width: 150px;
        margin-bottom: 24px;
        }
`,
Numb: styled.div`
 
    color: rgb(22, 28, 36);
    font-family: SF Pro Display;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0%;
    text-align: left;
    
    @media(max-width:430px) {
        color: rgb(22, 28, 36);
font-family: SF Pro Display;
font-size: 24px;
font-weight: 600;
line-height: 34px;
letter-spacing: 0%;
text-align: left;
margin-bottom:8px;
    }
    
    `,
Title: styled.div`

    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    @media(max-width:430px) {
        color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;

    }
`
}


export default StateCss