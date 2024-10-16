import React from "react";
import Head from "../globals/Head";
import Foot from "../globals/Foot";
import CssPage from "../../style/page/Page";
import SliderProduct from "../locals/main/ProductSlider";
import State from "../locals/main/State";
import Why from "../locals/main/Why";
import Category from "../locals/main/Category";
import Products from "../locals/main/Products";
const Main = () =>{
const {Conteiner,Color} = CssPage
return(
    <>
    
    
    <Head></Head>
    
    <Color $color={'rgb(247, 247, 247)'}>
    <Conteiner>
    
    <SliderProduct></SliderProduct>
    </Conteiner>
    </Color>


    <Color $color={'rgb(242, 248, 255)'}>
    <Conteiner>
    
    <State></State>
    </Conteiner>
    </Color>

    <Conteiner>
    <Why></Why>
    </Conteiner>

    <Conteiner>
    <Category></Category>
    </Conteiner>
    

    <Conteiner>
    <Products headline = {'Наши популярные продукты'}></Products>
    </Conteiner>

    <Foot></Foot>
    </>
)
}

export default Main 