import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const EmailBody = ({id}) => {
    
    const [mailBody,setMailBody] = useState('')
    
    let email = useSelector(state=> state.email.list)
    email = email.filter(e=>e.id==id)
    email=email[0]

    useEffect(()=>{
        const apiUrl = `https://flipkart-email-mock.now.sh/?id=${id}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                    setMailBody(data.body)
                });
    },[])
    
    return(
        <div className="emailBody">
            <div className="profileIcon">{email.from.name[0].toUpperCase()}</div>  
            <div>
                <h1>{email.from.name}</h1>
                <div dangerouslySetInnerHTML={{__html: mailBody}}></div>
            </div>
            
        </div>
    )
}

export default EmailBody