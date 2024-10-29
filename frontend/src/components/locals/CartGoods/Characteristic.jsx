import React from "react";
import CharacteristicCss from "../../../style/local/CartGoods/CharacteristicCss";
const Charectericstic =() =>{
    const {Conteiner,Parment,ParametrTitl,ParametrValue} = CharacteristicCss
    const parametrs = [['Память на количество карт',2033],
    ['Приложение','Нет'],['Материал','Сталь, силиконовые вставки'],['Цвет','Черный, хром'],['Питание','DC 6V, 4 AAA'],['Разблокировка','Пин-код, карта или браслет Mifaire, ключ, приложение, отпечаток пальца'],
    ['Тип двери','Деревянная, металлическая'],['Толщина двери','38-55 мм'],['Размеры','302мм * 43мм * 22.55мм'],['Вес','2.5 кг'],['Комплектация','Без мартизы, с мартизой']]//Список параметров 
    return(
        <>
        <Conteiner>
        {parametrs.map((item,index)=>{
            return(
        <Parment $bg= {index % 2 === 0} ml= {index >= 6} >
            
        <ParametrTitl>{item[0]}</ParametrTitl><ParametrValue>{item[1]}</ParametrValue>
        </Parment>
            )
        })}
        
        
        </Conteiner>
        </>
    )
}   
export default Charectericstic