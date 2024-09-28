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
    `,

Conteiner: styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 100px;
justify-content: space-between;
`,
Item: styled.div`
background-image: url(${props => props.$image});
width: 600px;
height: 470px;
position: relative;
margin-bottom: 40px;
`,
ItemTextConteiner: styled.div`
   position :absolute ;
    bottom: 40px;
    left: 40px;
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
`
}

export default CategoryCss