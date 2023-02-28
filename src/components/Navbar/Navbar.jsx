import React from 'react';
import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');
</style>

const props = {
    items: [
      {
        text: 'Home',
        link: '/home'
        
      },
      {
        text: 'Pricing',
        link: '/pricing'
      },
      {
        text: 'Career',
        link: '/career'
      },
      {
        text: 'Sign in',
        link: '/signin'
      }
    ],
    logo: {
      text: 'LAUNDRY'
    },
    // float: true,
    style: {
      barStyles: {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        "boxs-hadow": "0px 2px 48px #0000000F",
        opacity: "1"
      },
      linkStyles: {
        color: '#565657',
        "font-size": '14px',
        "margin-right": "10px",
        "letter-spacing": "1.05px",
        "border-left": "1px solid #B9C0FD1A",
        "border-right": "1px solid #B9C0FD1A",
        "padding": "24px",
      },
      logoStyles: {
        "font-size": '20px',
        "font-weight": "bolder",
        "fontfamily": "Tilt Neon",
        color: '#5861AE',
        margin: '100%',
        "letter-spacing": "1.8px",
        "text-transform": "uppercase",
        "opacity": "1"
      },
      sidebarStyles: {
        background: '#FFFFFF',
        buttonColor: '#5861AE',
      }
    }
  }

const NavbarComponent = () => {

  return (
    <div>
    	<Navbar {...props}/>
    </div>
  )
}

export default NavbarComponent;