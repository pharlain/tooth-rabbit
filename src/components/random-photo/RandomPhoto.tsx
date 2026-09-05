import image0 from '../../assets/pages/Home/0.jpeg';
import image1 from '../../assets/pages/Home/1.jpeg';
import image2 from '../../assets/pages/Home/2.jpeg';
import image3 from '../../assets/pages/Home/3.jpeg';
import image4 from '../../assets/pages/Home/4.jpeg';
import image5 from '../../assets/pages/Home/5.jpeg';
import image6 from '../../assets/pages/Home/6.jpeg';
import image7 from '../../assets/pages/Home/7.jpeg';
import image8 from '../../assets/pages/Home/8.jpeg';
import image9 from '../../assets/pages/Home/9.jpeg';
import image10 from '../../assets/pages/Home/10.jpeg';
import image11 from '../../assets/pages/Home/11.jpeg';
import image12 from '../../assets/pages/Home/12.jpeg';
import image13 from '../../assets/pages/Home/13.jpeg';
import image14 from '../../assets/pages/Home/14.jpeg';
import image15 from '../../assets/pages/Home/15.jpeg';
import image16 from '../../assets/pages/Home/16.jpeg';
import image17 from '../../assets/pages/Home/17.jpeg';
import image18 from '../../assets/pages/Home/18.jpeg';


const GetRandomPhotoFromAssets = () => {
    return Math.floor(Math.random() * 18);
}

const AllPhotos = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18
]

const RandomPhoto = () => {
    return (
        <div className="flex w-full mx-auto text-center justify-center items-center">
            <img width="75%" src={AllPhotos[GetRandomPhotoFromAssets()]} alt="Random Photo" />
        </div>
    );
};

export default RandomPhoto;