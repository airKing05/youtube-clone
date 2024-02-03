import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function CommentSkeleton() {
    return (

        <div className='skeletonCardContainer col my-2 mb-4'>
            <SkeletonTheme baseColor="#343a40" highlightColor="#444">
                <div className='d-flex justify-content-between'>
                    <div className='' style={{width: '10%', minWidth: '60px'}}>
                        <Skeleton height='80%' width='90%' circle={true} />
                    </div>
                    <div className='' style={{ width: '88%' }}>
                        <Skeleton height={12} width='30%' />
                        <Skeleton height={25} width='99%' />
                        <Skeleton height={12} width='20%' />
                    </div>
                </div>
            </SkeletonTheme>
        </div>

    )
}
