import styled from "styled-components";


const ProductsCss = {
ConteinerProducts: styled.div`
margin: 0 98px;
@media(max-width:430px) {
margin: 0 16px;
}
`,
TopLine: styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`,
    Headline: styled.div`
    /* H1 */
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 44px;
font-weight: 600;
line-height: 62px;
letter-spacing: 0%;
text-align: left;
margin-top: 100px;
margin-bottom: 64px;
@media(max-width:430px) {

color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 22px;
font-weight: 600;
line-height: 34px;
letter-spacing: 0%;
text-align: left;
}
    `,
ConteinerButton: styled.div`

display: flex;
padding-top: 40px;

`,
Stick:styled.button`
stroke: rgb(196, 205, 213);
fill: none;
transition-duration: 500ms;
width: 40px;
height: 40px;
border: transparent;
background: none;
&:hover{
    stroke: rgb(22, 28, 36);
}
&+&{
    margin-left: 40px;
}
@media(max-width:430px) {


display: none;
}
`,

Conteiner: styled.div`
display: flex;

justify-content: space-between;
margin-bottom: 96px;
@media(max-width:430px) {
    margin-bottom: 36px;
}
`,
Item: styled.a`
@media(max-width:430px) {
&+&{
    display: none;
}
}

`,
ItemImage: styled.div`
width: 288px;
height: 320px;
background-image: url(${props => props.$image});
`,
State: styled.div`
display: flex;
margin-top: 17px;
margin-left: 12px;
margin-bottom: 8px;

color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
align-items: center;
`,
Present: styled.a`
padding: 8px 6px;
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0%;
text-align: left;
text-decoration: none;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.03);
background: rgb(255, 255, 255);
margin-left: 12px;
display: flex;
    align-items: flex-end;
    max-width: 90px;
`,
Sale: styled.a`
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 12px;
font-weight: 500;
line-height: 14px;
letter-spacing: 0%;
text-align: left;
padding: 8px 10px 8px 10px;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.03);
background: rgb(255, 255, 255);
margin-right: 12px;
`,
ItemInfo:styled.div`
padding: 11px 12px;
box-shadow: inset -1px 0px 0px 0px rgb(234, 234, 234),inset 1px 0px 0px 0px rgb(234, 234, 234),inset 0px -1px 0px 0px rgb(234, 234, 234);
background: rgb(255, 255, 255);
`,
ItemText: styled.div`
color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 10px;
max-width: 264px;
`,
ConteinerPrice: styled.div`
display: flex;

`,
PriceNow: styled.div`
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 20px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
margin-right: 12px;
`,
PriceOld: styled.div`

color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 18px;
font-weight: 300;
line-height: 21px;
letter-spacing: 0%;
text-align: left;
text-decoration-line: line-through;
`
}


export default ProductsCss