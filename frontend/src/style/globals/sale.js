import styled from "styled-components";


const css_sale = {
ConteinerSalle: styled.div`
height: 44px;
/* Grey */
background: rgb(69, 79, 91);
position: relative;
@media(max-width: 430px) {
    height:36px;
}
`,
Text : styled.a`
text-decoration:none;
color: rgb(255, 255, 255);
font-family: SF Pro Display;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 12%;
display: flex;
justify-content: center;
padding: 9px;

@media(max-width: 430px) {
    color: rgb(255, 255, 255);
font-family: SF Pro Display;
font-size: 12px;
font-weight: 400;
line-height: 12px;
letter-spacing: 2%;
text-align: left;
padding: 12px 24px;
}
`,

CallBack: styled.div`
color: rgb(255, 255, 255);
font-family: SF Pro Display;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 12%;
text-align: left;
text-decoration-line: underline;
float: right;
position: absolutes;
position: absolute;
top: 9px;
right: 100px;
@media(max-width: 430px) {
    display: none;
}
`
}

export default css_sale