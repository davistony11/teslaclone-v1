import React from 'react'
import styled from "styled-components"
import Section from "./section"
function Home() {
    return (
        <Container>
           <Cover>
            <Section 
            title="Model S" 
            description="Order online for touchless delivery"
            backgroundImg="Desktop-ModelS.jpeg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            Down
            >
      

            </Section >
            </Cover>
            <Cover>
            <Section
            title="Model 3" 
            description="Order online for touchless delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            Down
            >
                
            </Section>
            </Cover>
            <Cover>
            <Section
               title="Model X" 
               description="Order online for touchless delivery"
               backgroundImg="model-x.jpg"
               leftBtnText="Custom order"
               rightBtnText="Existing inventory"
               Down
            >
                
            </Section>
            </Cover>
            <Cover>
            <Section 
               title="Model Y" 
               description="Order online for touchless delivery"
               backgroundImg="model-y.jpg"
               leftBtnText="Custom order"
               rightBtnText="Existing inventory"
               Down
            >

            </Section>
            </Cover>
            <Cover>
            <Section 
               title="Lowest Cost Solar Panels in America" 
               description="Money-back guarentee"
               backgroundImg="solar-panel.jpg"
               leftBtnText="Order now"
               rightBtnText="Learn more"
               Down
            >

            </Section>
            </Cover>
            <Cover>
            <Section
               title="Solar for new Roofs" 
               description="Solar roof costs less than new roof"
               backgroundImg="solar-roof.jpg"
               leftBtnText="Order now"
               rightBtnText="Learn more"
               Down
            >

            </Section>
            </Cover>
            <Cover>
            <Section
               title="Accessories" 
               description=""
               backgroundImg="accessories.jpg"
               leftBtnText="Shop now"
               rightBtnText=""
            >

            </Section>
            <p style={{fontSize:"14px",color:"gray",textAlign:"center",marginTop:"-30px"}}>Copyright &copy; 2023 TESLA CLONE ON BEHALF OF HYGIEA LABS. All rights reserved.</p>
            </Cover>

        </Container>
    )
}

export default Home



const Container=styled.div`
height:100vh;
scroll-snap-type:y mandatory;
overflow-y:scroll;
scroll-behaviour:smooth;


`
const Cover=styled.div`
scroll-snap-align:center;

`