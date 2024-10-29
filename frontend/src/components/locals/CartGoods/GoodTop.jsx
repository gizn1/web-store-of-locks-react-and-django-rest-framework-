import React,{useState} from "react";
import styled from "styled-components";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import TopGoodsCss from "../../../style/local/CartGoods/TopGoods";
import InfoCss from "../../../style/local/Katalog/Info";
import GoodsCss from "../../../style/local/Katalog/Goods";

import bg from '../../../img/фото.jpeg'
import bg1 from '../../../img/фото1.jpeg'
import Y from '../../../img/Frame(1).svg'
import stic from '../../../img/Frame(2).svg'
import colorStick from '../../../img/done.svg'




const Icon = () =>{
	return(
		<>
		<img src={stic} alt="" />
</>
	)
}

const TopGoods = ()=>{
    const {ImgConteiner,ImageItem,Info,Raiting,Artucul,CountComment,Title,WorkedOnHeadline,WorkedOnConteiner,
        ComplexAndColor,ComplexHeadLine,ComplexForm,Complex,ComplexListItem,ComplexList,ColorHeadLine,ColorItem,ConteinreItemColor,ConteinerColor,
        PriceConteiner,PriceNow,PriceOld,UserTools,PayBatton,Favorite,Acardio,Acardiontext,ImageItemFon} = TopGoodsCss

    const {Stars} = GoodsCss
    const {Check,Item} = InfoCss
	
    const item = [0,0,0,0,0,0,3]
    const [age, setAge] = React.useState('');
	const [color,setColor] = useState(1)
	const pictures = [bg,bg,bg1,bg] // список фотографий 
	const [infoPay,setInfoPay] = useState(true)
	const [infoMontag,setInfoMontag] = useState(false)
	const [infoProtect,setInfoProtect] = useState(false)
	const [mainIage,setMainPicture] = useState([pictures[0],0])// Главная Фотография


	// переключение Главной картинки
	const ChangePicture =(event)=>{
		setMainPicture([pictures[event.target.id],event.target.id])
		
	}


    const handleChange = (event) => {
        setAge(event.target.value);
      };

	  const ChangeColor = (event) =>{
		
		setColor(event.target.id)
		console.log(color)
	  }

	  // Открытие акардиоyов
	  const infoPayClick = (event) =>{
		setInfoPay(true)
		

			setInfoProtect(false)
			setInfoMontag(false)
		
	  }
	  const infoMontagClick = (event) =>{
		setInfoMontag(true)

		setInfoProtect(false)
		setInfoPay(false)
		
		
		
	  }
	  const infoProtectClick = (event) =>{
		setInfoProtect(true)
		setInfoPay(false)
		setInfoMontag(false)
		
		
	  }
	  const colors = ['rgb(27, 26, 32)','rgb(226, 195, 85)']

    const NewItem = styled(Item)`
        color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
    `
return(
    <div style={{margin:'40px 100px', display:'flex'}}>
    <div>
        <img height={'513px'}  width={'605px'} src={mainIage[0]} alt="" /> {/* Вывод главной фотографии  */}

        <ImgConteiner>
        {pictures.map((item,index)=>{{/* Вывод всех фотографий  */}
			return(
<ImageItem id={index} image ={item} active={index==mainIage[1]} onClick={ChangePicture}><ImageItemFon/></ImageItem>
			)
		})}
        
        
        
        
        </ImgConteiner>
    </div>
    <Info>
    <Raiting>

    <Artucul>JA182765</Artucul>

    <Stars>
<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip48_3487">
			<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[6] >= 1?"#F7AB3A":"none"}    fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[6] >= 1?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip48_3487">
			<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[6] >= 2?"#F7AB3A":"none"}    fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[6] >= 2?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip48_3487">
			<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[6] >= 3?"#F7AB3A":"none"}   fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[6] >= 3?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip48_3487">
			<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[6] >= 4?"#F7AB3A":"none"}                     fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[6] >= 4?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip48_3487">
			<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[6] >= 5?"#F7AB3A":"none"}                   fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[6] >= 5?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>

</Stars>

<CountComment> (12) отзывов</CountComment>
    </Raiting>

    <Title>Дверной Замок Golden Soft для офиса</Title>

    <WorkedOnHeadline>Подходит для установки на:</WorkedOnHeadline>
    <WorkedOnConteiner>
    <NewItem><Check style={{marginRight:'8px', padding:'4px', borderRadius:' 2px'}}><img src={Y} alt="" /></Check> Межкомнатую дверь</NewItem>
    <NewItem><Check style={{marginRight:'8px', padding:'4px',borderRadius:' 2px'}}><img src={Y} alt="" /></Check> Межкомнатую дверь</NewItem>
    </WorkedOnConteiner>

<ComplexAndColor> 
<Complex>
<ComplexHeadLine>Комплектация</ComplexHeadLine>


<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          
          onChange={handleChange}
		  IconComponent={Icon}
		  sx={{
			border: '1px solid rgb(196, 205, 213)',
    padding: '8px 16px',
    color:'  rgb(22, 28, 36)',
	fontFamily:' SF Pro Text',
	fontSize: '14px',
	maxWidth: '288px',
	width:' 100%',
	fontWeight: '400',
	lineHeight: '24px',
	letterSpacing:' 0%',
	border: '1px solid rgb(196, 205, 213)',
	borderRadius:'0',
	textAalign: 'left',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	height: '40px',
		  }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

</Complex>
<ConteinerColor>

<ColorHeadLine>Цвет</ColorHeadLine>

<ConteinreItemColor>
{colors.map((item,index) =>{
	return(
	<ColorItem active={index==color} onClick={ChangeColor} id = {index} color = {item}> <img src={colorStick} alt="" /> </ColorItem>

	)
})}



</ConteinreItemColor>

</ConteinerColor>

</ComplexAndColor>


<PriceConteiner>
<PriceNow>33 000₽</PriceNow>
<PriceOld>37 000₽</PriceOld>
</PriceConteiner>

<UserTools>
<PayBatton>Купить</PayBatton>
<Favorite>
	<svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
	<defs>
		<clipPath id="clip100_2792">
			<rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip100_2792)">
		<path id="Vector" d="M1.66 6.62C1.66 8.46 2.39 12.82 9.57 17.24C9.7 17.31 9.84 17.36 10 17.36C10.15 17.36 10.29 17.31 10.42 17.24C17.6 12.82 18.33 8.46 18.33 6.62C18.33 4.34 16.46 2.5 14.16 2.5C11.86 2.5 10 5 10 5C10 5 8.13 2.5 5.83 2.5C3.53 2.5 1.66 4.34 1.66 6.62Z" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round"/>
	</g>
</svg>
<span>В избранное</span>
</Favorite>
</UserTools>

<div style = {{maxWidth:'565px', widows:'100%'}}>
<Acardio active ={infoPay} onClick={infoPayClick}><span>Оплата</span> 
<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
	<defs>
		<clipPath id="clip63_5270">
			<rect id="Frame" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(24.500000 24.500000) rotate(180.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(24.500000 24.500000) rotate(180.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip63_5270)">
		<path id="Vector" d="M20 9L12 17L4 9" stroke={infoPay ? 'rgb(66, 149, 228)':"#161C24"} stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
</Acardio>

<Acardiontext>Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении</Acardiontext>
</div>
<div style = {{maxWidth:'565px', widows:'100%'}}>
<Acardio active ={infoMontag} onClick={infoMontagClick}><span>Монтаж и доставка</span> 
<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
	<defs>
		<clipPath id="clip63_5270">
			<rect id="Frame" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(24.500000 24.500000) rotate(180.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(24.500000 24.500000) rotate(180.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip63_5270)">
		<path id="Vector" d="M20 9L12 17L4 9" stroke={infoMontag ? 'rgb(66, 149, 228)':"#161C24"} stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
</Acardio>
<Acardiontext>Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении</Acardiontext>
</div>
<div style = {{maxWidth:'565px', widows:'100%'}}>
<Acardio active ={infoProtect}  onClick={infoProtectClick}><span>Гарантии и выгода</span> 
<svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
	<defs>
		<clipPath id="clip63_5270">
			<rect id="Frame" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(24.500000 24.500000) rotate(180.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="23.000000" height="23.000000" transform="translate(24.500000 24.500000) rotate(180.000000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip63_5270)">
		<path id="Vector" d="M20 9L12 17L4 9" stroke={infoProtect ? 'rgb(66, 149, 228)':"#161C24"} stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>

</Acardio>
<Acardiontext>Оплата при получении товара, Картой онлайн, Google Pay, Акционная оплата картой Visa, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay, Оплата картой в отделении</Acardiontext>
</div>
    </Info>
    </div>
)

}

export default TopGoods