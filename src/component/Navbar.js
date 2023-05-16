import React, { useState } from 'react'
import {BiBorderAll, BiMenu,BiSearch} from 'react-icons/bi'
import {FaAmbulance, FaBed, FaRegHospital, FaShuttleVan, FaTimes, FaUser, FaXRay} from 'react-icons/fa'
import {HiFolder, HiOutlineDownload, HiUser} from 'react-icons/hi'
import {ImCheckmark, ImFloppyDisk} from 'react-icons/im'
// import {div } from '@material-ui/core'
import {dummydata} from './dummydata'
import './navbar.css'
import { RiHospitalFill, RiMessage2Fill } from 'react-icons/ri'
import { CgPathTrim } from 'react-icons/cg'
import { IoIosBed } from 'react-icons/io'
import { MdBloodtype } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [show, setShow] = useState(false)
  const togglerHandler = () => {
     setShow(!show);
    
       const checkSize = window.addEventListener("resize", () => {
         if (window.screen.width > 768) {
           setShow(false);
           }
       });
    
       return () => {
           window.removeEventListener("resize", checkSize);
      };
}
  return (
    <div>
    <div className='menuCon'><BiMenu className='menu' onClick={()=>togglerHandler()}/><b className='homeText'>Smart Hospital & Research Center</b></div>
    
    <div container  className='navContainer'>   
    
      <div item >
          <b className='homeText'>Smart Hospital & Research Center</b>     
      </div>
      <div >
        <div className='searchdiv'><BiSearch className='searchicon'/><input id="filled-basic" placeholder='Search' className='searchinput' /></div>  
      </div>
      <div item  className='profileContainer'>
        <FaBed/>
        <small>Bed Status</small>
        <HiFolder/>
        <div>
          <ImCheckmark className='mark'/>
        </div>
        <div className='profileImgContainer'>
          <img src={dummydata.img} className='profileImg' alt="" />
        </div>
        </div>
      </div>
      <nav className={show?'menuItem show':'menuItem'}>
      <li><Link><RiHospitalFill/>Front Office</Link></li>
      <li><Link><FaUser/>OPD-Out patient</Link></li>
      <li><Link><FaUser/>IPD-In patient</Link></li>
      <li><Link><FaRegHospital/>Pharmacy</Link></li>
      <li><Link><CgPathTrim/>Pathology</Link></li>
      <li><Link><FaXRay/>Radiology</Link></li>
     <li><Link><IoIosBed/>Theater</Link></li>
      <li><Link><MdBloodtype/>Blood Bank</Link></li>
      <li><Link><ImFloppyDisk/>TFA Management</Link></li>
      <li><Link><FaAmbulance/>Ambulance</Link></li>
      <li><Link><HiUser/>Human Resources</Link></li>
      <li><Link><RiMessage2Fill/>Messaging</Link></li>
      <li><Link><HiOutlineDownload/>Download Center</Link></li>
      <li><Link><FaShuttleVan/>Inventory</Link></li>
      <li><Link><ImFloppyDisk/>Front CMS</Link></li>
      <li><Link><BiBorderAll/>Reports</Link></li>
      <li><div className='searchdiv'><BiSearch className='searchicon'/><input id="filled-basic" placeholder='Search' className='searchinput' /></div></li>
      <FaTimes onClick={()=>setShow(false)} className='cancel'/>
      </nav>


    </div>
    
  )
}

export default Navbar
