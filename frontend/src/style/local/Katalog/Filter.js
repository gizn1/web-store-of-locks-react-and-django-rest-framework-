import styled from "styled-components";
export const FilterMainOpsion = styled.div`
max-width: 240px;    
width: 100%;
box-shadow: inset 0px -1px 0px 0px rgb(237, 237, 237);


margin-block-start: 0.5lh;
  
  line-height: 0;
  transition: line-height 0.5s;
`


const FillterCss = {
    HeadLine: styled.div`
        
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
    
FilterConteiner: styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 288px;
    width: 100%;
`,
FillterReset: styled.button`
   

color: rgb(22, 28, 36);
display: flex;
align-items: center;
flex-direction: column;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
padding: 7px 0;
margin-bottom: 32px;


border: 1px solid rgb(196, 205, 213);
background: rgb(255, 255, 255);
&:hover{
    border: 1px solid rgb(173, 215, 255);
}
`,
FillterMain: styled.div`
  border: 1px solid rgb(196, 205, 213);
border-radius: 2px;
background: rgb(255, 255, 255);  

`,
FillterMainInSide: styled.div`
    width:240px ;
    margin: auto;
    padding-top: 24px;
    padding-bottom: 24px;
`,

FilterMainHeadLine: styled.div`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 22px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 24px;



`,
FilterMainOpsionHeadLine: styled.div`


display: flex;
justify-content: space-between;
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
padding: 12px 0;

`,


PriceForm: styled.input`
    width: 116px;
    height: 44px;
    box-sizing: border-box;

border: 1px solid rgb(66, 149, 228);

background: rgb(255, 255, 255);
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
padding: 10px 30px;
`,
PriceForms: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`,

FilterMainOpsionItem: styled.div`
max-width: 240px;

color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
display: flex;

`,
FilterMainOpsionItemAmount:styled.div`
color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 12px;
font-weight: 200;
line-height: 24px;
letter-spacing: 0%;
text-align: right;
`,
Check : styled.label`
    width: ${props => props.$bg ?'9px':'11px'};
    height: ${props => props.$bg ?'9px':'11px'};
    background: ${props => props.$bg ?'rgb(255, 255, 255)':'rgb(66, 149, 228)'};
   display: flex;
   padding: 5px;
   border: ${props => props.$bg ?'1px solid rgb(196, 205, 213)':''} ;
   
    
`,
}
export default FillterCss 

