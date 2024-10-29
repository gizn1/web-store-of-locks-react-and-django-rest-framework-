import styled from "styled-components";
import icon from '../../../img/Frame(2).svg'
const TopGoodsCss = {
    ImgConteiner: styled.div`
    display: flex;
    margin-top: 20px;
   
    `,
    ImageItem: styled.div`
        & + &{
            margin-left: 12px;
        }
        background-image: url('${props => props.image }');
        
        height: 113px;
        width: 142px;
        background-size: cover; 
        border: 1px solid rgb(234, 234, 234);
        & div{
            display: ${ props=> props.active ? 'block': 'none'};
        }
    `,
    ImageItemFon: styled.div`
    height: 113px;
    width: 142px;
    background-color: rgba(125, 190, 255, 0.07);
    `,
    Info: styled.div`
margin-left: 30px;
    `,
    Raiting: styled.div`
    display: flex;
    margin-bottom: 16px;
    
    `,
    Artucul: styled.div`
    color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 5%;
text-align: left;
margin-right: 13px;
    `,
    CountComment: styled.div`
    color: rgb(66, 149, 228);
font-family: SF Pro Text;
font-size: 13px;
font-weight: 600;
line-height: 21px;
letter-spacing: 0%;
text-align: left;
    margin-left: 8px;
    `,
    Title: styled.h1`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 24px;
font-weight: 600;
line-height: 30px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 12px;
    `,
    WorkedOnHeadline: styled.h2`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 8px;
    `,
    WorkedOnConteiner: styled.div`
display: flex;
flex-wrap: wrap;
    `,
    ComplexAndColor: styled.div`
    display: flex;
    margin-bottom: 24px;
    max-width: 462px;
    justify-content:space-between;
    align-items: flex-end;
    `,
    ComplexHeadLine: styled.h3`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 8px;
    `,
    ComplexForm:styled.label`
    border: 1px solid rgb(196, 205, 213);
    padding: 8px 16px;
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
max-width: 288px;
width: 100%;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
display: flex;
align-items: center;
justify-content: space-between;
    `,
    Icon: styled.div`
    width: 16px;
    height: 16px;
    background-image: url('../../../img/Frame(2).svg');
    `,
    ComplexList: styled.div`
    display:${prev => prev.open ? 'flex':'none'} ;
    flex-direction: column;
    border: 1px solid #000;
    `,
    ComplexListItem: styled.span`
    margin-bottom: 12px;
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;

&:hover{
    background: #b1a6a6e0;
    transition-duration: 0.2s;
}
    `,
    Complex: styled.div``,

    ConteinerColor: styled.div``,

    ConteinreItemColor:styled.div`
    display: flex;
    max-width: 462px;
    justify-content: space-between;
    `,
       ColorHeadLine: styled.h3`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
margin-bottom: 8px;
    `,
    ColorItem: styled.div`
    width: ${ props => props.active ? '38px' : '40px'} ;
    position: relative;
    height: ${ props => props.active ? '38px' : '40px'};
    border: ${ props => props.active ? '1px solid rgb(66, 149, 228)' : 'transform'} ;

   
    & img{
        display: ${ props => props.active ? 'block' : 'none'} ;
        position: absolute;
        top: 10px;
        left: 10px;

    }

    &+&{
        margin-left: 12px;
    }
    background-color: ${props=>props.color};
    `,
    PriceConteiner: styled.div`
    display: flex;
    margin-bottom: 17px;
    align-items: baseline;
    `,
    PriceNow: styled.span`
    color: rgb(22, 28, 36);
    font-family: SF Pro Text;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    margin-right: 12px;
    `,
    PriceOld: styled.span`
    color: rgb(164, 164, 164);
    font-family: SF Pro Text;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    text-decoration-line: line-through;
    `,
    UserTools: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    `,
    PayBatton:styled.button`
    
    background: rgb(66, 149, 228);
    color: rgb(255, 255, 255);
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    border: transparent;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
    padding: 15px 118px;
    `,


    Favorite: styled.div`
    display: flex;
    width: 116px;
    justify-content: space-between;
    align-items: center;
    color: rgb(77, 77, 77);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0%;
text-align: left;
margin-left: 10px;
    `,

    Acardio: styled.div`
    
    -webkit-user-select: none; /* Chrome, Safari, Opera */       
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; 
    background: ${ props => props.active ? ' rgb(246, 247, 249)':' rgb(255, 255, 255)'};
    & + div{
        display: ${ props => props.active ? ' block':' none'};
    }
    & svg{
        transition-duration: 0.2s;
        transform: ${ props => props.active ? ' rotate(180deg)':''} ;
        
    }

    display: flex;
    justify-content: space-between;
    padding: 16px;
    `,
    Acardiontext: styled.div`
    -webkit-user-select: none; /* Chrome, Safari, Opera */       
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; 
   
    color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 14px;
font-weight: 400;
background: rgb(246, 247, 249);
line-height: 24px;
letter-spacing: 0%;
text-align: left;
padding: 8px 16px;
    `

}

export default TopGoodsCss