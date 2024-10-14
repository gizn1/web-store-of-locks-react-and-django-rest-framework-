import React from "react";
import Head from "../globals/Head";
import Foot from "../globals/Foot";
import Goods from "../locals/Katalog/Goods";
import CssPage from "../../style/page/Page";

const KatalogPage = () =>{
    const {Conteiner,Color} = CssPage

    return(
        <>
        <Head></Head>
        <Conteiner >
        <Goods ></Goods>
        </Conteiner>
        <Foot></Foot>
        </>
    )


}
export default KatalogPage