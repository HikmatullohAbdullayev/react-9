
import React, { useState } from 'react'
import Modal from './modal/modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenImg, setIsModalOpenImg] = useState(false)

  return (
    <main className="mx-auto w-[1220px] px-5   ">
      <section className='content'>
        <button className='w-full p-5 bg-teal-400 rounded-lg m-5 ' onClick={() => setIsModalOpen(true)}>
          Modalni ochish
        </button>
        <button className='w-full p-5 bg-teal-400 rounded-lg m-5 ' onClick={() => setIsModalOpenImg(true)}>
          Modalni ochish 2
        </button>
    
        {isModalOpen && (
         <div className="  bg-amber-100 rounded-lg">
           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-4 bg-amber-100 p-5">
          <h1 className='p-4 bg-amber-300 rounded-lg font-semibold text-2xl'>Birinchi modal</h1>
            <p className='p-4 bg-amber-400 rounded-lg font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio facilis repellat dignissimos quis necessitatibus ullam, fugit architecto? Facere porro nobis illum error sed rem atque saepe nostrum magni vel!
            </p>
            <p className='p-4 bg-amber-400 rounded-lg font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio facilis repellat dignissimos quis necessitatibus ullam, fugit architecto? Facere porro nobis illum error sed rem atque saepe nostrum magni vel!
            </p>
          </div>
          </Modal>
           
        
         </div>
        )}
        {isModalOpenImg && (
         <div className="rounded-lg  bg-lime-200">
          <div className="flex flex-col gap-4 bg-lime-300 p-5">
           <Modal isOpen={isModalOpenImg} onClose={() => setIsModalOpenImg(false)}>
            <h1 className='p-4 bg-lime-500 font-semibold text-2xl rounded-lg'>Birinchi modal</h1>
            <p className='p-4 m-4 bg-lime-400 font-medium text-lg rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio facilis repellat dignissimos quis necessitatibus ullam, fugit architecto? Facere porro nobis illum error sed rem atque saepe nostrum magni vel!
            </p>
            
            <img className='w-[450px] mx-auto bg-lime-300 p-5 rounded-lg' src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Modal></div>
           
        
         </div>
        )}
        
      </section>
    </main>
  )
}

export default App
