import React,{useEffect,useState} from "react";
import ProductSlider_css from "../../../style/local/main/SliderProduct";
import product_img from '../../../img/Rectangle 751.jpeg'
import product_img2 from '../../../img/Rectangle 19.svg'

const SliderProduct = () =>{
    const {Active, Point ,Pref, Next,ImgSmall, ConteinerControlers,Alb,PointActive ,Des,Img,ButtonPay ,PriceOld ,PriceNow ,PriceConteiner, TitlePrice, Descriptchen,Descriptchen2 ,Titele ,Conteiner} = ProductSlider_css
    
    const list = [[product_img,'Golden Soft ',' GS-200Z-5 для офиса' ,'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.','Подходит для установки на деревянную/межкомнатную дверь.','33 000₽','37 000₽'],
    [product_img2,'Golden Soft', 'S-200Z-5 для офиса' ,'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.','Подходит для установки на деревянную/межкомнатную дверь.','34 000₽','37 000₽'],
    [product_img,'Golden Soft',' GS-200Z-5 для офиса' ,'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.','Подходит для установки на деревянную/межкомнатную дверь.','32 000₽','37 000₽']]
    
    const [view,setView] = useState(0)
    const [img,setImg] = useState(list[0][0])
    const [title,setTitle] = useState(list[0][1])
    const [model,setModel] = useState(list[0][2])
    const [des,setDes] = useState(list[0][3])
    const [des2,des2Set] = useState(list[0][4])
    const [priceNow,setPriceNow] = useState(list[0][5])
    const [priceOld,serPriceOld] = useState(list[0][6])
    var listPoint  = list.reduce(function(result,item,index){
        result.push(index  === view ? <Active><PointActive></PointActive></Active> : <Point ></Point>)
        console.log(result)
        return result
    },[])
    console.log(listPoint)
    useEffect(()=>{
       

   
    setImg(list[view][0])
    setTitle(list[view][1])
    setModel(list[view][2])
    setDes(list[view][3])
    des2Set(list[view][4])
    setPriceNow(list[view][5])
    serPriceOld(list[view][6])
    
    
    
    
       

    },[view])
    const minus =()=>{
        
        
       
        if (view-1 < 0){
            setView(list.length-1)
        }
        else{
            setView(view-1)
        }
    }
    const plus =()=>{
        
        
        if (view+1 > list.length-1){
            console.log(2)
            setView(0)
        }
        else{
            setView(view+1)
        }
       
    }
    
    return(
        <>
        <Conteiner>
        <ImgSmall>
        <img height={'312px'} width={'370px'} src={img} alt="" style={{ backgroundColor: "#ffffff;" }}/></ImgSmall>
        <Img>
        <img height={'663px'} src={img} alt="" style={{ backgroundColor: "#ffffff;" }}/></Img>
        <div className="">
        <Titele>
        
            {view}
        {title}<br/>
        {model}
        </Titele>
        <Des>
        {des}
        </Des>
        <Alb>{des2}</Alb>
        <TitlePrice>
        Цена
        </TitlePrice>
        <PriceConteiner>
        <PriceNow>
        {priceNow}
        </PriceNow>
        <PriceOld>
        {priceOld}

        </PriceOld>
        </PriceConteiner>
        <ButtonPay>Добавить в корзину</ButtonPay>
        </div>
        </Conteiner>

        <ConteinerControlers>
        <Pref onClick={minus}><svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" >
	<defs>
		<clipPath id="clip52_1203">
			<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(32.500000 32.500000) rotate(180.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(32.500000 32.500000) rotate(180.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip52_1203)">
		<path id="Vector" d="M21.33 26.66L10.66 16L21.33 5.33" stroke="#161C24" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
</Pref>
<div style={{    display: 'flex', alignItems: 'center'}} className="">
{listPoint.map(item => (item))}
</div>

        <Next onClick={plus}> <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none">
	<defs>
		<clipPath id="clip52_1211">
			<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip52_1211)">
		<path id="Vector" d="M10.66 5.33L21.33 16L10.66 26.66" stroke="#161C24" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>

</Next >
        </ConteinerControlers>
        </>
    )
}

export default SliderProduct