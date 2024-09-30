import React from "react";
import CategoryCss from "../../../style/local/main/Category";
import Button from "../../../style/components/Button";
import bg from '../../../img/фото.jpeg'
import bg1 from '../../../img/фото1.jpeg'
import bg2 from '../../../img/фото2.jpeg'
import bg3 from '../../../img/фото3.jpeg'
const Category = () =>{
    const {ButtonItem,ItemTitle,ItemTextConteiner,Item,Conteiner,Headline,ButtonSmall,ButtonBig}  = CategoryCss
    return(<>
    
    <Headline>Категории</Headline>
    <Conteiner >
    <Item $image = {bg}>

    <ItemTextConteiner>
    <ItemTitle>Для отелей</ItemTitle>
    <ButtonItem href="#">Перейти</ButtonItem>
    </ItemTextConteiner>

    </Item>

    <Item $image = {bg1}>

    <ItemTextConteiner>
    <ItemTitle>Для шкафчиков</ItemTitle>
    <ButtonItem href="#">Перейти</ButtonItem>
    </ItemTextConteiner>

    </Item>

    <Item $image = {bg2}>

    <ItemTextConteiner>
    <ItemTitle>Для офисов</ItemTitle>
    <ButtonItem href="#">Перейти</ButtonItem>
    </ItemTextConteiner>

    </Item>

    <Item $image = {bg3}>

    <ItemTextConteiner>
    <ItemTitle>Замки для дома</ItemTitle>
    <ButtonItem href="#">Перейти</ButtonItem>
    </ItemTextConteiner>

    </Item>

    </Conteiner>
    <ButtonBig>
    <Button style={{marginTop:'10px',marginLeft:'auto',marginRight:'auto',display: 'flex'}}>Все категории</Button></ButtonBig>
    <ButtonSmall>
    <Button style={{marginTop:'10px',marginLeft:'auto',marginRight:'auto',display: 'flex',padding:'15px 118px'}}>Все категории</Button></ButtonSmall>
    </>)
}
export default Category