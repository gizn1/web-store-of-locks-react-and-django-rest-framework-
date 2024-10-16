import React, {useState,useEffect}from "react";
import ProductsCss from "../../../style/local/main/Products";
import icon from '../../../img/Rectangle2.jpeg'

const Products = (props) =>{
	let list = [[1,'Дверной Замок Golden Soft для отеля','32 000','37 000',icon],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon],
	[1,'Дверной Замок Golden Soft для отеля','35 000','37 000',icon],[1,'Дверной Замок Golden Soft для отеля','33 000','38 000',icon],[1,'Дверной Замок Golden Soft для отеля','33 000','38 000',icon]]
	const [view,setView] = useState(0)
	let listView = [list[view],list[view+1],list[view+2],list[view+3]]
	console.log(listView)
    const {TopLine,Headline,ConteinerButton,Stick,Conteiner,Item,ItemImage,State,Present,ConteinerProducts,Sale,ItemInfo,ItemText,ConteinerPrice,PriceNow,PriceOld} =ProductsCss
	useEffect(()=>{  let listView = [list[view],list[view+1],list[view+2],list[view+3]]  },{view})
	const minus =()=>{
        
		console.log(view)
       
        if (view-1 >= 0 ){
			setView(view-1)
        }
        
		
    }
    const plus =()=>{
        
        console.log(view)
        if (view+4 <= list.length-1){
            
            setView(view+1)
        }
        
       
    }
	return(
<ConteinerProducts>

<TopLine>
<Headline>{props.headline}</Headline>
<ConteinerButton>
<Stick onClick={minus}><svg width="40.000000" height="40.000000" viewBox="0 0 40 40">
	
	<g clip-path="url(#clip52_1272)">
		<path id="Vector" d="M26.66 33.33L13.33 20L26.66 6.66" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>

</Stick>
    
    <Stick onClick={plus}><svg width="40.000000" height="40.000000" viewBox="0 0 40 40" >
	
	<g clip-path="url(#clip52_1270)">
		<path id="Vector" d="M13.33 6.66L26.66 20L13.33 33.33"  stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
</Stick></ConteinerButton>
</TopLine>
<Conteiner>
	
	{listView.map(item=>(
		<Item href="#">
<ItemImage $image={item[4]}>
<div className="" style = {{display:'flex', alignItems: 'baseline',
    justifyContent: 'space-between'}}><State>
        <svg style = {{marginRight:'12px'}} width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" >
	<defs>
		<clipPath id="clip16_1570">
			<rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="1.000000"/>
	<g clip-path="url(#clip16_1570)">
		<path id="Vector" d="M6 10L9 13L14 7" stroke="#24C56E" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
 В наличии</State><Sale>SALE</Sale></div>
<Present><svg width="12.000000" height="12.000000" viewBox="0 0 12 12" fill="none" style = {{marginRight:'10px'}}>
	<defs>
		<clipPath id="clip16_1615">
			<rect id="gift 1" rx="-0.500000" width="11.000000" height="11.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="gift 1" rx="-0.500000" width="11.000000" height="11.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip16_1615)">
		<path id="Vector" d="M11 4.5L1 4.5C0.86 4.5 0.75 4.61 0.75 4.75L0.75 11.75C0.75 11.88 0.86 12 1 12L11 12C11.13 12 11.25 11.88 11.25 11.75L11.25 4.75C11.25 4.61 11.13 4.5 11 4.5ZM10.75 11.5L1.25 11.5L1.25 5L10.75 5L10.75 11.5L10.75 11.5Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M11.5 2.5L0.5 2.5C0.36 2.5 0.25 2.61 0.25 2.75L0.25 4.75C0.25 4.88 0.36 5 0.5 5L11.5 5C11.63 5 11.75 4.88 11.75 4.75L11.75 2.75C11.75 2.61 11.63 2.5 11.5 2.5ZM11.25 4.5L0.75 4.5L0.75 3L11.25 3L11.25 4.5Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M6 2.5C5.86 2.5 5.75 2.61 5.75 2.75L5.75 11.75C5.75 11.88 5.86 12 6 12C6.13 12 6.25 11.88 6.25 11.75L6.25 2.75C6.25 2.61 6.13 2.5 6 2.5Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M6.25 2.69C5.99 1.48 4.46 0.19 3.44 0.01C3.38 0 3.31 0 3.25 0C2.69 0 2.25 0.44 2.25 1C2.25 1.23 2.33 1.45 2.47 1.63C2.47 1.63 2.47 1.63 2.48 1.64C3.22 2.58 5.69 2.95 5.97 2.99C5.98 2.99 5.99 2.99 6.01 2.99C6.08 2.99 6.14 2.96 6.19 2.91C6.24 2.85 6.27 2.77 6.25 2.69ZM2.86 1.32C2.86 1.31 2.85 1.31 2.85 1.3C2.78 1.21 2.75 1.11 2.75 1C2.75 0.72 2.97 0.5 3.25 0.5C3.28 0.5 3.31 0.5 3.35 0.51C4.1 0.63 5.23 1.54 5.64 2.42C4.77 2.26 3.3 1.89 2.86 1.32Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M8.74 0C8.68 0 8.61 0 8.56 0.01C7.53 0.19 6 1.48 5.74 2.69C5.72 2.77 5.75 2.85 5.8 2.91C5.85 2.96 5.92 2.99 5.98 2.99C6 2.99 6.01 2.99 6.02 2.99C6.3 2.95 8.77 2.58 9.51 1.64C9.51 1.63 9.52 1.63 9.52 1.63C9.66 1.45 9.74 1.23 9.74 1C9.74 0.44 9.3 0 8.74 0ZM9.14 1.3C9.14 1.31 9.13 1.31 9.13 1.32C8.69 1.89 7.22 2.26 6.35 2.42C6.76 1.54 7.89 0.63 8.65 0.5C8.68 0.5 8.71 0.5 8.74 0.5C9.02 0.5 9.24 0.72 9.24 1C9.24 1.11 9.21 1.21 9.14 1.3Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
	</g>
</svg>
Подарок</Present>
</ItemImage>
<ItemInfo>
<ItemText>{item[1]}</ItemText>
<ConteinerPrice><PriceNow>{item[2]}₽</PriceNow><PriceOld>{item[3]}₽</PriceOld></ConteinerPrice>
</ItemInfo>
</Item>
	))}



</Conteiner>


</ConteinerProducts>

    )
}

export default Products