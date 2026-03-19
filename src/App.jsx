import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>
    <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">Learn to integrate tailwind</h1>
    
    <div className='flex gap-4' >
      <Card title= "Buy Python Course" 
      buttonText="Join Now"
      imageUrl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
      />
      <Card title= "Buy Node Js Course"
      imageUrl= "https://images.pexels.com/photos/7038220/pexels-photo-7038220.jpeg" 
      />
      <Card imageUrl = "https://images.pexels.com/photos/7148531/pexels-photo-7148531.jpeg" 
      />

    </div>
    
    </>

  )
}

export default App
