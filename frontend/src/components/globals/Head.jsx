import css_header from "../../style/globals/Head";
import css_sale from "../../style/globals/sale";
import React from "react";
import Logo from '../../img/Logo (1).svg'

import CssPage from "../../style/page/Page";
const {Conteiner,Color} = CssPage
const Head = () =>{
const {Conteiner,LinkConteiner,Link,Phone,CpnteinerSvg} = css_header
const {ConteinerSalle,Text,CallBack} = css_sale
    return(
<>

<ConteinerSalle>
<Text>
Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09

</Text>
<CallBack>Обратный звонок</CallBack>
</ConteinerSalle>
<Conteiner>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<img width= '50.4px' height= '42px' src={Logo} alt="" />
<LinkConteiner>
<Link href="#">
Главная
</Link>
<Link>
Каталог <span><svg width="14.000000" height="14.000000" viewBox="0 0 14 14" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip3_7575">
			<rect id="Frame" rx="-0.500000" width="13.000000" height="13.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="13.000000" height="13.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip3_7575)">
		<path id="Vector" d="M2.33 5.25L7 9.91L11.66 5.25" stroke="#161C24" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>
</span>
</Link>
<Link href="#">
Оптовая продажа
</Link>
<Link href="#">
О нас
</Link>

</LinkConteiner>
</div>

<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<svg width="18.750000" height="18.750000" viewBox="0 0 18.75 18.75" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs/>
	<path id="Vector" d="M18.14 13.5C18.09 13.45 14.37 10.77 13.35 10.97C12.86 11.05 12.58 11.38 12.02 12.05C11.93 12.16 11.72 12.41 11.55 12.6C11.2 12.48 10.85 12.34 10.52 12.18C8.8 11.34 7.4 9.95 6.57 8.23C6.4 7.89 6.26 7.55 6.15 7.2C6.33 7.03 6.59 6.81 6.7 6.72C7.36 6.16 7.69 5.88 7.78 5.39C7.96 4.38 5.28 0.64 5.25 0.6C5.13 0.43 4.97 0.28 4.78 0.18C4.6 0.07 4.39 0.01 4.18 0C3.1 0 0 4.02 0 4.7C0 4.73 0.05 8.74 4.99 13.76C10 18.69 14 18.75 14.04 18.75C14.72 18.75 18.75 15.64 18.75 14.56C18.73 14.35 18.67 14.14 18.56 13.96C18.46 13.77 18.31 13.62 18.14 13.5Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
</svg>
<Phone>
+7 (966) 55 88 499
</Phone>
<CpnteinerSvg>
<svg style = {{marginRight:'24px'}} width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip5_7613">
			<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip5_7613)">
		<path id="Vector" d="M5 10.82C5 13.42 6 19.59 15.91 25.83C16.08 25.94 16.29 26 16.5 26C16.7 26 16.91 25.94 17.08 25.83C26.99 19.59 28 13.42 28 10.82C28 7.6 25.42 5 22.25 5C19.07 5 16.5 8.53 16.5 8.53C16.5 8.53 13.92 5 10.75 5C7.57 5 5 7.6 5 10.82Z" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
	</g>
</svg>
<svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none">
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip5_7618">
			<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="31.000000" height="31.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip5_7618)">
		<path id="Vector" d="M25.05 9.33C25.42 9.33 25.79 9.41 26.13 9.56C26.47 9.71 26.78 9.93 27.03 10.21C27.28 10.48 27.46 10.81 27.58 11.16C27.7 11.52 27.74 11.89 27.7 12.26L26.9 20.26C26.84 20.92 26.53 21.53 26.04 21.97C25.55 22.42 24.91 22.66 24.25 22.66L11.52 22.66C10.9 22.66 10.3 22.45 9.82 22.06C9.35 21.67 9.02 21.12 8.9 20.52L6.66 9.33L25.05 9.33Z" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
		<path id="Vector" d="M6.66 9.33L5.58 5C5.51 4.72 5.34 4.46 5.11 4.28C4.87 4.09 4.59 4 4.29 4L2.66 4" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
		<path id="Vector" d="M10.66 28L13.33 28" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
		<path id="Vector" d="M21.33 28L24 28" stroke="#454F5B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg>

</CpnteinerSvg>

</div>
</Conteiner>


</>

    )
}

export default Head