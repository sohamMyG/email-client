import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Emails from './components/Emails'
import { useDispatch } from 'react-redux'
import { setEmails } from './reducers/emailReducer'


function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const apiUrl = 'https://flipkart-email-mock.vercel.app/';
    // const emails = async() =>{
    //   const response = await fetch(apiUrl)
    //   const data = await response.json()
    //   return data
    // }
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setEmails(data))
      });
  },[])

  return (
    <div>
      <Filter/>
      <Emails />
    </div>
  )
}

export default App
