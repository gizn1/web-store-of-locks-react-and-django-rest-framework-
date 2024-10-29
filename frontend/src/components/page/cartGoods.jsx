import React from "react";
import Head from "../globals/Head";
import Foot from "../globals/Foot";
import Crumbs from "../globals/Crubs";
import GoodsDown from "../locals/CartGoods/GoodsDown";
import Products from "../locals/main/Products";
import Info from "../locals/Katalog/info";
import TopGoods from "../locals/CartGoods/GoodTop";

import CssPage from "../../style/page/Page";
import { major } from "@mui/material";
const CartGoods = () =>{
    const {Conteiner,Color} = CssPage
    return(
        <>
        <Head></Head>
        <Conteiner><Crumbs arr = {['Каталог',"Дверь"]}></Crumbs></Conteiner>
        <Conteiner ><TopGoods></TopGoods>
        <GoodsDown></GoodsDown>

        <Products headline = {'Вы недавно просмотрели'}></Products>
        <Info></Info>
        </Conteiner>
        <Foot></Foot>
        </>
    )
}

export default CartGoods