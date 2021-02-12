import React from 'react';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { LazyLoadImage, trackWindowScroll }
    from 'react-lazy-load-image-component';

const Gallery = (props) => {
    console.log(props.src);
    return <LazyLoadImage
        // Make sure to pass down the scrollPosition,
        // this will be used by the component to know
        // whether it must track the scroll position or not

        {...props}
        effect="opacity"
    />

};
// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default Gallery;