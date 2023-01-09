import React, { useState } from 'react';
import styled from "styled-components"
import {selectcars} from "../features/car/carSlice";
import {useSelector} from "react-redux" 

function Header() {
    const[burgeropen,setburgeropen]=useState(false)
    
    const cars=useSelector(selectcars);
    console.log(cars)

    
    
    return (
        <Container>
            <Logo>
            <a href="/">
                <img src="/images/logo.svg" alt="logo" />
            </a>
            </Logo>
            <Menu>
            {cars&&cars.map((car,index)=>  <a key={index} href="#">{car}</a>)}
               
               

            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>

            </RightMenu>
            <CustomMenu onClick={()=>setburgeropen(true)} >
                <h1>=</h1>
            </CustomMenu>
       
     
            <BurgerNav show={burgeropen}>
                <CloseWrapper>
                <CustomClose onClick={()=>setburgeropen(false)}>
                    <h1>x</h1>
                </CustomClose>
                </CloseWrapper>
                
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">used inventory</a></li>
                <li><a href="#">trade-in</a></li>
                <li><a href="#">cybertruck</a></li>
                <li><a href="#">roadster</a></li>
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">existing inventory</a></li>
                <li><a href="#">existing inventory</a></li>
            </BurgerNav>
      
        
        </Container>
    )
}

export default Header
const Container=styled.div`
min-height:60px;

display:flex;
align-items:center;
top:0;
left:0;
right:0;
padding:0px 20px;
justify-content:space-between;
z-index:1;
position:fixed;
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
@media(max-width:768px){
    display:none;
}

a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
}



`


const RightMenu=styled.div`
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
   
}
display:flex;
align-items:center;

`

const CustomMenu=styled.h1`
font-size:20px;
cursor:pointer;
user-select: none;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
z-index:100;
width:300px;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transition:0.5s;
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
li{
    padding:15px;
    border-bottom:1px solid rgba(0,0,0,0.2)
}
a{
    font-weight:600;
}
`
const CustomClose=styled.h1`
font-size:10px;
cursor:pointer;
user-select: none;
`
const CloseWrapper=styled.div`

display:flex;
align-items:center;
justify-content:flex-end;

`
const Logo=styled.div`
height:24px;
width:100px;
`