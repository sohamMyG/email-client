import { useSelector } from "react-redux"
import EmailRow from "./EmailRow"
import EmailBody from "./EmailBody"
import { useState } from "react"

const Emails = () =>{
     
    const [emailBody,setEmailBody] = useState('')
    const filter = useSelector(state=>state.filter)
    const emails = useSelector(state=>state.email.list)
    
    if(!emails){return}
    
    const emailRows = emails.map( (e) => <EmailRow key={e.id} email={e}/>       
    )
    

    
    return(
        // <div className="main-container">    
        //     <div>{emailRows} </div> 
        //     <div>{emailBody && <EmailBody id={emailBody}/>}</div>
        // </div>
        <div className="main-container">
            <div class='email-container'>{emailRows}</div> 
            <div>{emailBody && <EmailBody id={emailBody}/>}</div> 
        </div>
    )
}

export default Emails