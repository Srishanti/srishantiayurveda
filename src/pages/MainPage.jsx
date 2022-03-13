import React from 'react'
import CarouselSlider from '../Components/CarouselSlider'
import FirstPage from './FirstPage'
import aboutUs from '../Assets/aboutUs.jpg'
import finalAboutUs from '../Assets/finalAboutUsImage.jpg'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import {items} from '../Assets/Items/items.js'
import first from '../Assets/Banners/1.jpg'
import second from '../Assets/Banners/2.jpg'
import third from '../Assets/Banners/3.jpg'
import fourth from '../Assets/Banners/4.jpg'
import './MainPage.css'
import rightIcon from '../Assets/rightIcon.jpg'
import leftIcon from '../Assets/leftIcon.jpg'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import templateImage from '../Assets/templateImage.jpg'
import headerImage from '../Assets/headerImage.jpg'



const MainPage = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      flexWrap: 'nowrap',
    }}))



    const classes = useStyles();

  return (
      <>
        <div className='main-body' style={{margin: 'auto'}}>
            <FirstPage />
            <div id="mobile_about">
              <AboutUs />
            </div>
            <div className="navbar-container">
              <Navbar bg="light" variant="primary" sticky="top" className="navbar">
                  <img src={leftIcon} alt="loading" srcset="" className='leftIcon'/>
                  <Nav className="me-auto nav-links">
                    <Nav.Link href="#aboutUs" style={{marginRight: '1.5em'}}>About Us</Nav.Link>
                    <Nav.Link href="#ourMission" style={{marginRight: '1.5em'}}>Our Mission</Nav.Link>
                    <Nav.Link href="#ourVision" style={{marginRight: '1.5em'}}>Our Vision</Nav.Link>
                    <Nav.Link href="#ourProducts" style={{marginRight: '1.5em'}}>Our Products</Nav.Link>
                    <Nav.Link href="#ourContact" style={{marginRight: '1.5em'}}>Contact Us</Nav.Link>
                  </Nav>
                  <img src={rightIcon} alt="loading" srcset="" className='rightIcon'/>
              </Navbar>
              <Carousel className='mt-2'>
                <Carousel.Item interval={3500} className='carousel-item'>
                    <img className="d-block w-100" height='450px' src={first} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={3500} className='carousel-item'>
                    <img className="d-block w-100" height='450px' src={second} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={3500} className='carousel-item'>
                    <img className="d-block w-100" height='450px' src={third} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={3500} className='carousel-item'>
                    <img className="d-block w-100" height='450px' src={fourth} alt="" />
                </Carousel.Item>
              </Carousel>
              <hr />
              <section id="aboutUs" className="aboutUsTextSection">
                <div style={{position: 'relative', height: '180Vh'}}>
                  {/* <img src={about_Us} alt="" srcset="" className="aboutUs_pc" style={{position: 'absolute'}} /> */}
                  <div style={{position: 'absolute', bottom: '1Vh', right: '0', height: '40Vh', width: '60%'}}>
                    <p className="aboutUsParagraph">
                      Established in 2020 with an innovative thought to pass the benefits of Ayurvedic Medicines with high quality, latest technologies and ethical standards. We want to make the world a heathier place, by turning back to <span style={{color: 'teal'}}>"NATURE IS LIFE"</span>
                    </p>
                  </div>
                </div>
              </section>
              <hr />
              <section id="ourMission" className='ourMissionTextSection'>
                <div style={{position: 'relative', height: '180Vh'}}>
                  {/* <img src={ourMission} alt="" srcset="" className="aboutUs_pc" style={{position: 'absolute'}} /> */}
                  <div style={{position: 'absolute', bottom: '1Vh', right: '0', height: '40Vh', width: '60%'}}>
                    <p className="aboutUsParagraph">
                      As a small front-runner in the herbal Medicine industry, we want to provide standardized herbal healthcare products creating health lives and delivering outstanding value to society.
                    </p>
                  </div>
                </div>
              </section>
              <hr />
              <section id="ourVision" className="ourVisionTextSection">
                <div style={{position: 'relative', height: '180Vh'}}>
                  {/* <img src={ourVision} alt="" srcset="" className="aboutUs_pc" style={{position: 'absolute'}} /> */}
                  <div style={{position: 'absolute', bottom: '1Vh', right: '0', height: '40Vh', width: '60%'}}>
                    <p className="aboutUsParagraph">
                      To be a leading herbal healthcare company developing people's trust in Quality & excellence not only in our products but one whose mind, body and soul are in completely alignment with all organs functioning at the optimum level.
                    </p>
                  </div>
                </div>
              </section>
              <hr />
              <div className='pcCarousel-product' id="ourProducts">
                <div style={{marginBottom: '1em'}}>
                  <img src={templateImage} alt="" srcset="" width="350px" />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <CarouselSlider />

                </div>

              {/* <GridList className={classes.gridList} cols={4} style={{marginBottom: '2em'}}>
                {items.map((tile) => (
                  <GridListTile key={tile.image} style={{height: '300px', marginRight: '0.4em'}}>
                      <Link to={`/item/${tile.title}`} target="_blank" >
                      <img src={tile.image} alt={tile.title} height="300px" width="100%"/>            
                      <GridListTileBar
                        title={tile.title}
                        />
                      </Link>
                    </GridListTile>
                ))}
              </GridList> */}
              
              <hr />
                <div className="items-grid">
                <Row md={3} className="g-4 align-items-center justify-content-md-center">
                  {items.map((value) => (
                    <Col md={3} className="align-items-center">
                      <Card className='custom-cards'>
                        <Card.Img variant="top" src={value.image} height='280px'/>
                        <Card.Body>
                          <Card.Title>{value.title}</Card.Title>
                          <Card.Text>
                            {value.subtitle}
                          </Card.Text>
                          <Link to={`/item/${value.title}`} target="_blank" ><Button variant="primary">View Details</Button></Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              </div>
              <section id="ourContact" style={{position: 'relative', height: '300px'}}>
                {/* <img src={headerImage} style={{position: 'absolute'}} alt="Loading" className="headerImage"/> */}
                <div style={{position: 'absolute',width: '100%', height: '300px'}} className="footerContent">
                  <div className='footerColumn'  style={{paddingLeft: '1em'}}>
                    <h4>Information</h4>
                    <br /> 
                    <a href="#" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Home</a> 
                    <br /> 
                    <a href="#aboutUs" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>About Us</a> 
                    <br /> 
                    <a href="#ourMission" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Our Mission</a> 
                    <br /> 
                    <a href="#ourVision" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Our Vision</a> 
                    <br /> 
                    <a href="#ourProducts" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Product Gallery</a> 
                  </div>
                  <div className='footerColumn' style={{paddingLeft: '1em'}}>
                    <h4>Our Products</h4>
                    <div style={{display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center'}}>
                      <div style={{marginRight: '2em'}}>
                        <p>Arthosri</p>
                        <p>Calcisri</p>
                        <p>Orthosri</p>
                        <p>Vitasri</p>
                        <p>Vigosri</p>
                        <p>Orthrsri-oil</p>
                      </div>
                      <div style={{marginRight: '2em'}}>
                        <p>Irosri</p>
                        <p>Pilesri</p>
                        <p>Purisri</p>
                        <p>Cofsri</p>
                        <p>Nutrisri</p>
                        <p>Cardisri</p>
                      </div>
                      <div>
                        <p>Immusri</p>
                        <p>Vigosri-X</p>
                        <p>Srizyme-L</p>
                        <p>Alkasri</p>
                        <p>Gasosri</p>
                        <p>Stonesri</p>
                      </div>
                    </div>
                  </div>
                  <div className='footerColumn' style={{paddingLeft: '1em', marginRight: '1em'}}>
                    <h4>Contact Us</h4>
                    <div>
                      <div>
                        <p><strong>SRI SHANTI AYURVEDIC</strong></p>
                        <p>Regd. Address: Berhampur, Odisha</p>
                        <p>Corp. Office Address: Yelahanka, Bangalore-560064</p>
                        <p>Contact us at:<strong> 7978358828</strong></p>
                        <p>Mail us at:<strong> srishantiayurvedic2020@gmail.com</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
              <div className="pcScreenCarousel" id='home'>
                <div className="aboutUs-section">
                  <img src={aboutUs} alt="about us" className='aboutus-page-image'/>
                </div>
                {/* <div className='email-block' style={{minHeight: '3em'}}>
                  <h5 style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>For Orders Please Contact Us At:</h5> */}
                  {/* <Link to="/">
                    <div className='email-box' style={{display: 'flex', justifyContent: 'center',margin: 'auto', width: '50%'}}>
                      <h3>7978358828</h3>
                    </div>
                  </Link> */}
                {/* </div> */}
                <div className='product-carousel'>
                  <CarouselSlider />
                </div>
              </div>

              <section id="ourContact" className="footer" style={{}}>
                {/* <img src={headerImage} style={{position: 'absolute'}} alt="Loading" className="headerImage"/> */}
                <div style={{width: '100%'}} className="footerContent">
                  <div className='footerColumn'  style={{paddingLeft: '1em'}}>
                    <h4>Information</h4>
                    <br /> 
                    <a href="#" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Home</a> 
                    <br /> 
                    <a href="#mobile_about" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>About Us</a> 
                    <br /> 
                    {/* <a href="#ourMission" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Our Mission</a> 
                    <br /> 
                    <a href="#ourVision" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Our Vision</a> 
                    <br /> 
                    <a href="#ourProducts" className='footerLinks' style={{color: 'black', textDecoration: 'none'}}>Product Gallery</a>  */}
                  </div>
                  <div className='footerColumn' style={{paddingLeft: '1em'}}>
                    <h4>Our Products</h4>
                    <div style={{display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center'}}>
                      <div style={{marginRight: '2em'}}>
                        <p>Arthosri</p>
                        <p>Calcisri</p>
                        <p>Orthosri</p>
                        <p>Vitasri</p>
                        <p>Vigosri</p>
                        <p>Orthrsri-oil</p>
                      </div>
                      <div style={{marginRight: '2em'}}>
                        <p>Irosri</p>
                        <p>Pilesri</p>
                        <p>Purisri</p>
                        <p>Cofsri</p>
                        <p>Nutrisri</p>
                        <p>Cardisri</p>
                      </div>
                      <div>
                        <p>Immusri</p>
                        <p>Vigosri-X</p>
                        <p>Srizyme-L</p>
                        <p>Alkasri</p>
                        <p>Gasosri</p>
                        <p>Stonesri</p>
                      </div>
                    </div>
                  </div>
                  <div className='footerColumn' style={{paddingLeft: '1em', marginRight: '1em'}}>
                    <h4>Contact Us</h4>
                    <div>
                      <div>
                        <p><strong>SRI SHANTI AYURVEDIC</strong></p>
                        <p>Regd. Address: Berhampur, Odisha</p>
                        <p>Corp. Office Address: Yelahanka, Bangalore-560064</p>
                        <p>Contact us at:<strong> 7978358828</strong></p>
                        <p>Mail us at:<strong> srishantiayurvedic2020@gmail.com</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
                {/* <img src={finalAboutUs} alt="" className='footer'/> */}
        </div>
    </>
  )
}

export default MainPage