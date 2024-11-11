import React from "react";
import GoodsToolsCss from "../../../style/local/Katalog/GoodsTools";
const GoodsTols = (props) =>{
    const {TypeShowing,ItemFilter,Filters,ToolsConteriner} = GoodsToolsCss

    return(
        <>
        <ToolsConteriner>
        <Filters>
            
            {props.value != undefined ? props.value.filter(item => !item[2]).map(item=>{
                return(
                    <ItemFilter>{item[0]} < svg style={{marginLeft:'10px'}} width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" >
                    <defs>
                        <clipPath id="clip41_1663">
                            <rect id="Cross" rx="-0.500000" width="13.000000" height="13.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                        </clipPath>
                    </defs>
                    <rect id="Cross" rx="-0.500000" width="13.000000" height="13.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
                    <g clip-path="url(#clip41_1663)">
                        <path id="Vector" d="M2.33 2.33L11.66 11.66L2.33 2.33ZM11.66 2.33L2.33 11.66" stroke="#E44286" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
                    </g>
                </svg>
                </ItemFilter>
                )
            }): ''}
       
        </Filters>
        <div style={{position:'relative',}}>
        <TypeShowing>
            
        <option value="value1">Популярности </option>

<option value="value1">Популярности </option>

<option value="value1">Популярности </option>


</TypeShowing>
<svg style={{position:'absolute', top: '12px', right:'18px'}} width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<defs>
		<clipPath id="clip41_1667">
			<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(16.500000 0.500000) rotate(90.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(16.500000 0.500000) rotate(90.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip41_1667)">
		<path id="Vector" d="M13.33 5.33L8 10.66L2.66 5.33" stroke="#161C24" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg></div>
        </ToolsConteriner>
        </>
    )
}

export default GoodsTols