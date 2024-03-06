import { ImageBox } from '@/components/ImageBox';
import st from './index.module.scss';

export const ImageList = () => {
    const images = [
        { url: 'URL_1', alt: 'Alt Text 1', ranking: 1 },
        { url: 'URL_2', alt: 'Alt Text 2', ranking: 2 },
        { url: 'URL_3', alt: 'Alt Text 3', ranking: 3 },
        { url: 'URL_4', alt: 'Alt Text 4', ranking: 4 },
        { url: 'URL_5', alt: 'Alt Text 5', ranking: 5 },
    ];

    return (
        <div className={st.container}>
            {images.map((image, index) => (
                <ImageBox
                    key={index}
                    imgUrl={image.url}
                    altText={image.alt}
                    ranking={image.ranking}
                />
            ))}
        </div>
    );
};
