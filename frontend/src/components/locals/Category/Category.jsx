import React,{useState,useEffect} from "react";
import CategoryCss from "../../../style/local/Category/Category";
import bg from '../../../img/фото.jpeg'
import bg1 from '../../../img/фото1.jpeg'
import bg2 from '../../../img/фото2.jpeg'
import Button from "../../../style/components/Button";
import styled from "styled-components";
const CategoryItem = () =>{
const {ItemText,ItemImg,Item,CategoryConteiner,Headline} = CategoryCss
let arr = [[bg,'Накладные электронные замки1'],[bg1,'Накладные электронные замки2'],[bg,'Накладные электронные замки3'],
[bg,'Накладные электронные замки4'],[bg,'Накладные электронные замки5'],[bg2,'Накладные электронные замки6'],[bg,'Накладные электронные замки6'],[bg,'Накладные электронные замки6'],[bg,'Накладные электронные замки6'],[bg,'Накладные электронные замки6']]

const [click,setClick] = useState(8)

return(
    <>
    <Headline>
    Категории
    </Headline>

    <CategoryConteiner>
       
        {arr.map((item,index)=>{
return(
    <div  style={   index < click ?{}:{display:'none'} } >
<Item  style={   index%4 == 0 ?{paddingLeft:'0'}:{paddingLeft:'30px'} }  >

    <ItemImg  $image = {item[0]}/>
    <ItemText>{item[1]}</ItemText>
    </Item></div>)
        })}
    
    
    
    </CategoryConteiner>
    <Button onClick={()=>{click === 8 ?setClick(arr.length):setClick(8)}} style={{margin:'0 auto',display: 'flex'}}>{click === 8 ?'Посмтреть все':'убрать'}</Button>
    </>
)

}

export default CategoryItem