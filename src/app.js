import Header from "./components/header"
import Home from "./components/home"
import "./app.css"
import styled from "styled-components"
export  default function App(){



    return (
        <div className={"app"}>
            {/* header */}
            <Header></Header>
            
            
            {/* home */}
            <Homed>
            <Home></Home>
        
            </Homed>
       
        </div>
    )
}
const Homed=styled.div`
top:0;
position:sticky;

`
