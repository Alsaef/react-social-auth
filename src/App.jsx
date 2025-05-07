import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DocumentTitle from 'react-document-title-hook';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DocumentTitle title="Home Page" />
     <h2 >Firebase</h2>
    </>
  )
}

export default App
