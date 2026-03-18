import './App.css'

function App() {
  return (
    <>
    <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">Learn to integrate tailwind</h1>
    <div className='flex gap-4' >
        <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
      <img className='w-full h-48 object-cover'
       src='https://images.unsplash.com/photo-1509042239860-f550ce710b93' alt='Sample image'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold text-gray-800'>card Title</h2>
        <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore modi enim tempora, eum tempore.</p>
        <button className='mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700'>Buy Now</button>
      </div>
        </div>
        <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
      <img className='w-full h-48 object-cover'
       src='https://images.unsplash.com/photo-1509042239860-f550ce710b93' alt='Sample image'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold text-gray-800'>card Title</h2>
        <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore modi enim tempora, eum tempore.</p>
        <button className='mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700'>Buy Now</button>
      </div>
        </div>
    </div>
    
    </>

  )
}

export default App
