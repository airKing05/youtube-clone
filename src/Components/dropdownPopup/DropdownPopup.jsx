import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LOGOUT_REQUEST } from '../../redux/constants/constants';

export default function DropdownPopup() {
    const { accessToken, user, loading } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () =>{
       await dispatch({ type: LOGOUT_REQUEST });
        //NEED TO CORRECT LOGIC HERE
        console.log("accestoken out", accessToken)
        setTimeout(() => {
            console.log("accestoken time out", accessToken)
            // const accessToken = sessionStorage.getItem('accessToken');
            if (!accessToken) {
                console.log("accestoken innnn", accessToken)
                navigate('/auth');
            }
        }, 200);
    }

    return (
        <div className='dropdown__popup rounded d-flex p-2 flex-column bg-white me-2'>
            <div className='d-flex bgColor-transparent'>
                <div className='col-4 bgColor-transparent d-flex justify-content-center align-items-center'>
                    <div className='bgColor-transparent rounded-circle d-flex' style={{
                        maxWidth: '40px',
                        maxHeight: '40px'
                    }}>
                        <LazyLoadImage
                            src={user?.photoURL}
                            effect='blur'
                            width="150%"
                            height="150%"
                            className='img-fluid'
                            alt='img'
                        />
                    </div>

                </div>
                <div className='me-2 col-8 bgColor-transparent'>
                    <h6 className='bgColor-transparent text-overflow-ell'>{user?.displayName}</h6>
                    <h6 className='bgColor-transparent text-overflow-ell'>{user?.email}</h6>
                    <Link to="#" className='bgColor-transparent text-decoration-none'>View your channel</Link>
                </div>
            </div>
            <div className='bgColor-transparent px-4 py-2 cursor__pointer' onClick={handleSignOut}>
                <span className='bgColor-transparent'>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#282828" />
                        <path fill="#ffffff" d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
                    </svg>
                </span>
                &nbsp;
                &nbsp;
                <span className='bgColor-transparent'>
                    Sign out
                </span>
            </div>
        </div>
    )
}
