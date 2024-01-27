import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function HomeSkeletonCard() {
    return (
        <div className='col my-2 skeletonCardContainer'>
            <SkeletonTheme baseColor="#343a40" highlightColor="#444">
                <Skeleton height={120} width='100%'/>
                <div className='row'>
                    <div className='col-3'>
                        <Skeleton circle height={45} width={45} />
                    </div>
                    <div className='col-9'>
                        <Skeleton height={22} width='100%' />
                        <Skeleton height={15} width='100%' />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}
