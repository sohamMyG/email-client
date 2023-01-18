
const EmailRow = ({email}) => {
    
    const date=getDate(new Date(email.date))
    
    const handleClick = (e) => {

    }

    return(
        <div className='emailRow' onClick={handleClick}>
            <div className="profileIcon">{email.from.name[0].toUpperCase()}</div>
            <div>
                <h3>From: <b>{email.from.name}  {email.from.email}</b> </h3>
                <h3>Subject: <b>{email.subject}</b></h3>
                <p>{email.short_description}</p>
                <time>{date}</time>
            </div>
        </div>
    )
}

export const getDate= (date) =>{ 
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