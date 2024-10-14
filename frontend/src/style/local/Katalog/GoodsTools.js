import styled from "styled-components";
import GoodsTols from "../../../components/locals/Katalog/GoodsTols";

const GoodsToolsCss = {

    ToolsConteriner: styled.div`
        display: flex;
        width: 927px;
        
    justify-content: space-between;
    `,
    Filters: styled.div`
        display: flex;
        flex-wrap: wrap;
        max-width: 448px;

    `,
    ItemFilter: styled.div`
    
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
display: flex;
align-items: center;
margin-right: 14px;
    `,

    TypeShowing: styled.select`
    box-sizing: border-box;

border: 1px solid rgb(196, 205, 213);
width: 194px;
height: 40px;

color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
padding: 7px 16px;
display: flex;
    align-items: center;
    justify-content: space-between;
    `
}

export default GoodsToolsCss