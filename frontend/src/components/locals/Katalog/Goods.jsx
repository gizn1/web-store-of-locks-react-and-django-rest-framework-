import React,{useState} from "react";
import styled from "styled-components";

import Filter from "./Filter";
import GoodsTols from "./GoodsTols";
import Crumbs from "../../globals/Crubs";
import Pagin from "./Pagin";

import GoodsCss from "../../../style/local/Katalog/Goods"
import ProductsCss from "../../../style/local/main/Products";
import icon from '../../../img/Rectangle2.jpeg'

const Goods = () =>{
    const [value,setValue]= useState()
    const {Amount,HeadLine,Conteiner,Stars,Comments} = GoodsCss
    const {Item,ItemImage,State,Present,Sale,ItemInfo,ItemText,ConteinerPrice,PriceNow,PriceOld} =ProductsCss
    let list = [[1,'Дверной Замок Golden Soft для отеля','32 000','37 000',icon,13,3],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4],[1,'Дверной Замок Golden Soft для отеля','33 000','37 000',icon,12,4]]
    
    const ItemNow = styled(Item)`
        margin: 0 0 40px 25px;
    `
    
        const handleChange = (value)=>{
    setValue(value)
    }
    return(
        <>
        <Crumbs arr= {['Каталог']}></Crumbs>
        <HeadLine>Накладные электронные замки <Amount>(854)</Amount></HeadLine>
        <div style={{ display:'flex' , justifyContent:'space-between',marginRight:'100px'}}>
        <Filter onChange={event=>handleChange(event)}></Filter>
        
        <div style={{width:'927px'}}> 
        <GoodsTols value = {value}></GoodsTols>
        <Conteiner>

        {list.map((item,index)=>(
            
        <ItemNow style={index % 3==0 ?{marginLeft:'0'}:{}} href="#">
            
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
<Comments>
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
<span>({item[5]}) отзывов</span>
</Comments>
<ItemText>{item[1]}</ItemText>
<ConteinerPrice><PriceNow>{item[2]}₽</PriceNow><PriceOld>{item[3]}₽</PriceOld></ConteinerPrice>
</ItemInfo>
</ItemNow>
        ))}
        </Conteiner>

        <Pagin></Pagin>
        </div>
        </div>
        </>
        
    )

}
export default Goods