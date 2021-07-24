import { Carousel } from "react-bootstrap";
const VeriCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thecommonwealth.org/sites/default/files/styles/press_release_large/public/images/hero/taj-mahal-620.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Taj Mahal</h3>
          <p>Visit Agra.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.india.gov.in/sites/upload_files/npi/files/india-glance2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lotus Temple</h3>
          <p>Visit Delhi.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default VeriCarousel;
