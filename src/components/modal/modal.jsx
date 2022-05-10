import React, {useRef,useEffect} from 'react'

import './modal.css'

export default function Modal({modal,setModal, children, title}) {

    const parentRef = useRef()

    const handleCloseModal= ()=>{
        setModal(false)
    }
    const handleModalClose = (e)=>{
       if (e.target===parentRef.current) {
           setModal(false)
       }
    }

    const escCloseModal = (e)=>{
        if (e.keyCode===27) {
            setModal(false)
        }
    }
    useEffect(()=>{
        if (modal) {
            window.addEventListener("keyup", escCloseModal)
        }

        return ()=>window.removeEventListener("keyup", escCloseModal);
    },[modal])

  return (
    <div ref={parentRef} className={`position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center  ${!modal&&"d-none"}`} onClick={handleModalClose}>
       <div id='modal-animation' className='w-50 border p-4 bg-white shadow' >
            <div className=' d-flex justify-content-between'>
                <h2 >{title}</h2>
                <button onClick={handleCloseModal} className='btn btn-danger'>&times;</button>
            </div>
           {children}
       </div>
    </div>
  )
}
