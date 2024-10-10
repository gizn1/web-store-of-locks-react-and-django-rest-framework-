import styled from "styled-components";


const CategoryCss = {
Headline:styled.div`

color: rgb(0, 0, 0);
font-family: SF Pro Text;
font-size: 44px;
font-weight: 600;
line-height: 62px;
letter-spacing: 0%;
text-align: center;
margin-bottom: 64px;
margin-top: 40px;

`,
CategoryConteiner: styled.div`
max-width: 1242px;
display: flex;
flex-wrap: wrap;

margin: 0 auto;

`,
Item: styled.div`
margin-bottom: 50px;
width: 288px;

`,
ItemImg: styled.div`
width: 288px;
height: 300px;
background-image: url(${props => props.$image});
border: 1px solid rgb(234, 234, 234);
background-size: no-repeat;

background-position: -120px;

background-size: cover;
margin-bottom: 16px;
`,
ItemText: styled.div`

color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: center;
`
}

export default CategoryCss