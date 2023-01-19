import { useDispatch, useSelector } from "react-redux"
import { addRead } from "../reducers/filterReducer"

const EmailRow = ({email,setClicked,clicked}) => {
    
    
    const read=useSelector(state=> state.filter).read
    const favorite= useSelector(state=> state.filter).favorite
    // console.log(favorite)
    const dispatch= useDispatch()

    const handleClick = (e) => {
        const id= email.id
        if(clicked===id){
            setClicked('')
            return
        }
        if(!read.includes(id)){
            dispatch(addRead(id))
        }
        setClicked(id)
    }

    let classNames=['emailRow']
    if(clicked===email.id){                //check if email is clicked
        classNames.push('clickedEmailRow')
    }
    else if(read.includes(email.id)){      // if email not clicked,check if read
        classNames.push('readEmailRow')
    }
    

    return(
        <div className={classNames.join(' ')} onClick={handleClick}>
            <div className="profileIcon">{email.from.name[0].toUpperCase()}</div>
            <div style={{width:'350px'}}>
                <h3>From: <b>{email.from.name}  {email.from.email}</b> </h3>
                <h3>Subject: <b>{email.subject}</b></h3>
                <p>{email.short_description}</p>
                <div>
                    <time>{getDate(email.date)}</time> 
                    <span className="favorite">{favorite.includes(email.id) ?'Favorite' :''}</span>
                </div>
            </div>
        </div>
    )
}

export const getDate= (inputDate) =>{ 
    const date = new Date(inputDate)
    const yyyy = date.getFullYear()
    let mm = (date.getMonth() + 1)
    mm= mm <10 ? '0'+mm : mm   // if month is single digit pad it by 0 
    let dd = date.getDate()

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return ( 
        dd + '/' + mm + '/' + yyyy + ' '+ hours + ':' + minutes + ' ' + ampm
    )
}


export default EmailRow