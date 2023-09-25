import { Component } from "react";
import phone from '../images/phone.logo.png';
import location from '../images/location.logo.png';
import mail from '../images/email.logo.png';
import linkedin from '../images/linkdin.logo.png';

class Contact extends Component{
    constructor(props) {
        super(props);

        this.state={
            items: [],
            DataisLoaded: false
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        const name = e.target.name.value;
        const email = e.target.mailid.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        if(name==''){
            document.getElementById('error').innerHTML="Please Enter your name";
            return false;
        }else if(email==''){
            document.getElementById('error').innerHTML="Please Enter your email";
            return false;
        }else if(subject==''){
            document.getElementById('error').innerHTML="Please Enter the subject";
            return false;
        }else if(message==''){
            document.getElementById('error').innerHTML="Please Enter your message";
            return false;
        }

        const formData = new FormData();
        formData.append("name",name);
        formData.append("email",email);
        formData.append("subject",subject);
        formData.append("message",message);
        console.log(formData);

        fetch("http://localhost:8080/contact", {
            method: 'POST', 
            body: formData , 
        })
        .then((res) => res.json())
                    .then((json) => {
                    })     
    }
    componentDidMount(){
        fetch(
    "http://localhost:8080/contact")
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
            <>
            <div id="contact">{
                items.map((item)=>(
                    <div className="container">
                        <h1 className="title">Contact</h1>
                        <p className="par1">
                            <img src={location} alt='' width={30} height={24} />
                            {item.address}
                        </p>
                        <p className="par">
                            <img src={phone} alt='' width={30} height={24} />
                            {item.phone}
                        </p>
                        <p className="par">
                            <img src={mail} alt='' width={30} height={24} />
                            {item.email}
                        </p>
                        <p className="par">
                            <img src={linkedin} alt='' width={30} height={24} />
                            {item.linkedin}
                        </p>
                    </div>
                ))
            }
            <div>
            <form method="post" onSubmit={this.handleSubmit}>
                <div id="error" />
                <label >Your Name</label>
                <input type="text"  name="name" placeholder="Your Name"/>
                <br />
                <label >Your E-Mail</label>
                <br/>
                <input type="email"  name="mailid" placeholder="Your email"/>
                <br />
                <label >Subject</label>
                <br/>
                <input type="text"  name="subject" placeholder="subject" />
                <br />
                <label >Message</label>
                <br/>
                <textarea type="text"  name="message" placeholder="message"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            </div>
            </div>
            </>    
        )
    }
}

export default Contact;