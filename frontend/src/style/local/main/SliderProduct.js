import styled from "styled-components";

const ProductSlider_css = {
    Alb: styled.div`
    
    width: 287px;
    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 32px;

    `,

    Conteiner:styled.div`
    display: flex;
    margin-bottom: 90px;
    justify-content: center;
    padding-top: 171px;
    align-items: center;
    
    `,
    Img:styled.div`
    background: rgb(247, 247, 247);
    `,
    Titele:styled.div`
    width: 604px;
    /* H1 */
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 44px;
font-weight: 600;
line-height: 62px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 20px;
    `,
   
   
    TitlePrice:styled.div`
    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 4px;
    `,
    PriceConteiner:styled.div`
    display: flex;
    margin-bottom: 17px;
    align-items: center;
    `,
    PriceNow: styled.div`
    color: rgb(22, 28, 36);
    font-family: SF Pro Text;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0%;
    text-align: left;
    margin-right: 12px;
    `,
    PriceOld:styled.div`
    color: rgb(164, 164, 164);
    font-family: SF Pro Text;
    font-size: 22px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    text-decoration-line: line-through;
    `,
    ButtonPay:styled.button`
    
    /* button txt */
    color: rgb(255, 255, 255);
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    padding: 12px 37px;
    background: rgb(66, 149, 228);
    border: transparent;
    `,

    ConteinerControlers: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 52px;
    `,
    Next : styled.button`
    margin-right: 12px;
    border: transparent;
    background-color:transparent ;
    `,
    Pref : styled.button`
    margin-left: 12px;
    border: transparent;
    background-color:transparent ;
    `,
    Point: styled.button`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: rgb(173, 215, 255);
    border: transparent;
    margin: 0 12px ;
    padding: 0;
    `,
    PointActive: styled.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    
    background: rgb(66, 149, 228);
    
    `,
    Active: styled.div`
    padding: 8px;
    margin: 0 12px ;
    border: 1px solid rgb(173, 215, 255);
    border-radius: 100%;
    `,
   Des: styled.div`
   color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    width: 287px;
    text-align: left;
    margin-bottom: 16px;`,



}

export default ProductSlider_css