import React from 'react'
import founder from '../Assets/founder.jpeg'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutUs-section-inside' style={{}}>
        {/* <h1>About Us : </h1> */}
        <div className='aboutUs-section-founder' style={{}}>
            <img src={founder} alt="Loading Image" className='founder-image'/>
            <div style={{padding: '1em', marginTop: '1em'}}>
                <p style={{}} className="quote">
                ...IN THE MEMORY OF <strong>LATE SHANTILATA DASH</strong> WE STARTED <strong>SRI SHANTI AYURVEDIC</strong> SHE WAS THE FOUNDER AND MENTOR OF THIS COMPANY
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs