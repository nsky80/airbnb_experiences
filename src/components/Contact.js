
import phone_icon from "../images/phone-icon.png" 
import mail_icon from "../images/mail-icon.png"

export default function Contact(props) {
    // console.log(props)
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone_icon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}