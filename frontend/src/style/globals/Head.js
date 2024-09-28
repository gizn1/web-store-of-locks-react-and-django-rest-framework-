import styled from 'styled-components'


const css_header = {
    Conteiner: styled.div`
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
`

}

export default css_header