import React from "react";
import PaginCss from "../../../style/local/Katalog/Pagin";
import { useLocation,Link } from 'react-router-dom'

const Pagin = () =>{
    const {ItemConteiner,Item,Conteiner} = PaginCss
	const location = useLocation()
  	const { from } = location.state
	const count = 15

	const ShowPages = ()=>{
		let arr =[]
		for (let i=from; i != count; i++){
			if ( i > from+5){
				arr.push('...')
				arr.push(<Link to="/Katalog" state={{ from: count-1 }}><Item >{count-1}</Item></Link>)
				break
			}

			console.log(from === i)
			if( from === i){
				arr.push(<Item active>{i+1}</Item>)
			}
			else{
				arr.push(<Link to="/Katalog" state={{ from: i }}><Item >{i+1}</Item></Link>)
			}
			
		}
		return(arr)
	}
return(

    <>
    <Conteiner>
		
    <svg style={{marginLeft:'24px'}} width="41.000000" height="40.000000" viewBox="0 0 41 40" fill="none" >
	<defs>
		<clipPath id="clip41_1730">
			<rect id="Icon" rx="-0.500000" width="40.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Icon" rx="-0.500000" width="40.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="1.000000"/>
	<g clip-path="url(#clip41_1730)">
		<path id="arrow" d="M19.39 27.6L11.79 20L19.39 12.39L20.45 13.45L13.38 20.53L12.85 20L13.38 19.46L20.45 26.54L19.39 27.6Z" fill="#C4CDD5" fill-opacity="1.000000" fill-rule="evenodd"/>
	</g>
</svg>

<ItemConteiner>
	{ShowPages() }

</ItemConteiner>
<svg style={{rotate:"180deg", marginRight:'24px'}} width="41.000000" height="40.000000" viewBox="0 0 41 40" fill="none" >
	<defs>
		<clipPath id="clip41_1730">
			<rect id="Icon" rx="-0.500000" width="40.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Icon" rx="-0.500000" width="40.000000" height="39.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="1.000000"/>
	<g clip-path="url(#clip41_1730)">
		<path id="arrow" d="M19.39 27.6L11.79 20L19.39 12.39L20.45 13.45L13.38 20.53L12.85 20L13.38 19.46L20.45 26.54L19.39 27.6Z" fill="#C4CDD5" fill-opacity="1.000000" fill-rule="evenodd"/>
	</g>
</svg>
    </Conteiner>
    
    </>
)
}

export default Pagin