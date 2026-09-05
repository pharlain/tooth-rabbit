import PageHeader from '../../components/page-header/PageHeader';
import RandomPhoto from '../../components/random-photo/RandomPhoto';

const Home = () => {
  return (
    <>
      <PageHeader title="Rabbit Tooth" />
      <div className="flex flex-col text-center">
        <p className="text-md md:text-xl" style={{ fontFamily: "'Courier New', monospace", color: "#2b2a2a" }}>
          DIY Music Collective; and other abstractions
        </p>
        <br></br>
        <br></br>
        <RandomPhoto />
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