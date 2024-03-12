import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

export default function MainLayout(props) {
    const { children, componentName } = props;
    const [isSidebarVisible, setSidebarVisible] =  useState(()=>{
        return (componentName === 'playScreen' ? false: true)
    });


  return (
      <div className='main_layout__container'>
          <div style={{ height: '10vh' }} className=''>
              <Navbar setSidebarVisible={setSidebarVisible}  />
          </div>
          {
              isSidebarVisible ? <div style={{ height: '90vh', overflowY: 'auto' }} className=''>
                  <Sidebar />
              </div> : null
          }
        
          <div className={`${isSidebarVisible ? 'mainContent__container' : 'mainContent__container--sidebarHidden'} position-absolute px-2 pe-0 mx-2`}>
              {children}
          </div>
      </div>
  )
}
