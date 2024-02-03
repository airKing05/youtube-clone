import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function MainLayout(props) {
    const { children, componentName } = props;
    const [isSidebarVisible, setSidebarVisible] =  useState(()=>{
        return (componentName === 'playScreen' ? false: true)
    });


  return (
      <div className='home-container'>
          <div style={{ height: '10vh' }} className=''>
              <Navbar setSidebarVisible={setSidebarVisible}  />
          </div>
          {
              isSidebarVisible ? <div style={{ height: '90vh', overflowY: 'auto' }} className=''>
                  <Sidebar />
              </div> : null
          }
        
          <div className={`${isSidebarVisible ? 'mainContent__container' : 'mainContent__container--sidebarHidden'} position-absolute px-3`}>
              {children}
          </div>
      </div>
  )
}
