import styled from "styled-components";

const DescriptionCss = {
    Contreiner: styled.div`
    display: flex;
    margin: 40px 100px 0 100px;
    justify-content: space-between;
    `,
    Text: styled.p`
    max-width: 711px;
    color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
    `,
    HeadLine: styled.h2`
    color: rgb(22, 28, 36);
font-family: SF Pro Text;
font-size: 20px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0%;
text-align: left;
margin-top: 24px;
margin-bottom: 16px;
    `,
    Advantages: styled.div`
    max-width: 520px;
    display: flex;
    align-items: flex-start;
    color: rgb(69, 79, 91);
font-family: SF Pro Text;
font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0%;
text-align: left;
    &+&{
        margin-top: 8px;
    }
    `,


}
export default DescriptionCss