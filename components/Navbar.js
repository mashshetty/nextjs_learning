import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <style jsx>
    {
        `
        .nav ul{
         display: flex;
         justify-content: center;
         margin-top:20px;
        }
        
        .nav ul li{
          margin-inline: 10px;
          list-style: none;
          font-weight: 600;
          cursor: pointer;
          background:blue;
          padding:5px 10px;
          color:white;
        }
        `
    }
        </style>
          <nav className="nav">
          <ul className="mtb">
           <Link href="/"><li >home </li></Link> 
          <Link href="/About"> <li>about us</li></Link> 
          <Link href="/blog"> <li>blogs</li></Link> 
          <Link href="/contact"> <li>contact us</li></Link> 
          </ul>
        </nav>
    </div>
  )
}

export default Navbar