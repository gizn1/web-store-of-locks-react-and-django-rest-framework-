import styled from "styled-components";

const CategoryCss = {
    Headline: styled.div`
   
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 44px;
font-weight: 600;
line-height: 62px;
letter-spacing: 0%;
text-align: center;
    margin-bottom: 64px;
    @media(max-width:430px) {


color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 22px;
font-weight: 600;
line-height: 34px;
letter-spacing: 0%;
text-align: center;
margin-bottom: 24px;
    }
    `,

Conteiner: styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 100px;
justify-content: space-between;
@media(max-width:430px) {
margin: 0 17px;
}
`,
Item: styled.div`
background-image: url(${props => props.$image});
width: 600px;
height: 470px;
position: relative;
margin-bottom: 40px;
@media(max-width:430px) {
    width: 161px;
    height: 161px;
    background-size: no-repeat;


    background-position: 100%;
margin-bottom: 60px;
background-size: cover;
    }
`,
ItemTextConteiner: styled.div`
   position :absolute ;
    bottom: 40px;
    left: 40px;
    @media(max-width:430px) {
        bottom: -40px;
        left: 0;
    }
`,
ItemTitle: styled.div`
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 22px;
font-weight: 600;
line-height: 34px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 16px;
@media(max-width:430px) {


color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;

margin: 0;
}
`,
ButtonItem: styled.a`
/* button txt */
color: rgb(22, 28, 36);
font-family: SF Pro Display;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
padding: 12px 78px ;
border: 1px solid rgb(69, 79, 91);
border-radius: 2px;
background: none;
@media(max-width:430px) {

display: none;
    }
`,
ButtonBig:styled.div`
display: block;
@media(max-width:430px) {

display: none;
    }
`,
ButtonSmall:styled.div`
display: none;
@media(max-width:430px) {

display: block;
    }
`
}

export default CategoryCss