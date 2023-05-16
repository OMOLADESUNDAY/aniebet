import React, { useState } from 'react'
import { FaAmbulance, FaRegHospital, FaShuttleVan, FaUser, FaXRay } from 'react-icons/fa'
import {RiHospitalFill, RiMessage2Fill} from 'react-icons/ri'
import {CgPathTrim} from 'react-icons/cg'
// import {TbTheater} from 'react-icons/tb'
import {IoIosBed} from 'react-icons/io' 
import {MdBloodtype} from 'react-icons/md'
import {ImFloppyDisk} from 'react-icons/im'
import { Link } from 'react-router-dom'
import './aside.css'
import { HiOutlineDownload, HiUser } from 'react-icons/hi'
import { BiBorderAll, BiMenu } from 'react-icons/bi'

const Aside = () => {
  const [show,setShow]=useState(false)
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
    <aside className='asideContainer'>
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
  </aside>
    
  )
}

export default Aside
