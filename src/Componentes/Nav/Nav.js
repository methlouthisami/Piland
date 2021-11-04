import react from "react"
import "./Nav.css"
import React from "react";
import Logo from "../images/logo-blanc.png"

export default function Aside (){
    return(
       <div>
            <aside>
          <img src={Logo} style={{width:"100px",marginLeft:"50px",marginTop:"20px"}}/>
                <nav>
                    <ul>
                        <a href="/Home"><li>Home</li></a>
                            <a href="/Work"><li>Work</li></a>
                            <a href="/Service"><li>Service</li></a>
                            <a href="/Contact"><li>Contact</li></a>
                    </ul>
                </nav>
             
            </aside>
       </div> 
    )
}