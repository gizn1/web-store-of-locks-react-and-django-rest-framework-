import styled from "styled-components"

const GoodsCss = {
    Conteiner: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 34px;
    
    `,
    HeadLine: styled.div`
        margin-left: 100px;
        
        
        align-items: center;
        color: rgb(0, 0, 0);
font-family: SF Pro Text;
font-size: 28px;
font-weight: 600;
line-height: 42px;
letter-spacing: 0%;
text-align: left;
margin-top: 40px;
margin-bottom: 32px;
display: flex;
    `,
    Amount: styled.div`
        
        color: rgb(0, 0, 0);
font-family: SF Pro Text;
font-size: 18px;
font-weight: 300;
line-height: 28px;
letter-spacing: 0%;
text-align: left;
margin-left: 12px;
    `,

    Comments: styled.div`
    display: flex;
    width: 192px;
    justify-content: space-between;
    color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 13px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0%;
text-align: left;
    `,
Stars: styled.div`
width: 104px;
display: flex;
justify-content: space-between;
align-items: center;
`
}

export default GoodsCss

