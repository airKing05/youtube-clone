import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function HomeSkeletonCard(props) {
    const { view } = props;
    return (
        <div className={`${view === 'lg' ? 'skeletonCardContainer col' : 'col-md-3'} my-2 mb-4`}>
            <SkeletonTheme baseColor="#343a40" highlightColor="#444">
            {
                view !== 'lg' ? <Skeleton height={120} width='100%' /> : null
            }
                <div className='row'>
                    <div className={view === 'lg' ? 'col-4' : 'col-3'}>
                        <Skeleton height={view === 'lg' ? 160 : 48} className={view !== 'lg' ? 'rounded-circle' : ''} width={view === 'lg' ? '106%' : '100%'} />
                    </div>
                    <div className={view === 'lg' ? 'col-8' : 'col-9'}>
                        <Skeleton height={view === 'lg' ? 36 : 20} width='100%' />
                        {
                            view === 'lg' ? <>
                                <Skeleton height={36} width='40%' />
                                <Skeleton height={46} width='60%' />
                            </> : null
                        }
                        <Skeleton height={view === 'lg' ? 30 : 26} width='90%' />
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    )
}
