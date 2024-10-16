import React from "react";
import InfoCss from "../../../style/local/Katalog/Info";
import image1 from '../../../img/white-2.jpeg'
import image2 from '../../../img/white3.jpeg'
import Y from '../../../img/Frame(1).svg'
const Info = () =>{
    const {Check,Item,ItemList,Headline,ConteinerText,Conteiner,Text} = InfoCss

    return(
        <>
        <Conteiner>
        <ConteinerText>
        <Headline>
        Eget quis quam metus, scelerisque.
        </Headline>
        <Text>
        Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.
        </Text>
        <ItemList>
        <Item><Check style={{marginRight:'12px'}}><img src={Y} alt="" /></Check> Межкомнатую дверь</Item>
        <Item><Check style={{marginRight:'12px'}}><img src={Y} alt="" /></Check> Межкомнатую дверь</Item>
        <Item><Check style={{marginRight:'12px'}}><img src={Y} alt="" /></Check> Межкомнатую дверь</Item>
        <Item><Check style={{marginRight:'12px'}}><img src={Y} alt="" /></Check> Межкомнатую дверь</Item>
        </ItemList>
        <Text>
        Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. 
        In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.</Text>
        </ConteinerText>
<img src={image1} alt="" />
        </Conteiner>


        <Conteiner style={{marginBottom:'100px'}}>
        <img src={image2} alt="" />
        <ConteinerText>
        <Headline>
        Eget quis quam metus, scelerisque.
        </Headline>
        <Text>
        Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.
        </Text>
        
        <Text>
        Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. 
        In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.</Text>
        </ConteinerText>

        </Conteiner>
        </>
    )
}
export default Info