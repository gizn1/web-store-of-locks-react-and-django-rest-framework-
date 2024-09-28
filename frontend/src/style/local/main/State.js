import styled from "styled-components";

const StateCss = {
Conteiner: styled.div`
    max-width: 826px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 40px 0;
    margin-bottom: 93px;
`,
Item: styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,
Numb: styled.div`
 
    color: rgb(22, 28, 36);
    font-family: SF Pro Display;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 16px;
    
    `,
Title: styled.div`

    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
`
}


export default StateCss