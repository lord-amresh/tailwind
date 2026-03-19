export default function Card ({title = "Default", buttonText = "Check It Out", imageUrl }) {
    return (    
    <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow'>
      <img className='w-full h-48 object-cover'
       src= {imageUrl} alt='Sample image'
      />
      <div className='p-4'>
        <h2 className='text-lg font-semibold text-gray-800'>{title}</h2>
        <p className='mt-2 text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore modi enim tempora, eum tempore.</p>
        <button className='mt-4 px-4 bg-blue-600 rounded-lg text-white py-2 hover:bg-blue-700'>{buttonText}</button>
      </div>
        </div>
        )
}