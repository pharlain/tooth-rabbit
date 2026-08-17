import image from '../../assets/we-are-rabbit-tooth.jpg';
import PageHeader from '../../components/page-header/PageHeader';

const Home = () => {
  return (
    <>
      <PageHeader title="Rabbit Tooth" />
      <div className="text-center">
        <p className="text-xl">
          We are a 4 piece from Belfast. Go Wildcats.
        </p>
        <div className="w-[50%] h-auto mx-auto">
          <img src={image} alt="We are Rabbit Tooth" className="mx-auto" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      Secret.
    </>
  );
}

export default Home;