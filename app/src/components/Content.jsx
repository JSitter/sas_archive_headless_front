import React, {lazy, Suspense } from 'react';
import LoadingTeaserContent from './LoadingTeaserContent.jsx';

const MostPopularTeaser = lazy(() => import('./MostPopularTeaser.jsx'));

export default function Content() {
    return (
        <section className="main-content">
            <Suspense fallback={LoadingTeaserContent}>
                <MostPopularTeaser />
            </Suspense>
        </section>
    )
}
