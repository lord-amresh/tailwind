import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>
    <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">Learn to integrate tailwind</h1>
    
    <div className='flex gap-4' >
      <Card title= "Buy Python Course"/>
      <Card title= "Buy Node Js Course"/>
      <Card/>

    </div>
    
    </>

  )
}

export default App
