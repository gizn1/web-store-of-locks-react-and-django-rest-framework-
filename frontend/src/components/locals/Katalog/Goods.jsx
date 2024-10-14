import React,{useState} from "react";
import Filter from "./Filter";
import GoodsTols from "./GoodsTols";
import GoodsCss from "../../../style/local/Katalog/Goods"
import Crumbs from "../../globals/Crubs";
const Goods = () =>{
    const [value,setValue]= useState()
    const {Amount,HeadLine} = GoodsCss
    const handleChange = (value)=>{
    
    setValue(value)
    }
    return(
        <>
        <Crumbs arr= {['Каталог']}></Crumbs>
        <HeadLine>Накладные электронные замки <Amount>(854)</Amount></HeadLine>
        <div style={{ display:'flex' , justifyContent:'space-between',marginRight:'100px'}}>
        <Filter onChange={event=>handleChange(event)}></Filter>
        
        <div>
        <GoodsTols value = {value}></GoodsTols>
        </div>
        </div>
        </>
        
    )

}
export default Goods