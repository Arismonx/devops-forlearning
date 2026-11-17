import './App.css'
import { useState, useEffect } from 'react'
const backendUrl = 'api/message'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(backendUrl)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setMessage(data)

      } catch (error) {
        console.error('Error fetching message:', error)
        setMessage('fetch data not completed')
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <div>
        <h1>Hello World Tuschy</h1>
        <p>Backend: {JSON.stringify(message)}</p>
      </div>
    </>
  )
}

export default App
