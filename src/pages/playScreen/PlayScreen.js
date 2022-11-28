import React from 'react'
import Comments from '../../Components/comments/Comments'
import Navbar from '../../Components/Navbar'
import VideoCardHorizonatal from '../../Components/videoCards/VideoCardHorizonatal'
import VideoMetaData from '../../Components/videoMetaData/VideoMetaData'

export default function PlayScreen() {
    return (
        <div>
            <Navbar />
            <div className='m-4'>
                <div className='row m-2'>
                    <div className='col-md-8 border p-0'>
                        <div className=''>
                            <iframe
                                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                                width="100%" 
                                height="100%"
                                allowFullScreen
                                frameBorder='0'
                                title="MY FIrst video in youtube creation" >
                            </iframe>
                        </div>
                        <VideoMetaData/>
                        <Comments/>
                    </div>
                    <div className='col-md-4 p-4 border p-0'>
                        {
                            [...Array(20)].map(() => <VideoCardHorizonatal/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
