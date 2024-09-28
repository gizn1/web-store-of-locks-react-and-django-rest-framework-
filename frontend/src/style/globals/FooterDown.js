import styled from "styled-components";

const FooterDewonCss = {
    FooterConteiner: styled.div`
    margin: 0 100px;
    padding-top: 56px;
    display: flex;
    padding-bottom: 56px;
    justify-content: space-between;
    `,
    IconColum: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    
    `,
    SocConteiner: styled.div`
    display: flex;
    justify-content: space-between;
    `,
    ConteinerInfo: styled.div`
    display: flex;
    justify-content: space-between;
    width: 937px;
    `,

    ColunInfo: styled.div`
    display: flex;
    flex-direction: column;
   
    `,
    ColumHeadline: styled.div`
   
   color: rgb(255, 255, 255);
font-family: SF Pro Text;
font-size: 18px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0%;
text-align: left;
text-transform: capitalize;
    `,
    ColumItem: styled.a`
    max-width: 182px;
color: rgb(255, 255, 255);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 300;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 16px;
    `,
    HeadlineItem:styled.div`
    color: rgb(196, 205, 213);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 300;
line-height: 17px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 16px;
margin-top: 8px;
    `

}

export default FooterDewonCss