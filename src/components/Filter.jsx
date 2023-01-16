import { setFilter } from "../reducers/filterReducer"
import { useDispatch,useSelector } from "react-redux"

const Filter = ()=>{

    const dispatch = useDispatch()
    // 'unread'))
    const filter = useSelector(state => state.filter)
    
    const handleClick = (e) => {
        dispatch(setFilter(e.target.textContent.toLowerCase()))
        // e.target.classList.add("filterButton-active")
        
        // e.target.style.backgroundColor = 'e1e4ea'
        // if(e.target.style.backgroundColor === 'e1e4ea'){
        //     console.log(true)
        // }
        // console.log(e.target.style)
    }

    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            marginTop:'40px',
            marginLeft:'20px'
        }}>
            <span style={{margin:'0px 10px'}}>Filter By: </span>
            <button className={"filterButton " + (filter==='unread' && "filterButton-active")} onClick={handleClick}>Unread</button>
            <button className={"filterButton " + (filter==='read' && "filterButton-active")} onClick={handleClick}>Read</button>
            <button className={"filterButton " + (filter==='favorites' && "filterButton-active")} onClick={handleClick}>Favorites</button>
        </div>
    )
}

export default Filter