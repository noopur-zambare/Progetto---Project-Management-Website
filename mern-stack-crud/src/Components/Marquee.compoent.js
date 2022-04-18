import Marquee from "react-easy-marquee";
import me from './me.jpg';
const Example = () => {
  const images = [me, ];

  return (
    <div>
      <Marquee duration={50000} background="#fafafa" height="250px">
        <h1>Progetto!</h1>

        {images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
    </div>
  );
};

export default Example;