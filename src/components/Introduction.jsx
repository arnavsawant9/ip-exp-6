import React from 'react'
import '../styles/introduction.css'
import photo from  '../assets/photo.jpeg'


function Introduction() {
  return (
    <div className='container'>
        <div className='image'>
        <img src={photo}/>
        </div>
        <div className='text'>
        <h1>Arnav Sawant</h1>
        <p>Frontend developer!!</p>
        </div>
    </div>
  )
}

export default Introduction