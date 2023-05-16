import React from 'react'
import { BiBorderAll } from 'react-icons/bi'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { MdListAlt, MdNoteAlt } from 'react-icons/md'
import {AiFillFile, AiOutlineScissor} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiBeaker } from 'react-icons/hi'
import './header.css'
const Header = () => {
  return (
    <header className='headerContainer'>
      <li><Link><BiBorderAll/>Overview</Link></li>
        <li><Link><MdNoteAlt/>Nurse Note</Link></li>
        <li><Link><FaBriefcaseMedical/>Medication</Link></li>
        <li><Link><MdListAlt/>Presciption</Link></li>
        <li><Link><AiFillFile/>Consultant Register</Link></li>
        <li><Link><HiBeaker/>Lab Investigation </Link></li>
        <li><Link><AiOutlineScissor/>Operation</Link></li>
    </header>
  )
}

export default Header
