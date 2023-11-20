import { useEffect } from 'react'
import { useListsContext } from '../hooks/useListContext'

import ListDetails from '../components/ListDetails'
const Home = () => {
    const {lists, dispatch} = useListsContext()

    useEffect(() => {
        const fetchLists = async () => {
            const response = await fetch('api/lists')
            const json = await response.json()
            
            if(response.ok){
                dispatch({type: "SET_LISTS", payload: json})
            }
        }

        fetchLists()
    }, [dispatch])

    return (
        <div> 
            <div>
                {lists && lists.map((list) => (
                    <ListDetails key={lists._id} list={list}/>
                ))}
            </div>
        </div>
    )
}

export default Home