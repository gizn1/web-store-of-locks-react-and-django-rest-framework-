import styled from 'styled-components'


const css_header = {
    Head_Conteiner: styled.div`
    height: 83px;
    margin-left: 100px;
    margin-right  :100px ;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;




    `,

    LinkConteiner: styled.div`
    display: flex;
    justify-content: space-between;
margin-left: 100px;


    `,

Link : styled.a`
color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 20px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
cursor: pointer;
& + &{
    margin-left: 32px;

}
`,
Phone: styled.div`
margin-left: 8px;
margin-right: 35px;

`,
CpnteinerSvg: styled.div`
max-width: 92px;
display: flex;
justify-content: space-between;
`,
Windo: styled.div`
padding: 32px;
display: flex;
position: absolute;
background-color: #ffff;
align-items: center;
justify-content: space-between;
width: 790px;
box-shadow: 0px 4px 18px -2px rgba(0, 0, 0, 0.1);
background: rgb(255, 255, 255);
`,

Item: styled.a`
/* 16/reg 16 \ 26 */
color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 16px;
`,
ItemActive:styled.div`
color: rgb(22, 28, 36);
padding-bottom: 6px;
border-bottom: 1px solid rgb(66, 149, 228) ;
`,
WindoImg: styled.div`
height: 300px;
left: 768px;
box-shadow: 0px 4px 18px -2px rgba(0, 0, 0, 0.1);
background: rgb(255, 255, 255);
background-image: url(${props=> props.img});
width: 351px;
height: 300px;
`

}

export default css_header