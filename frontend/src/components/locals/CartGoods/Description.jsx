import React from "react";

import DescriptionCss from "../../../style/local/CartGoods/Description";
import InfoCss from "../../../style/local/Katalog/Info";

import picture from '../../../img/Rectangle780.jpeg';
import Y from '../../../img/Frame(1).svg';
const Description =() =>{
    const {Contreiner,Text,HeadLine,Advantages} = DescriptionCss
    const {Check,Item} = InfoCss
    return( 
        <>
<Contreiner>
<div>
<Text>Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы – 
    этот замок сразу заявляет о своем высоком статусе. Изысканный черный цвет корпуса в обрамлении из золота мгновенно притягивает
     взгляды. Функционален, удобен в работе и легок в уходе: для сохранения блеска достаточно лишь протереть поверхность салфеткой.</Text>
<Text>Подходит для установки на деревянную/межкомнатную дверь.</Text>
<HeadLine>Преимущества умного замка от Golden Soft с приложением:</HeadLine>
<Advantages><Check style={{marginRight:'8px', padding:'4px', borderRadius:' 2px',marginTop: '5px'}}><img src={Y} alt="" /></Check> Минимизирует кражи среди персонала</Advantages>
<Advantages><Check style={{marginRight:'8px', padding:'4px', borderRadius:' 2px',marginTop: '5px'}}><img src={Y} alt="" /></Check> Сложно взломать, высокая надежность</Advantages>
<Advantages><Check style={{marginRight:'8px', padding:'4px', borderRadius:' 2px',marginTop: '5px'}}><img src={Y} alt="" /></Check> Можно отказаться от создания физических карт или ключей и высылать электронный ключ новым сотрудникам прямо на смартфон</Advantages>
<Advantages><Check style={{marginRight:'8px', padding:'4px', borderRadius:' 2px',marginTop: '5px'}}><img src={Y} alt="" /></Check> Отслеживание статистики открытий с информацией о каждом открывавшем замок человеке</Advantages>


<Text>
Каждый ключ записывается в память замка с уникальным токеном, что делает почти невозможным подделку цифрового ключа. 
Замки программируются с помощью Bluetooth-соединения с приложением на вашем устройстве или с помощью мастер – карты, 
которая переводит замок в режим программирования, а после получения ключа вы сможете выставить для себя уникальный пин-код
 или настроить отпечаток пальца прямо через приложение. Также, вы всегда
 можете выписывать карты или браслеты стандарта Mifare с помощью Энкодера в связке с приложением на ПК либо Android
</Text>
</div>
<img src={picture} alt="" />
</Contreiner>
        </>
    )

}
export default Description