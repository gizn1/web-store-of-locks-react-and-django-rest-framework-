import styled from "styled-components";


 const InfoCss = {
    Conteiner: styled.div`
    display: flex;
    margin: 0 100px;
    justify-content: space-between;
    align-items: center;
    &+&{
        margin-top: 82px;
    }
    `,
    ConteinerText: styled.div`
    max-width: 605px;
    `,
    Headline: styled.div`
   
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 32px;
font-weight: 600;
line-height: 42px;
letter-spacing: 0%;
text-align: left;
margin: 24px 0;
    `,
ItemList: styled.div`
display: flex;
flex-wrap: wrap;
max-width: 505px;

`,
Item: styled.div`
display: flex;
align-items: center;
margin-right: 32px;
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 16px;
`,
Check : styled.label`
    width: 11px;
    height: 11px;
    background: rgb(66, 149, 228);
   display: flex;
   padding: 5px;
   
   
    
`,
Text: styled.div`
color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 18px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0%;
text-align: left;
margin:  24px 0;  
`

 }
 export default InfoCss