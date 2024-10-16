import React from "react";
import Head from "../globals/Head";
import Foot from "../globals/Foot";
import Goods from "../locals/Katalog/Goods";
import CssPage from "../../style/page/Page";
import Products from "../locals/main/Products";
import Info from "../locals/Katalog/info";
const KatalogPage = () =>{
    const {Conteiner,Color} = CssPage

    return(
        <>
        <Head></Head>
        <Conteiner >
        <Goods ></Goods>
        <Products headline = {'Вы недавно просмотрели'}></Products>
        <Info></Info>
        </Conteiner>
       
        <Foot></Foot>
        </>
    )


}
export default KatalogPage