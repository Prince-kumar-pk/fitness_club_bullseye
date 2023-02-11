import React, { useState } from 'react'
import Data from './DetailData'
import './Registration.css'
export default function Registration() {

const [Name, setName]  = useState("")
const [Email, setEmail]  = useState("")
const [Phone, setPhone]  = useState("")
const [Address, setAddress]  = useState("")

const [Flag, setFlag] = useState(false)

// console.log(Name)
// console.log(Email)
// console.log(Phone)
// console.log(Address)

const handleOnClick = (e)=>{
  e.preventDefault()
 const obj = {
  Name:Name,
  Email: Email,
  Phone:Phone,
  Address:Address
 }

 Data.push(obj)

 console.log(Data)
}

const handleview = (e) =>{
setFlag(true)
}
const handleback = (e) =>{
setFlag(false)
}


if(Flag){
  return(
      <>
      <h1>admin</h1>
      <div className="list-view">
      <ul>
      <li> Name</li>
      <li> Email</li>
      <li> Phone</li>
      <li>Address</li>
    </ul>
{Data.map((item) =>{
 return(
  <div>
   
  
    <ul>
      <li> {item.Name}</li>
      <li> {item.Email}</li>
      <li> {item.Phone}</li>
      <li>{item.Address}</li>
    </ul>
  </div>
 )
})}
  </div>
<button onClick={handleback}>back</button>
      </>
  )
 } else return (
    <div>
      <div className="form-wrap">

      <h1>Fitness registration Form</h1>
        <form >
          <label htmlFor="name">Name</label> <br />
          <input type="text" placeholder="Your Name" value={Name}  onChange={(e) => {
            setName(e.target.value)
          }} /> <br />
          <label htmlFor="name">Email</label> <br />
          <input type="text" placeholder="Your Email" value={Email}  onChange={(e) => {
            setEmail(e.target.value)
          }} /> <br />
          <label htmlFor="name">Phone</label> <br />
          <input type="number" placeholder="Your Phone" value={Phone}  onChange={(e) => {
            setPhone(e.target.value)
          }} /> <br />
          <label htmlFor="name">Address </label> <br />
          <input type="text" placeholder="Your Address" value={Address} onChange={(e) => {
            setAddress(e.target.value)
          }} />
<br />
          <button className='btn' type="submit" onClick={handleOnClick}>Add Member</button>
        </form>
<br /><br />
        <button className='btn' type="submit" onClick={handleview}>View Member List  </button>
   
        </div>
    </div>
  )
}

