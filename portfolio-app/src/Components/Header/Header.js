import React, { useState } from 'react'
import './Header.scss'
import { useNavigate, Link } from "react-router-dom";

export default function Header(props) {
    const navigate = useNavigate();
      const{headers}=props
       const [selectPage,setSelectPage]=useState(0)
       const viewPage=(heder,index)=>{
        navigate(`/${heder}`);
setSelectPage(index)

       }
  return (
    <section className='header_container'>
<div className='profile_details'>
<div  className='profile_details_nameContainer'>
    <div className='profilename'>
    abubacker-siddique
    </div>
    </div>

    <div className='pages'>
    {headers.map((heading,index)=><div className={selectPage===index?'pages_child selectedpage':'pages_child'} key={index} onClick={()=>viewPage(heading,index)}>{heading}</div>)}
    </div>


</div>
<div className={selectPage===3?'contactus selected':'contactus'} onClick={()=>viewPage('contact',3)}>_contact-me</div>
    </section>
  )
}
