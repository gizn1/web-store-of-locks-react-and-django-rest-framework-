import styled from "styled-components";


const GoodsDownCss ={
    SwichConteiner: styled.div`
    width: 468px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 100px;
    `,
    Swich: styled.div`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
cursor: pointer;
font-size: 20px;
font-weight: 500;
line-height: 30px;
letter-spacing: 0%;
text-align: left;
padding-bottom: ${props => props.active ? '7px':'10px'};
border-bottom: ${props => props.active ? '3px solid rgb(66, 149, 228);':''};
    `
}

export default GoodsDownCss