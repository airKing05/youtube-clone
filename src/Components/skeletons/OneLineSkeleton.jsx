import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function OneLineSkeleton() {
  return (
    <div className='w-100'>
          <SkeletonTheme baseColor="#343a40" highlightColor="#444">
              <Skeleton height={20} width='100%' />
          </SkeletonTheme>
    </div>
  )
}


