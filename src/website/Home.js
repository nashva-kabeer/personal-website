import { Component } from "react";
import profile from '../images/women.png'

class Home extends Component{
    render(){
        return(
            <div id="banner">
                <div className="container">
                    <div className="row">
                        <h3 id="tit">I'm Fathima Nashva</h3>
                        <p id="dev">MERN STACK Developer</p>
                        <img src={profile} alt='' className="img-fluids" height="350px" width="350 px" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;