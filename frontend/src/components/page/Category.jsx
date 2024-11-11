import React,{useState,useEffect} from "react";
import Head from "../globals/Head";
import Foot from "../globals/Foot";
import CssPage from "../../style/page/Page";
import CategoryItem from "../locals/Category/Category";
import axios from "axios";

const PageCategory = () =>{

const [category,setCategory] = useState(0)
const [state,setState] = useState(false)
const getAPICategory = async () =>{
    const  response = await axios('http://127.0.0.1:8000/product/category-list')
    
    setCategory(response)
}

useEffect(()=>{
    setState(true)
getAPICategory(category)
},[])

return(
    <>
    <Head>  
    </Head>
    
    <CategoryItem data = {category}></CategoryItem>

<Foot>

</Foot></>
)}

export default PageCategory