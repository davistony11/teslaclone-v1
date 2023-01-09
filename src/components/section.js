import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal/Fade"

function Section({backgroundImg,title,description,leftBtnText,rightBtnText,Down}) {



    return (
       <Wrap bg={backgroundImg}>
            <Fade bottom>
            <Itemtext>
                <h1>{title}</h1>
                <p>{description}</p>
            </Itemtext>
            </Fade>
            <Buttons>
                <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText&& <RightButton>
                   {rightBtnText}
                </RightButton>}
               
            </ButtonGroup>
            </Fade>
            {Down&&<DownArrow src="/images/down-arrow.svg">
            </DownArrow>            }
        
            </Buttons>
       </Wrap>
    )
}

export default Section



const Wrap=styled.div`
width:100%;
height:100vh;

background-position:center;
background-repeat:no-repeat;
background-size:cover;
background-image:url(/images/model-s.jpgss);
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props=>`url("/images/${props.bg}")`}
`
const Itemtext=styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:769px){
    flex-direction:column;
}


`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
cursor:pointer;
text-transform:uppercase;
font-size:12px;
margin:8px;
`
const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;

`
const DownArrow=styled.img`

margin-top:20px;
height:40px;
position:relative;
left:50%;
animation:animateDown infinite 1.5s;

overflow-x:hidden;

`
const Buttons=styled.div`
`