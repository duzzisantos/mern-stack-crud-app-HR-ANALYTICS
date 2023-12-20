import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import QualityOfWork from "./QualityOfWork";
import QuantityOfWork from "./QuantityOfWork";
import Responsibility from "./Responsibility";
import Punctuality from "./Punctuality";
import Delivery from "./Delivery";
import Auth from "../../auth/auth";

const RecommendationForm = () => {
  const [quality, setQuality] = useState({
    highQualityOfWorkTraining: "",
    highQualityOfWorkBehavioural: "",
    averageQualityTraining: "",
    averageQualityBehaviour: "",
    lowQualityTraining: "",
    lowQualityBehavioural: "",
  });

  const [quantity, setQuantity] = useState({
    highQuantityTraining: "",
    highQuantityBehaviour: "",
    averageQuantityTraining: "",
    averageQuantityBehaviour: "",
    lowQuantityTraining: "",
    lowQuantityBehavioural: "",
  });

  const [delivery, setDelivery] = useState({
    highDeliveryTraining: "",
    highDeliveryBehaviour: "",
    averageDeliveryTraining: "",
    averageDeliveryBehaviour: "",
    lowDeliveryTraining: "",
    lowDeliveryBehavioural: "",
  });

  const [responsibility, setResponsibility] = useState({
    highResponsibilityTraining: "",
    highResponsibilityBehaviour: "",
    averageResponsibilityTraining: "",
    averageResponsibilityBehaviour: "",
    lowResponsibilityTraining: "",
    lowResponsibilityBehavioural: "",
  });

  const [punctuality, setPunctuality] = useState({
    highPunctualityTraining: "",
    highPunctualityBehaviour: "",
    averagePunctualityTraining: "",
    averagePunctualityBehaviour: "",
    lowPunctualityTraining: "",
    lowPunctualityBehavioural: "",
  });

  const handleSubmit = () => {
    console.log("That works");
  };
  return (
    <>
      <Auth />
      <Container className="col-12 col-md-10">
        <h1 className="fs-2 text-center mt-3 fw-bold">
          Recommendation Questionnaire
        </h1>
        <div className="d-flex justify-content-center mt-3 p-3">
          <Form id="carousel-form" onSubmit={handleSubmit} className="col-9">
            <Carousel
              slide={false}
              text="Quality of work"
              className="px-5"
              controls="as button"
              variant="dark"
            >
              <CarouselItem className="p-5" interval={300000}>
                <h2 className="fs-5 fw-bold">Quality of work</h2>
                <QualityOfWork formData={quality} setFormData={setQuality} />
              </CarouselItem>
              <CarouselItem className="p-5" interval={300000}>
                <h2 className="fs-5 fw-bold">Quantity of work</h2>
                <QuantityOfWork formData={quantity} setFormData={setQuantity} />
              </CarouselItem>
              <CarouselItem className="p-5" interval={300000}>
                <h2 className="fs-5 fw-bold">Responsibility</h2>
                <Responsibility
                  formData={responsibility}
                  setFormData={setResponsibility}
                />
              </CarouselItem>
              <CarouselItem className="p-5" interval={300000}>
                <h2 className="fs-5 fw-bold">Punctuality</h2>
                <Punctuality
                  formData={punctuality}
                  setFormData={setPunctuality}
                />
              </CarouselItem>
              <CarouselItem className="p-5" interval={300000}>
                <h2 className="fs-5 fw-bold">Delivery</h2>
                <Delivery formData={delivery} setFormData={setDelivery} />
                <Button
                  variant="success"
                  type="submit"
                  className="my-3"
                  interval={300000}
                >
                  Submit Questionnaire
                </Button>
              </CarouselItem>
            </Carousel>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default RecommendationForm;
