import { useSelector } from "react-redux"
import EmailRow from "./EmailRow"
import EmailBody from "./EmailBody"
import { useState } from "react"

const Emails = () =>{
    
    
    const [clicked,setClicked] = useState('')
    let emails = useSelector(state=>state.email.list)
    
    let filter = useSelector(state=>state.filter)
    
    if(!emails){return}

    if(filter.selected){
        const selected = filter.selected
        const readArray = filter.read
        if(selected==='read'){
            console.log('works')
            emails = emails.filter(email => readArray.includes(email.id))
        }
        else if(selected==='unread'){
            emails = emails.filter(email => !readArray.includes(email.id))
        }
        else if(selected==='favorites'){
            emails = emails.filter(email => filter.favorite.includes(email.id))
        }
    }
    

    
    const emailRows = emails.length===0 ?  <div className="emailRow">No emails zzz...</div>  :  emails.map( (e) => 
            <EmailRow 
                key={e.id}
                email={e} 
                clicked ={clicked}
                setClicked={setClicked}
            />           
        )
    console.log(emailRows)
    return(
        <div className="main-container">
            <div className='email-container'>{emailRows}</div> 
            <div>{clicked && <EmailBody id={clicked}/>}</div> 
        </div>
    )
}

export default Emails