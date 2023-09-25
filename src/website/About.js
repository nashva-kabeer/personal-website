import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);

        this.state={
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount(){
        fetch(
    "http://localhost:8080/about")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render(){
        const {items} = this.state;
        return(
            <div id="about">{
                items.map((item) => (
                    <div className="container">
                    <h1 className="title">About Me</h1>
                    <p>{item.para}</p>
                    </div>
                ))
            }
            </div>
        )
    }
}

export default About;