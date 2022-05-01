import React from 'react'
import { Link } from 'react-router-dom';

import rasm from '../../assets/logos/Najot_Talim.png'
import './Header.css'

export default function Header() {
  return (
    <div className='row bg-light'>
        <div className='offset-md-1  col-2'>
            <div className='image_card'><Link to="/"><img src={rasm} alt="rasm topilmadi"/></Link></div>
        </div>
        <div className='offset-3 d-flex align-items-center col-2'>
          <Link to='/users' className='text-decoration-none w-100 btn border btn-secondary'>Users</Link>
        </div>
        <div className=' offset-1 col-2 d-flex align-items-center '>
          <Link to='/posts' className='text-decoration-none w-100 btn border btn-secondary'>Posts</Link>
        </div>
      </div>
    );
  }