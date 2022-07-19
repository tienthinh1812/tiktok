import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const hanleFallback = () => {
        setFallback(images.noImage);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={hanleFallback} />;
});

export default Image;
