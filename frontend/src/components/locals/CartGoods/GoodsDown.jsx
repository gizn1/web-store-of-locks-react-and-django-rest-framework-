import React ,{useState}from "react";

import Charectericstic from "./Characteristic";
import Description from "./Description";
import Comment from "./Comment";

import GoodsDownCss from "../../../style/local/CartGoods/GoodsDownCss";



const GoodsDown = () =>{
    const [active,seActive] =useState(0)// Выбраный отдед
    const {SwichConteiner,Swich} =GoodsDownCss

    const ChangeActive = (event)=>{
        seActive(event.target.id)
    }
    return(
        <>
        <SwichConteiner>
        <Swich active = { 0 == active} onClick={ChangeActive}  id =' 0'>Характеристики</Swich>
        <Swich active = { 1 == active} onClick={ChangeActive}  id =' 1'>Описание</Swich>
        <Swich active = { 2 == active} onClick={ChangeActive}  id =' 2'>Отзывы</Swich>

        </SwichConteiner>
        <div style ={ active == 0?{display:'block'}:{display:'none'} }>
        <Charectericstic  ></Charectericstic></div>
        <div style ={ active == 1?{display:'block'}:{display:'none'} }>
        <Description></Description></div>
        <div style ={ active == 2?{display:'block'}:{display:'none'} }>
        <Comment></Comment></div>
        </>
    )
}

export default GoodsDown