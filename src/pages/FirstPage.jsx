import React from 'react'
import { Link } from 'react-router-dom'
import firstPage from '../Assets/frontImage.jpg'
import AboutUs from './AboutUs'
import Bhagwan from '../Assets/bhagwan.jpg'
import BannerRight from '../Assets/bannerRight.jpg'
import './FirstPage.css'
import phoneLogo from '../Assets/phoneLogo.png'

const FirstPage = () => {
  return (
    <div style={{width:'100%'}}>
      <div className="pcFirstpage">
        <img src={Bhagwan} alt="" style={{flex: 1}} className='bhagwan' />
        <img src={firstPage} style={{flex: 5}} alt="" className='top-image' />
        <img src={BannerRight} alt="" style={{flex: 1}} className='bhagwan' />
      </div>
    </div>
  )
}

export default FirstPage