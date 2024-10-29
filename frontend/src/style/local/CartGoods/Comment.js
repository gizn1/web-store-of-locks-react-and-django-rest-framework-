import styled from "styled-components";

const CommentCss = {
    Conteiner: styled.div`
    margin: 0 100px;
    margin-top: 25px;
    display: flex;
    flex-shrink: 0;
    `,
    ConteinerComments: styled.div`
    margin-right: 30px;
    max-width: 769px;
    width: 100%;
    `,
    Comment: styled.div`
    border: 1px solid rgb(234, 234, 234);
    max-width: 817px;
    padding-bottom: 24px;
    
    
    background: rgb(255, 255, 255);
    &+&{
        margin-top: 16px;
    }
    `,
    CommentHeadLine: styled.div`
    border-bottom: 1px solid rgb(234, 234, 234);
    padding:16px 24px;
    padding-bottom: 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    `,
    CommentsName: styled.h3`
    margin: 0;
    color: rgb(22, 28, 36);
    font-family: SF Pro Text;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
    `,

    Date: styled.span`
    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0%;
    text-align: left;
    text-transform: capitalize;
    `,
    Text: styled.p`
    padding: 0 24px;
    max-width: 769px;
    color: rgb(22, 28, 36);
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    `,
    Tools: styled.div`
    max-width: 236px;
    display: flex;
    
    align-items: center;
    
    padding: 0 24px;
    `,
    Tool: styled.div`
    display: flex;
    align-items: center;
    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    line-height: 26px;
    letter-spacing: 0%;
    text-align: left;
    `,

    ShowMore: styled.div`
    display: flex;
    color: rgb(69, 79, 91);
    font-family: SF Pro Text;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    margin-top: 16px;
    margin-left:  auto;
    margin-right:  auto;
    align-items: center;
    justify-content: center;
    `,
    YourComment: styled.form`
    border: 1px solid rgb(234, 234, 234);
    width: 100%;
max-width: 393px;
    background: rgb(255, 255, 255);
    padding: 24px;
    `,
    YourCommentHeadline: styled.h4`
    color: rgb(22, 28, 36);
    font-family: SF Pro Display;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 8px;
    max-width: 347px;
    `,
    ConteinerFilde: styled.div`
    margin-bottom: 20px;
    `,
    Fielde: styled.input`
    width: 100%;
    max-width: 345px;
    border: 1px solid rgb(228, 231, 233);
    background: rgb(255, 255, 255);
    padding: 12px 16px;
    color: rgb(173, 173, 173);
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    &:focus{
        border: 2px solid #000;
    }
    &::placeholder{
        color: rgb(173, 173, 173);
    }
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    color: #000;
    `,
     FieldeBig: styled.textarea`
     width: 100%;
     max-width: 345px;
     border: 1px solid rgb(228, 231, 233);
     background: rgb(255, 255, 255);
     padding: 12px 16px;
     color: #000;
     font-family: SF Pro Text;
     font-size: 14px;
     font-weight: 400;
     line-height: 24px;
     height: 140px;
     resize: none;
     letter-spacing: 0%;
     text-align: left;
     &:focus{
        border: 2px solid #000;
    }
    &::placeholder{
        color: rgb(173, 173, 173);
    }
     `,
     Button: styled.div`
     cursor: pointer;
     color: rgb(255, 255, 255);
    font-family: SF Pro Display;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: center;
    background: rgb(66, 149, 228);
    padding-top: 15px;
    padding-bottom: 15px;
     `
    

}

export default CommentCss