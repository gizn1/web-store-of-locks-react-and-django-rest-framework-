import React from "react";
import StateCss from "../../../style/local/main/State";

const State = () =>{
    const {Title,Numb,Item,Conteiner} = StateCss

    return(
        <>
        <Conteiner>
        <Item>
        <Numb>
        5,567
        </Numb>

        <Title>
        Счастливых клиентов
        </Title>
        </Item>

        <Item>
        <Numb>
        1245
        </Numb>

        <Title>
        Продуктов на выбор
        </Title>
        </Item>

        <Item>
        <Numb>
        372
        </Numb>

        <Title>
        Продаж в день
        </Title>
        </Item>

        <Item>
        <Numb>
        20
        </Numb>

        <Title>
        Лет на рынке
        </Title>
        </Item>

        </Conteiner>
        </>
    )
}

export default State