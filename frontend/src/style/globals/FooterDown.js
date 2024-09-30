import styled from "styled-components";

const FooterDewonCss = {
    FooterConteiner: styled.div`
    margin: 0 100px;
    padding-top: 56px;
    display: flex;
    padding-bottom: 56px;
    justify-content: space-between;
    @media(max-width:430px) {
flex-direction: column;

margin: 0 16px;
    }
    `,
    Logo: styled.div`
    margin-bottom: 146px;
    @media(max-width:430px) {
        margin-bottom: 24px;
    }
    `,
    IconColum: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width:430px) {
flex-direction: row;
align-items: center;
    }
    
    `,
    SocConteiner: styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width:430px) {
       
    }
    `,
    ConteinerInfo: styled.div`
    display: flex;
    justify-content: space-between;
    width: 937px;
    @media(max-width:430px) {
        width: 337px;
        flex-wrap: wrap;
    }
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
@media(max-width:430px) {
     
color: rgb(255, 255, 255);
font-family: SF Pro Text;
font-size: 20px;
font-weight: 500;
line-height: 30px;
letter-spacing: 0%;
text-align: left;
    }
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
@media(max-width:430px) {
     
  
color: rgb(255, 255, 255);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
         }
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
    `,
Svg: styled.div`
& + &{
    margin-left: 24px;
}
`
}

export default FooterDewonCss