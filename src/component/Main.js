import React from 'react'
import { BiMenu } from 'react-icons/bi'
import {BsFillPenFill} from 'react-icons/bs'
import { FaAmbulance, FaBed, FaFileInvoice, FaTrash } from 'react-icons/fa'
import './main.css'
import { dummydata } from './dummydata'
import { MdBloodtype, MdNoteAlt } from 'react-icons/md'
import { HiBeaker } from 'react-icons/hi'
const allegies=[{id:1,name:'Fast Food'}]
const medication=[{id:1,date:"05/08/2023",time:"03:30 PM",medicineName:'Alprovit',dose:'1 (MLI)',remark:'this is remark'}]
const Prescription=[{id:1,Prescription:'1234ab',date:"05/08/2023",finding:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusantium vero reiciendis ipsa, a iure harum maiores sit atque doloremque error fugiat et modi sed quod animi praesentium, neque tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusantium vero reiciendis ipsa, a iure harum maiores sit atque doloremque error fugiat et modi sed quod animi praesentium, neque tempora.'}]
const Main = () => {
  return (
    <main className='mainContainer'>
      <section className='leftSection'>
            <div className='leftSectionContainer'>
                <h3 className='name'>WORDEY LIMPI(151)</h3>
                <div className='rightSide'>
                    <BiMenu className='icon'/>
                    <BsFillPenFill className='icon'/>
                    <FaTrash className='icon'/>
                    <FaFileInvoice className='icon'/>
                </div>
            </div>
            <hr className='line'/>
            <div className=' profile'>
                <div className='imgContainer'><img className='image' alt='profile' src={dummydata.img}/></div>
                <div className='rightProfile'>
                <div>
                    <h5>Gender</h5>
                    <h5>Age</h5>
                    <h5>Guardian Name</h5>
                    <h5>Phone</h5>
            </div>
            <div>
                <p>Female</p>
                <p className='year'>13years 8months 44days</p>
                <p>Jack Limpi</p>
                <p>+73456789032</p>
            </div>
                </div>
            </div>
            <div className='leftSectionContainer profile'>
            <div className=''>
                <h5>Gender</h5>
                <h5>Age</h5>
                <h5>Guardian Name</h5>
                <h5>Phone</h5>
            </div>
            <div>
                <p>Gender</p>
                <p>Age</p>
                <p>Guardian Name</p>
                <p>Phone</p>
            </div>
            <div>
                <p>Credit Limit:20000</p>
                <p className='red'>Used Credit Limit:23456</p>
                <p className='green'>balanced Credit Limit:23456</p>
            </div>
        </div>
        <hr />
        <div>
            <div className='allegies'><MdNoteAlt/><h6 className='name'>Known Allegies</h6></div>
           <ul className='name'>
           {allegies.map((singleAllegy)=>{
            return(
                <li key={singleAllegy.id} className='name'>{singleAllegy.name}</li>
            )
        })}
           </ul> 
        </div>
        <hr />
        <div>
        <div className='allegies'><MdNoteAlt/><h6 className='name'>Findings</h6></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Minus accusantium vero reiciendis ipsa, a iure harum maiores 
                sit atque doloremque error fugiat et modi sed quod animi 
                praesentium, neque tempora.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Minus accusantium vero reiciendis ipsa, a iure harum maiores 
                sit atque doloremque error fugiat et modi sed quod animi 
                praesentium, neque tempora.
            </p>
        </div>
      </section>
      <section className='rightSection'>
        <div className='progressContainer'>
            <div className='leftProgress'>
                <div>
                    <div className='flex'><h6 className='name'>PHARMACY PAYMENT/BILLING</h6><FaBed/></div>
                    <div className='flex'><p className='name'>40.05</p><p className='name'>$1500.00/3745.00</p></div>
                    <progress className='progress' value="40.05" max="100"> 40.05 </progress>
                </div>
                <div>
                <div className='flex'><h6 className='name'>PHARMACY PAYMENT/BILLING</h6><HiBeaker/></div>
                <div className='flex'><p className='name'>40.05</p><p className='name'>$1500.00/3745.00</p></div>
                <progress className='progress' value="40.05" max="100"> 40.05 </progress>
                </div>
                <div>
                <div className='flex'><h6 className='name'>PHARMACY PAYMENT/BILLING</h6><MdBloodtype/></div>
                <div className='flex'><p className='name'>40.05</p><p className='name'>$1500.00/3745.00</p></div>
                <progress className='progress' value="40.05" max="100"> 40.05 </progress>
                </div>
            </div>
            <div className='leftProgress'>
            <div>
                <div className='flex'><h6 className='name'>PHARMACY PAYMENT/BILLING</h6><FaBed/></div>
                <div className='flex'><p className='name'>40.05</p><p className='name'>$1500.00/3745.00</p></div>
                <progress className='progress' value="40.05" max="100"> 40.05 </progress>
            </div>
            <div>
            <div className='flex'><h6 className='name'>RADIOGRAPHY PAYMENT/BILLING</h6><HiBeaker/></div>
            <div className='flex'><p className='name'>40.05</p><p className='name'>$1500.00/3745.00</p></div>
            <progress className='progress' value="40.05" max="100"> 40.05 </progress>
            </div>
            <div>
            <div className='flex'><h6 className='name'>AMBULANCE PAYMENT/BILLING</h6><FaAmbulance/></div>
            <div className='flex'><p className='name'>40.05</p><p className='name'>$1500.00/3745.00</p></div>
            <progress className='progress' value="40.05" max="100"> 40.05 </progress>
            </div>
        </div>
        </div>
     <div className='medsContainer'>
            <h3>MEDICATION</h3>
            <div className='flex'>
                <h5 className='medItem'>Date</h5>
                <h5 className='medItem'>Medicine Name</h5>
                <h5 className='medItem'>Dose</h5>
                <h5 className='medItem'>Time</h5>
                <h5 className='medItem'>Remark</h5>
            </div>        
            <hr />
            {medication.map((singleMed)=>{
                return(
                    <div className='flex' key={singleMed.id}>
                        <p className='medItem'>{singleMed.date}</p>
                        <p className='medItem'>{singleMed.medicineName}</p>
                        <p className='medItem'>{singleMed.dose}</p>
                        <p className='medItem'>{singleMed.time}</p>
                        <p className='medItem'>{singleMed.remark}</p>
                    </div>
                )
            })}
        </div>   

        <div className='medsContainer'>
        <h3>PRESCRIPTION</h3>
        <div className='flex'>
            <h5 className='medItem1'>Prescription No</h5>
            <h5 className='medItem1'>Date</h5>
            <h5 className='medItem2'>Findings</h5>
            
        </div>        
        <hr className='line'/>
        {Prescription.map((singleMed)=>{
            return(
                <div>
                <div className='flex flex1' key={singleMed.id}>
                    <p className='medItem1'>{singleMed.Prescription}</p>
                    <p className='medItem1'>{singleMed.date}</p>
                    <p className='medItem2'>{singleMed.finding}</p>
                </div>
                <hr className='line'/>
                </div>
                
            )
        })}
    </div>
      </section>
    </main>
  )
}

export default Main
