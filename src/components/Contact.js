
import phone_icon from "../images/phone-icon.png" 
import mail_icon from "../images/mail-icon.png"

/*
We can de-strucure the props like
*/

export default function Contact({img, name, phone, email}) {
    // console.log(props)
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phone_icon} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} />
                <p>{email}</p>
            </div>
        </div>
    )
}