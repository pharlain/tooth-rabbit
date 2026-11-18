import { useEffect, useState } from 'react';
import PageHeader from '../../components/page-header/PageHeader';
import { getPhotos, type Photo } from '../../data/getGalleryPhotos';

const Gallery = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getPhotos()
            .then(setPhotos)
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <PageHeader title="Gallery" />
            {loading && <p>Loading…</p>}
            {error && <p>Couldn't load photos.</p>}

            <ul
                className="list-none p-0 m-0 max-w-2xl mx-auto"
                style={{ background: '#fff' }}
            >
                {photos.map((photo) => (
                    <li
                        key={photo.id}
                        style={{ background: '#fff', paddingBottom: 32 }}
                    >
                        <img
                            src={photo.src}
                            srcSet={photo.srcSet}
                            sizes="(min-width: 672px) 672px, 100vw"
                            alt=""
                            loading="lazy"
                            className="w-full h-auto block"
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Gallery