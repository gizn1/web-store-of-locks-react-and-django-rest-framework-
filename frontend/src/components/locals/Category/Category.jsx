import React,{useState,useEffect} from "react";
import CategoryCss from "../../../style/local/Category/Category";

import Button from "../../../style/components/Button";
import styled from "styled-components";
import { Link ,} from "react-router-dom";
const CategoryItem = (props) =>{
const {ItemText,ItemImg,Item,CategoryConteiner,Headline} = CategoryCss



let category = [1,2]


if( props.data != 0){
    category = props.data.data
}







const [click,setClick] = useState(8)

return(
    <>
    <Headline>
    Категории
    </Headline>

    <CategoryConteiner>
       
        {category.map((item,index)=>{
return(
    <Link  to={'../katalog/'+item.title} state={{from:0,category_id:item.id}} style={   index < click ?{}:{display:'none'} } >
<Item  style={   index%4 == 0 ?{paddingLeft:'0'}:{paddingLeft:'30px'} }  >

    <ItemImg  $image = {item.image}/>
    <ItemText>{item.title}</ItemText>
    </Item></Link>)
        })}
    
    
    
    </CategoryConteiner>
    <Button onClick={()=>{click === 8 ?setClick(category.length):setClick(8)}} style={{margin:'0 auto',display: 'flex'}}>{click === 8 ?'Посмтреть все':'убрать'}</Button>
    </>
)

}

export default CategoryItem