import React,{useState} from "react";

import CommentCss from "../../../style/local/CartGoods/Comment";
import GoodsCss from "../../../style/local/Katalog/Goods";
const Comment=()=>{
    const {Button,Fielde,ConteinerFilde,YourCommentHeadline,YourComment,ShowMore,Tool,Tools,Text,Date,CommentsName,CommentHeadLine,Comment,ConteinerComments,Conteiner,FieldeBig} = CommentCss
    const {Stars} = GoodsCss
    const [want,setWant] = useState(0)
    const comments =[['Андрей Попенко','20 августа, 2021',"fdhioghfdhg",1,3],['Андрей Попенко','20 августа, 2021',"fdhioghfdhg",2,5],['Андрей Попенко','20 августа, 2021',"fdhioghfdhg",1,3]]// список кфментариекв [отправитель, дата,Текст, число коментариев, оценка ]
    
    const ChangWant =(event)=>{
        setWant(event.target.id)
        
    }
    const DeletegWant = ()=>{
        setWant(0)
    }
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')
    const [desine,setdesine] = useState(0)
    const desines = (event) =>{
        setdesine(want)
        
    }
    return(

        <>
        <Conteiner>
        <ConteinerComments>
        {comments.map((item,index)=>{
            return(
                <Comment>

                <CommentHeadLine>
                <CommentsName>{item[0]}</CommentsName>
                <Date>{item[1]}</Date>
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
                <path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[4] >= 1?"#F7AB3A":"none"}    fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[4] >= 1?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
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
                <path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[4] >= 2?"#F7AB3A":"none"}    fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[4] >= 2?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
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
                <path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[4] >= 3?"#F7AB3A":"none"}   fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[4] >= 3?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
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
                <path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[4] >= 4?"#F7AB3A":"none"}                     fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[4] >= 4?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
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
                <path id="Vector" d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={item[4] >= 5?"#F7AB3A":"none"}                   fill-opacity="1.000000" fill-rule="nonzero"/>
                <path id="Vector" d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={item[4] >= 5?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
            </g>
        </svg>
        
                </Stars>
                </CommentHeadLine>
        
                <Text>{item[2]}</Text>
                
                    <Tools>
                <Tool style={{marginRight: '20px'}}>
                    <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
            <defs/>
            <path id="Icon color" d="M5.27 5C5.12 5 5 5.12 5 5.27L5 11.11C5 11.72 5.49 12.22 6.11 12.22L13.15 12.22L11.23 14.13C11.18 14.18 11.15 14.25 11.15 14.33C11.15 14.4 11.18 14.47 11.23 14.52L11.62 14.91C11.67 14.97 11.75 15 11.82 15C11.89 15 11.97 14.97 12.02 14.91L14.87 12.06C14.95 11.98 15 11.88 15 11.77L15 11.56C14.99 11.45 14.95 11.34 14.87 11.26L12.02 8.41C11.97 8.36 11.89 8.33 11.82 8.33C11.75 8.33 11.67 8.36 11.62 8.41L11.23 8.81C11.18 8.86 11.15 8.93 11.15 9C11.15 9.07 11.18 9.14 11.23 9.2L13.15 11.11L6.11 11.11L6.11 5.27C6.11 5.12 5.98 5 5.83 5L5.27 5Z" fill="#4295E4" fill-opacity="1.000000" fill-rule="nonzero"/>
            <path id="Icon color" d="M5 5.27L5 11.11C5 11.72 5.49 12.22 6.11 12.22L13.15 12.22L11.23 14.13C11.18 14.18 11.15 14.25 11.15 14.33C11.15 14.4 11.18 14.47 11.23 14.52L11.62 14.91C11.67 14.97 11.75 15 11.82 15C11.89 15 11.97 14.97 12.02 14.91L14.87 12.06C14.95 11.98 15 11.88 15 11.77L15 11.56C14.99 11.45 14.95 11.34 14.87 11.26L12.02 8.41C11.97 8.36 11.89 8.33 11.82 8.33C11.75 8.33 11.67 8.36 11.62 8.41L11.23 8.81C11.18 8.86 11.15 8.93 11.15 9C11.15 9.07 11.18 9.14 11.23 9.2L13.15 11.11L6.11 11.11L6.11 5.27C6.11 5.12 5.98 5 5.83 5L5.27 5C5.12 5 5 5.12 5 5.27Z" stroke="#C4CDD5" stroke-opacity="1.000000" stroke-width="0.000000"/>
        </svg><span style={{marginLeft:'4px'}}>Ответить</span>
                </Tool>
        
                <Tool>
         <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
            <defs>
                <clipPath id="clip72_5664">
                    <rect id="message 1" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
                </clipPath>
            </defs>
            <rect id="message 1" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
            <g clip-path="url(#clip72_5664)">
                <path id="Vector" d="M14.35 4L4.89 4C3.84 4 3 4.84 3 5.89L3 12.28C3 13.32 3.84 14.17 4.89 14.17L5.63 14.17L5.64 15.83C5.64 15.99 5.73 16.13 5.87 16.19C5.92 16.22 5.99 16.24 6.05 16.24C6.13 16.24 6.22 16.21 6.29 16.15L8.87 14.17L14.35 14.17C15.4 14.17 16.24 13.32 16.24 12.28L16.24 5.89C16.24 4.84 15.4 4 14.35 4ZM15.43 12.28C15.43 12.87 14.95 13.36 14.35 13.36L8.73 13.36C8.64 13.36 8.55 13.38 8.48 13.44L6.44 15.01L6.43 13.76C6.43 13.53 6.25 13.36 6.03 13.36L4.89 13.36C4.29 13.36 3.81 12.87 3.81 12.28L3.81 5.89C3.81 5.29 4.29 4.81 4.89 4.81L14.35 4.81C14.95 4.81 15.43 5.29 15.43 5.89L15.43 12.28L15.43 12.28Z" fill="#C4CDD5" fill-opacity="1.000000" fill-rule="nonzero"/>
            </g>
        </svg>
        <span style={{marginLeft:'4px'}}>{item[3]} комментарий</span>
                </Tool>
        
                </Tools>
                </Comment>
            )
        })}
       <ShowMore>
        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none">
	<defs>
		<clipPath id="clip110_2432">
			<rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip110_2432)">
		<path id="Vector" d="M16.44 13.38C15.74 14.8 14.59 15.97 13.18 16.69C11.77 17.41 10.17 17.66 8.62 17.39C7.06 17.11 5.63 16.34 4.55 15.19C3.45 14.02 2.75 12.54 2.56 10.95C2.35 9.36 2.66 7.75 3.43 6.35C4.19 4.95 5.38 3.84 6.82 3.17C8.25 2.5 9.86 2.33 11.4 2.66C12.94 2.99 14.21 3.75 15.25 4.96C15.38 5.09 15.86 5.63 16.27 6.44" stroke="#4295E4" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
		<path id="Vector" d="M12.55 6.51L16.75 7.26L17.5 2.99" stroke="#4295E4" stroke-opacity="1.000000" stroke-width="1.000000" stroke-linejoin="round" stroke-linecap="round"/>
	</g>
</svg> <span style={{marginLeft:'8px'}}>Показать еще</span>
</ShowMore>
        

        
        </ConteinerComments>
        <YourComment>

        <ConteinerFilde>
        <YourCommentHeadline>Ваша оценка</YourCommentHeadline>

        <Stars>
<svg id = '1' onMouseOver={ChangWant} onMouseOut={DeletegWant} onClick={desines}  width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath >
			<rect id = '1' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id = '1' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id = '1' d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={want >= 1  ||  desine >= 1?"#F7AB3A":"none"}    fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id = '1' d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={want >= 1|| desine >= 1?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg id = '2' onMouseOver={ChangWant} onClick={desines} onMouseOut={DeletegWant}    width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id = '2'>
			<rect id = '2' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id = '2' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id = '2' d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={want >= 2  || desine >= 2?"#F7AB3A":"none"}    fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id = '2' d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={want >= 2|| desine >= 2?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg id = '3' onMouseOver={ChangWant} onClick={desines} onMouseOut={DeletegWant}   width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id = '3'>
			<rect id = '3' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id = '3' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id = '3' d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={want >= 3 || desine >= 3?"#F7AB3A":"none"}   fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id = '3' d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={want >= 3 || desine >= 3?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg id = '4' onMouseOver={ChangWant} onClick={desines} onMouseOut={DeletegWant}    width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id = '4'>
			<rect id = '4' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id = '4' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id = '4' d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={want >= 4 || desine >= 4?"#F7AB3A":"none"}                     fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id = '4' d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={want >= 4 || desine >= 4?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>
<svg id = '5' onMouseOver={ChangWant} onClick={desines} onMouseOut={DeletegWant}    width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id = '5'>
			<rect id = '5' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id = '5' rx="-0.500000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
	<g clip-path="url(#clip48_3487)">
		<path id = '5' d="M7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75Z" fill={want >= 5 || desine >= 5?"#F7AB3A":"none"}                   fill-opacity="1.000000" fill-rule="nonzero"/>
		<path id = '5' d="M8.61 1.75L9.99 5.57C10.09 5.83 10.33 6 10.61 6L14 6C14.63 6 14.9 6.78 14.41 7.16L12 9.33C11.89 9.41 11.81 9.53 11.77 9.66C11.73 9.79 11.73 9.93 11.78 10.06L12.66 13.79C12.88 14.39 12.18 14.91 11.66 14.54L8.38 12.46C8.27 12.38 8.13 12.34 8 12.34C7.86 12.34 7.72 12.38 7.61 12.46L4.33 14.54C3.81 14.91 3.11 14.39 3.33 13.79L4.21 10.06C4.26 9.93 4.26 9.79 4.22 9.66C4.18 9.53 4.1 9.41 4 9.33L1.58 7.16C1.09 6.78 1.36 6 1.99 6L5.38 6C5.51 6 5.64 5.96 5.75 5.88C5.86 5.8 5.95 5.7 6 5.57L7.38 1.75L7.38 1.75C7.59 1.19 8.4 1.19 8.61 1.75Z" stroke={want >= 5 || desine >= 5?"#F7AB3A":"rgb(196, 205, 213)"} stroke-opacity="1.000000" stroke-width="0.500000" stroke-linejoin="round"/>
	</g>
</svg>

</Stars>
        </ConteinerFilde>

        <ConteinerFilde>
        <YourCommentHeadline onChange={(event)=>{setName(event.target.value)}}>Ваше имя</YourCommentHeadline>
        <Fielde placeholder="Введите Ваше имя"></Fielde>
        </ConteinerFilde>

        <ConteinerFilde>
        <YourCommentHeadline onChange={(event)=>{setEmail(event.target.value)}}>Ваш Email</YourCommentHeadline>
        <Fielde placeholder="Введите Ваш Email"></Fielde>
        </ConteinerFilde>

        <ConteinerFilde>
        <YourCommentHeadline>Ваш комментарий</YourCommentHeadline>
        <FieldeBig onChange={(event)=>{setText(event.target.value)}} placeholder="Введите Ваш комментарий"></FieldeBig>
        </ConteinerFilde>
        <Button>Оставить отзыв</Button>
        </YourComment>
        </Conteiner>
        
        </>
    )
}

export default Comment