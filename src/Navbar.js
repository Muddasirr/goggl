import React from 'react'
import './Navbar.css'
import dig from './dig.jpg'


const Navbar = () => {
    const a=['Home','About','Services','Contact']

  return (
    <div className="F">
<div>
    <ul className="order">
       { a.map((item)  => {
        return <li className="nav">{item}</li>;

        })}
    </ul>
 <div>
<img  className="pic"src={dig} alt="F"/> </div> </div>  </div>
  )
}

export default Navbar