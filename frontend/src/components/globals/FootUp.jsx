import React from "react";
import FooterUp from "../../style/globals/FooterUp";
import CssPage from "../../style/page/Page";
import Button from "../../style/components/Button";

const FootUp = () =>{
const {Imput, ConteinerForm, Text, Headline, Conteiner} = FooterUp
const {Color} = CssPage
return(
<>
<Color  $color={'rgb(242, 248, 255)'}>
<Conteiner>
<Headline>
Мы Вам перезвоним
</Headline>
<Text>Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним.</Text>
<ConteinerForm>
<Imput></Imput>
<Imput></Imput>
<Button type="submit" style={{padding:'12px 70px'}}>Отправить</Button>
</ConteinerForm>
</Conteiner>
</Color>
</>

)
}

export default FootUp