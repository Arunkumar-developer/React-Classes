import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"

function Arun() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Landscape_l_400_640.jpg" class="image" text="First slide" />
        <Carousel.Caption>
          <h1>Manali</h1>
          <h4>Manali is the perfect escape for romance-seekers. You will love the waterfalls and adventure sports. Additionally, you can try out various adventure activities at Manali.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg" class="image"  text="Second slide" />
        <Carousel.Caption>
          <h1>Goa</h1>
          <h4>Rev up your spirits with the stunning adventures of Goa. You can expect heavy rainfall throughout the season, pleasant sea breeze. Humidity tends to be high. You can also sample delicious cuisines at Goa.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://hblimg.mmtcdn.com/content/hubble/img/chikmangalur/mmt/destination/m_destination-chikmagalur-landscape_l_400_640.jpg" class="image"  text="Third slide" />
        <Carousel.Caption>
          <h1>Chikmagalur</h1>
          <h4>A hill station at the foothills of the Mullayanagiri peak in the Western Ghats in Karnataka, Chikmagalur entices with trekking trails, coffee plantations, rivers, waterfalls, temples and wildlife.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Arun;