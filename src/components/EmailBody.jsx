import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDate } from "./EmailRow"
import { addFavorite } from "../reducers/filterReducer"
import { removeFavorite } from "../reducers/filterReducer"

const EmailBody = ({id}) => {
    
    const [mailBody,setMailBody] = useState('')
    const dispatch = useDispatch()
    
    useEffect(()=>{
        const apiUrl = `https://flipkart-email-mock.now.sh/?id=${id}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                    setMailBody(data.body)
                });
    },[])

    let email = useSelector(state=> state.email.list)
    email = email.filter(e=>e.id==id)
    email = email[0]
    const favorite= useSelector(state=> state.filter).favorite

    const handleClick = (e) => {
        console.log(favorite.includes(email.id))
        if(favorite.includes(email.id)){
            dispatch(removeFavorite(email.id))
        }
        else{dispatch(addFavorite(email.id))}
    }
    
    return(
        <div className="emailBody">
            <div className="profileIcon">{email.from.name[0].toUpperCase()}</div>  
            <div>
                <h1>{email.from.name}</h1>
                <button className="favoriteButton" onClick={handleClick}>
                    {favorite.includes(email.id) ? 'Favorited 🤍' : 'Mark as favorite'}
                </button>
                <p><time>{getDate(email.date)}</time></p>
                <div dangerouslySetInnerHTML={{__html: mailBody}}></div>
            </div>
            
        </div>
    )
}

export default EmailBody