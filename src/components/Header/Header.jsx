import React, { useContext} from 'react'
import { Link,NavLink } from 'react-router-dom';

import { ThemeContext } from '../../context/theme-context';
import { LangContext } from '../../context/lang-context';
import { lang } from '../lang/lang';

import rasm from '../../assets/logos/Najot_Talim.png'
import night from "../../assets/icons/night.png"
import sunny from "../../assets/icons/sunny.png"
import './Header.css'

export default function Header() {

  const {theme, setTheme} = useContext(ThemeContext)
  const {lang:til,setLang} = useContext(LangContext)

  return (
    <header className={!theme?'bg-light':" header-dark"}>
      <div className='row align-items-center'>
        <div className='offset-md-1  col-2'>
            <div className='image_card'><Link to="/"><img src={rasm} alt="rasm topilmadi"/></Link></div>
        </div>
        <div className='offset-2 d-flex align-items-center col-4'>
          <ul className='list-unstyled d-flex justify-content-evenly w-100'>
            <li>
            <NavLink to='/users' className={({isActive})=>isActive?'fs-4 actives':'text-decoration-none link text-black fs-4'}>{lang[til].header.users}</NavLink>
            </li>
            <li>
            <NavLink to='/posts'  className={({isActive})=>isActive?'fs-4 actives':'text-decoration-none link text-black fs-4'}>{lang[til].header.posts}</NavLink>
            </li>
          </ul>
        </div>
        <div className='col-2 d-flex justify-content-around align-items-center pb-3'>
          <div id='icon-box' onClick={()=>setTheme(!theme)}>{theme?<img src={sunny} alt="dark-mode"/>:<img src={night} alt="light-mode" />}</div>
          <div className='mt-2'>
            <select className='form-select' defaultValue={til} onChange={(e)=>setLang(e.target.value)}>
              <option value={"uz"}>Uz</option>
              <option value={"en"}>En</option>
            </select>
          </div>
        </div>
      </div>
    </header>
    );
  }