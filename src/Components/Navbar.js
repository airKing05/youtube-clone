import React from 'react';
import { Link} from 'react-router-dom';
import { UilSearch, UilYoutube, UilBars, UilTimes, UilMicrophone, UilVideo, UilBell } from '@iconscout/react-unicons';

export default function Navbar() {
    return (
        <nav className='position-sticky navabar d-flex justify-content-between align-items-center' style={{height: '35px', padding: '30px'}}>
            <div className=' d-flex align-items-center'>
                <div>
                    <UilBars color="#717171" size={30} />
                </div>
                <Link to="/" className='text-decoration-none'>
                <div className='d-flex mx-4  align-items-center '>
                    <UilYoutube color="red" size={30}/>
                    <span className='px-1  text-white fs-4 fw-bolder'>YouTube</span>
                </div>
               </Link>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <div className='d-flex align-items-center p-0' style={{ width: '400px' }}>
                    <div className='d-flex align-items-center pr-4 nav__input'>
                        <div >
                            <UilSearch/>
                        </div>
                        <input type="text" className="border-0 input-data" />
                        <UilTimes />
                    </div>
                    <button className='d-flex justify-content-center align-items-center py-2 px-3 nav__search__btn'>
                        <UilSearch className="bg-transparent"/>
                    </button>
                </div>
                <div className='bg-dark bg-gradient p-2 m-0 rounded-circle'>
                    <UilMicrophone style={{ backgroundColor: 'transparent'}}/>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center gap-4'>
                <UilVideo/>
                <div className='d-flex align-items-center position-relative mx-3'>
                    <UilBell />
                    <span className='position-absolute bg-danger  border rounded-circle' style={{top: '-11px', left: '16px', padding: '1px 3px'}}>9+</span>
                </div>
                <div className='border py-2 px-3 rounded-circle ' style={{maxWidht: '30px'}}>
                    {/* <img src='https://wallpaperaccess.com/full/84977.png'
                      alt='logo'
                      className='w-auto'
                        style={{ widht: '100%' }}
                    /> */}
                    A
                </div>
            </div>
        </nav>
       
    )
}



{/* <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid mx-2">
                <NavLink className="navbar-brand d-flex align-items-center  gap-3" to="/">
                    <UilBars color="#717171" size={40} className="fw-6" />
                    <div className='d-flex align-items-center '>
                        <UilYoutube color='red' size={40} />
                        <span className='fw-bolder fs-4 text-white'>YouTube <span className='position-absolute fw-6 fs-6 text-muted'>IN</span></span>
                    </div>
                   
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='navbar-nav ms-auto border border-primary d-flex align-items-center justify-content-center ' >
                        <div className='nav__input'>
                            <input placeholder='Search' className='border-0 text-white' />
                        </div>
                        <div><UilSearch color="white" size={20} /></div>
                    </div>
                    <ul class="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/">Search <UilSearch size={18} /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favourites">Favourites <UilHeartAlt size={18} /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/stats">Stats <UilEstate size={18} /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */}