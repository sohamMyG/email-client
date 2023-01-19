import { setFilter } from "../reducers/filterReducer"
import { useDispatch,useSelector } from "react-redux"
import { addRead } from "../reducers/filterReducer"

const Filter = ()=>{

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter.selected)
    const handleClick = (e) => {
        const clickedFilter = e.target.textContent.toLowerCase()
        if(filter===clickedFilter){
            dispatch(setFilter(''))
            return
        }
        dispatch(setFilter(clickedFilter))
    
    }
    
    return(
        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-start',
            margin: '2rem 0 1.5rem 2.5rem',
            
        }}>
            <span style={{margin:'0px 10px'}}>Filter By: </span>
            <button className={"filterButton " + (filter==='unread' && "filterButton-active")} onClick={handleClick}>Unread</button>
            <button className={"filterButton " + (filter==='read' && "filterButton-active")} onClick={handleClick}>Read</button>
            <button className={"filterButton " + (filter==='favorites' && "filterButton-active")} onClick={handleClick}>Favorites</button>
        </div>
    )
}

export default Filter