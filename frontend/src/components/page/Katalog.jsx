import React,{useEffect,useState} from "react";
import Head from "../globals/Head";
import Foot from "../globals/Foot";
import Goods from "../locals/Katalog/Goods";
import CssPage from "../../style/page/Page";
import Products from "../locals/main/Products";
import Info from "../locals/Katalog/info";
import axios from "axios";
import { useLocation,Link,useSearchParams,useParams } from 'react-router-dom'

const KatalogPage = () =>{
    const {Conteiner,Color} = CssPage
    
    const location = useLocation()//получение id каталога
  	const { category_id } = location.state

    const [producs, setProsucts]= useState(0)
    const getAPIProducts= async () =>{// Запрос на товары
      const  response = await axios('http://127.0.0.1:8000/product/product-list/'+category_id)
      
      setProsucts(response)
  }
  console.log(producs)
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