import styled from "styled-components";

const PaginCss = {
    Conteiner:styled.div`
    display: flex;
    align-items: center;
   margin-left: auto;
   margin-right: auto;
   width: 546px;
    `,
    Item: styled.div`
   
    color: ${props=> props.active ?'rgb(250, 250, 250)':'none'};
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;

width: 20px;
height: 19px;
padding: 10px 10px;
letter-spacing: 0%;
margin: 0 8px;
text-align: center;
padding: auto;
    border-radius: 2px;
    background: ${props=> props.active ?'rgb(66, 149, 228)':'none'};
    `,
    ItemConteiner: styled.div`
    
    
    display: flex;
    
    `
}
export default PaginCss