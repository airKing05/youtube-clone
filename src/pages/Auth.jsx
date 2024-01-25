import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.js';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_LOGIN, LOAD_USER_DATA, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from '../redux/constants/constants.js';



export default function Auth() {
    const { accessToken, loading, user: userData } = useSelector((state) => state.auth);
    
    // const [isLoggedIn, setIsLoggedIn] = useState(() => accessToken ? true : false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const signInWithGoogle = async () => {
    //     dispatch({ type: LOGIN_REQUEST })
    //     const provider = new GoogleAuthProvider()

    //     try {
    //         const result = await signInWithPopup(auth, provider)
    //         const credential = GoogleAuthProvider.credentialFromResult(result);

    //         const token = credential.accessToken;
    //         dispatch({ type: LOGIN_SUCCESS, payload: token })
    //         sessionStorage.setItem('accessToken', token);

    //         const user = result.user;
    //         dispatch({ type: LOAD_USER_DATA, payload: user })
    //         sessionStorage.setItem('userData', JSON.stringify(user));

    //         setIsLoggedIn(true);
    //         setUserData(user);
    //         navigate('/');
    //         console.log("user", user, token)

    //     } catch (error) {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = provider.credentialFromError(error);
    //         dispatch({ type: LOGIN_FAIL, payload: errorMessage })

    //         console.log("Error:", error)
    //     }

    //     // signInWithPopup(auth, provider)
    //     //     .then((result) => {
    //     //         // This gives you a Google Access Token. You can use it to access the Google API.
    //     //         const credential = GoogleAuthProvider.credentialFromResult(result);
    //     //         const token = credential.accessToken;
    //     //         dispatch({ type: LOGIN_SUCCESS, payload: token })
    //     //         sessionStorage.setItem('accessToken', token);
    //     //         // The signed-in user info.
    //     //         const user = result.user;
    //     //         dispatch({ type: LOAD_USER_DATA, payload: user })
    //     //         sessionStorage.setItem('userData', JSON.stringify(user));
    //     //         setIsLoggedIn(true);
    //     //         setUserData(user);
    //     //         navigate('/');
    //     //         // IdP data available using getAdditionalUserInfo(result)
    //     //         console.log("user", user, token)
    //     //     }).catch((error) => {
    //     //         // Handle Errors here.
    //     //         const errorCode = error.code;
    //     //         const errorMessage = error.message;
    //     //         // The email of the user's account used.
    //     //         const email = error.customData.email;
    //     //         // The AuthCredential type that was used.
    //     //         const credential = provider.credentialFromError(error);
    //     //         dispatch({ type: LOGIN_FAIL, payload: errorMessage })

    //     //         console.log("Error:", error)
    //     //     });

    // }

    // const signOutFromGoogle = () => {
    //     signOut(auth).then(() => {
    //         setIsLoggedIn(false);
    //         setUserData(null);
    //     }).catch((error) => {
    //         console.log("Error:", error)
    //     });
    // }


    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, result => {
    //         if(result){
    //             setIsLoggedIn(true);
    //             setUserData(result);

    //         }else{
    //             setIsLoggedIn(false);
    //         }
    //     });

    //     return () => unsubscribe();
    // }, [])

    useEffect(() => {
        if (!loading && accessToken){
            navigate('/')
        }
    }, [accessToken, navigate])


    const handelLogin = () => {
        // signInWithGoogle();
        dispatch({type: GET_LOGIN})
    }
    const handelLogOut = () => {
        // signOutFromGoogle();
        dispatch({ type: LOGOUT_REQUEST })
    }

    return (
        <div className='container d-flex justify-content-center align-items-center flex-column rounded'>
            {
                !accessToken ?
                    <>
                        <div className='text-center mt-5'>
                            <img
                                className=''
                                width="200"
                                height="200"
                                src='https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png' alt='img' />
                            <h2 className='text-center'>Welcome the youtube clone</h2>
                            <button
                                className='border-2 bg-white rounded text-black p-2'
                                onClick={handelLogin}>Login with Google</button>
                        </div>
                    </> : <>
                        <div className='text-center mt-5'>
                            <img
                                className=''
                                width="300"
                                height="300"
                                src={userData?.photoURL}
                                alt='img'
                            />
                            <h3 className='text-center'>{userData?.displayName}</h3>
                            <button
                                className='border-2 bg-white rounded text-black p-2'
                                onClick={handelLogOut}>Logout</button>
                        </div>
                    </>
            }

        </div>
    )
}
