import * as React from "react";
import FillterCss,{FilterMainOpsion} from "../../../style/local/Katalog/Filter";
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Y from '../../../img/Frame(1).svg'
import useArray from "../../globals/useArray";


const Filter = ({ onChange=[1,2,3] }) => {
const {PriceForms,PriceForm,FilterMainOpsionHeadLine,FilterMainHeadLine,
    FillterMainInSide,FillterMain,FillterReset,FilterConteiner,Amount,HeadLine,Check,FilterMainOpsionItem,FilterMainOpsionItemAmount} = FillterCss

    const [value, setValue] = React.useState([0,100]);
    const [OpsionPrice,setOpsionPrice] = React.useState(false)
    const [OpsionOsb,setOpsionOsb] = React.useState(false)
    
    const { array, set, push, remove, filter, update, clear } = useArray([["Электронные кодовые замки",65,true],["Биометрические замки",15,true],["Замок с отппечатком",27,true],["Замок с бесконтактной картой",45,true]])
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
     const ArrChage = (index,item) =>{
        update(index,[item[0],item[1],!item[2]])
        
        
     }
      React.useEffect(()=>{
        onChange(array)
      })
return(
    <>

<FilterConteiner style={{marginLeft:'100px'}}>

<FillterReset>Сбросить фильтры</FillterReset>

<FillterMain>
<FillterMainInSide>

<FilterMainHeadLine> Фильтр</FilterMainHeadLine>
<FilterMainOpsion $cl = {OpsionPrice} >
<FilterMainOpsionHeadLine onClick={event =>{setOpsionPrice(!OpsionPrice)}}>Цена 
    <svg style={OpsionPrice ? {transition: '0.2s'}:{transform: 'rotate(180deg)',transition: '0.2s'}} width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip41_1699">
			<rect id="Frame" rx="-0.500000" width="17.000000" height="17.000000" transform="translate(18.500000 0.500000) rotate(90.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="17.000000" height="17.000000" transform="translate(18.500000 0.500000) rotate(90.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip41_1699)">
		<path id="Vector" d="M15 6L9 12L3 6" stroke={OpsionPrice ? "#938A9F":'rgb(66, 149, 228)'}  stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
</FilterMainOpsionHeadLine >
<div style={OpsionPrice ? {display: 'none'}:{display: 'block'}}>

<PriceForms>
<PriceForm type="number" value={value[0]} onChange={event => setValue([event.target.value,value[1]])}></PriceForm>
<PriceForm type="number" value={value[1]} onChange={event => setValue([value[0],event.target.value])}></PriceForm>
</PriceForms>

<Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        disableSwap
        sx={{
            
            color: 'rgb(66, 149, 228)',
            '& .MuiSlider-thumb ': {
              borderRadius: '1px',
              width: '24px',
            height: '24px',
            border: '1px solid rgb(66, 149, 228)',
            
            boxShadow:' 0px 1px 1px 0px rgba(0, 0, 0, 0.01),0px 3px 8px 0px rgba(0, 0, 0, 0.1)',

            background: 'rgb(255, 255, 255)',
            },
            '& .MuiSlider-rail':{
                borderRadius:' 2px',

                background:' rgb(234, 234, 234)'
            },
            '& .MuiSlider-thumb:hover,active':{
                boxShadow:' 0px 1px 1px 0px rgba(0, 0, 0, 0.01),0px 3px 8px 0px rgba(0, 0, 0, 0.1)'
            }
          }}
      />

</div>
</FilterMainOpsion>

<FilterMainOpsion >
<FilterMainOpsionHeadLine onClick={event =>{setOpsionOsb(!OpsionOsb)}}>
Особенности     <svg style={OpsionOsb ? {transition: '0.2s'}:{transform: 'rotate(180deg)',transition: '0.2s'}} width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip41_1699">
			<rect id="Frame" rx="-0.500000" width="17.000000" height="17.000000" transform="translate(18.500000 0.500000) rotate(90.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="17.000000" height="17.000000" transform="translate(18.500000 0.500000) rotate(90.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip41_1699)">
		<path id="Vector" d="M15 6L9 12L3 6" stroke={OpsionOsb ? "#938A9F":'rgb(66, 149, 228)'}  stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>

</FilterMainOpsionHeadLine>
<div style={OpsionOsb ? {display: 'none'}:{display: 'block'}}>
{array.map( (item,index) =>{
return(
<div>
    
    <FilterMainOpsionItem>
       
          <input onChange={(event)=>{ArrChage(index,item)}}  id = {index} type="checkbox" style={{display:'none'}} />
    <Check $bg = {item[2]}  for= {index}><img style={item[2]? {display:'none'}: {display:'block'}} src={Y} alt="" /></Check>
  
<label for={index} style={{margin:'0 8px 0 8px',width: '180px'}}>
{item[0]}</label>
<FilterMainOpsionItemAmount style={{display:'flex'}}>({item[1]})</FilterMainOpsionItemAmount>
</FilterMainOpsionItem>
</div>
)})}
</div>
</FilterMainOpsion>

        
</FillterMainInSide>
</FillterMain>
</FilterConteiner>
    </>
)
}

export default Filter