import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HomeSkeletonCard from '../Components/skeletons/HomeSkeletonCard'
import { useDispatch, useSelector } from 'react-redux'
import { GET_SUBSCRIPTIONS } from '../redux/constants/constants'
import ChannelHorizontalCard from '../Components/channel/ChannelHorizontalCard';

export default function Subscriptions() {
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);
    const { subscriptionsOfAuthUser , loading, error} = useSelector(state => state.subscriptions)

    useEffect(()=>{
        if (accessToken){
            dispatch({ type: GET_SUBSCRIPTIONS, payload: accessToken })
        }
    }, [accessToken])

    return (
        <div className='home-container '>
            <div style={{ height: '10vh' }} className=''>
                <Navbar />
            </div>
            <div style={{ height: '90vh', overflowY: 'auto' }} className=''>
                <Sidebar />
            </div>
            <div className='home-video-container searchPage__container position-absolute px-3'>
                {
                    loading ? [...Array(20)].map((_, index) => <React.Fragment key={index}> <HomeSkeletonCard view="lg"/> </React.Fragment>)
                    : 
                        subscriptionsOfAuthUser.map((subscription)=> {
                            return <React.Fragment key={subscription.id}>
                                <ChannelHorizontalCard channelResults={subscription} viewFor="subscription" />
                            </React.Fragment>
                        })
                }
              
            </div>
        </div>
    )
}
