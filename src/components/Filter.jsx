import { setFilter } from "../reducers/filterReducer"
import { useDispatch,useSelector } from "react-redux"

const Filter = ()=>{

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const handleClick = (e) => {
        dispatch(setFilter(e.target.textContent.toLowerCase()))
    
    }

    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            margin: '2rem 2.5rem',
            marginBottom :'1rem'
        }}>
            <span style={{margin:'0px 10px'}}>Filter By: </span>
            <button className={"filterButton " + (filter==='unread' && "filterButton-active")} onClick={handleClick}>Unread</button>
            <button className={"filterButton " + (filter==='read' && "filterButton-active")} onClick={handleClick}>Read</button>
            <button className={"filterButton " + (filter==='favorites' && "filterButton-active")} onClick={handleClick}>Favorites</button>
        </div>
    )
}

export default Filter