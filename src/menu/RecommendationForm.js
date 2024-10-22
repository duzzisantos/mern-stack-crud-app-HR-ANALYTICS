import { useEffect, useState } from "react";
import http from "../components/http-config";

import {
  Form,
  Button,
  Container,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import { getFormLevel, getFormCategory } from "../utils/editFormTitles";
import useRecommendation from "../http-methods/getRecommendations";
import DisplayRecommendations from "../components/RecommendationForms/DisplayRecommendation";
import { List } from "react-bootstrap-icons";

const RecommendationForm = ({ user }) => {
  const [index, setIndex] = useState(0);
  const [showoffCanvas, setShowoffCanvas] = useState(false);
  const { recommendations } = useRecommendation(user?.accessToken);

  //Improves UX for the carousel form - so that user is automatically scrolled to the
  //submit button on the last index of the carousel

  useEffect(() => {
    let lastIndex = 5;
    if (index + 1 <= lastIndex) {
      window.scrollTo(0, document.body.scrollTop);
    }
  }, [index]);

  // State to hold form data
  const [formData, setFormData] = useState({
    qualityOfWork: {
      highQuality: {
        training: "",
        behavioural: "",
      },
      averageQuality: {
        training: "",
        behavioural: "",
      },
      lowQuality: {
        training: "",
        behavioural: "",
      },
    },
    quantityOfWork: {
      highQuantity: {
        training: "",
        behavioural: "",
      },
      averageQuantity: {
        training: "",
        behavioural: "",
      },
      lowQuantity: {
        training: "",
        behavioural: "",
      },
    },
    delivery: {
      highDelivery: {
        training: "",
        behavioural: "",
      },
      averageDelivery: {
        training: "",
        behavioural: "",
      },
      lowDelivery: {
        training: "",
        behavioural: "",
      },
    },
    responsibility: {
      highResponsibility: {
        training: "",
        behavioural: "",
      },
      averageResponsibility: {
        training: "",
        behavioural: "",
      },
      lowResponsibility: {
        training: "",
        behavioural: "",
      },
    },
    punctuality: {
      highPunctuality: {
        training: "",
        behavioural: "",
      },
      averagePunctuality: {
        training: "",
        behavioural: "",
      },
      lowPunctuality: {
        training: "",
        behavioural: "",
      },
    },
  });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleClose = () => {
    setShowoffCanvas(false);
  };

  const handleShowOffcanvas = () => {
    setShowoffCanvas(true);
  };

  // Handler function to update form data
  const handleInputChange = (category, level, field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        [level]: {
          ...prevFormData[category][level],
          [field]: value,
        },
      },
    }));
  };

  //Check if local or production
  const isLocal = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  const handleSubmit = async () => {
    const { post, recommendationURL, recommendationURLServer, headers } = http;
    post(
      isLocal ? recommendationURL : isProduction && recommendationURLServer,
      JSON.stringify(formData),
      headers(user?.accessToken)
    );
  };

  return (
    <>
      <Container
        fluid
        className="text-primary-emphasis py-4 d-flex flex-column gap-3 col-sm-10 col-lg-12 col-md-10 mx-lg-auto mx-md-auto"
      >
        <h1 className="fs-2 text-center mt-3 fw-bold h-one-spaced">
          Recommendation Policy
        </h1>

        <div className="col-lg-6 col-sm-12 col-md-10 mx-auto p-2 my-2 shadow-sm border-5 border-start border-info">
          <h2 className="fs-5 fw-bold">Tips</h2>
          <article>
            If you want to provide multiple recommendations per field, make sure
            to separate them by commas. Note, this is HR management policy. Fill
            it diligently.
          </article>
        </div>

        <Form
          id="carousel-form"
          onSubmit={handleSubmit}
          className="col-lg-8 col-md-8 col-sm-12  mx-auto"
        >
          <Button
            variant="transparent"
            className="border border-secondary my-3"
            onClick={handleShowOffcanvas}
            title="View HR Recommendation Policy"
          >
            <List /> Read
          </Button>
          <Carousel
            id="carousel-slide-recommendation-form"
            slide={false}
            text="Quality of work"
            className="border border-1 shadow-sm rounded-2"
            controls="as button"
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
          >
            {Object.entries(formData).map(([category, levels]) => (
              <CarouselItem key={category} interval={300000}>
                <div className="d-flex justify-content-between p-5">
                  <h2 className="fs-5 fw-bold text-capitalize text-center">
                    {getFormCategory(category)}
                  </h2>
                  <small>
                    {index + 1} of {Object.entries(formData).length}
                  </small>
                </div>

                {Object.entries(levels).map(([level, fields]) => (
                  <div key={level} className="p-5">
                    <h4 className="text-capitalize fs-6 fw-bold">
                      {getFormLevel(level)}
                    </h4>
                    {Object.entries(fields).map(([field, value]) => (
                      <div
                        key={field}
                        className="col-lg-9 col-md-9 col-sm-10 mx-auto"
                      >
                        <Form.Label
                          className="text-capitalize"
                          htmlFor={`${category}-${level}-${field}`}
                        >
                          {field}
                        </Form.Label>
                        <Form.Control
                          required
                          id={`${category}-${level}-${field}`}
                          as={"textarea"}
                          name={value}
                          rows={4}
                          type="text"
                          value={value}
                          onChange={(e) =>
                            handleInputChange(
                              category,
                              level,
                              field,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    ))}
                  </div>
                ))}
                <div className="d-flex justify-content-end pe-5 pb-3">
                  <small>
                    {index + 1} of {Object.entries(formData).length}
                  </small>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
          <Button variant="success" type="submit" className="my-3">
            Submit Questionnaire
          </Button>
        </Form>

        {showoffCanvas && (
          <DisplayRecommendations
            show={showoffCanvas}
            handleClose={handleClose}
            data={recommendations}
          />
        )}
      </Container>
    </>
  );
};

export default RecommendationForm;
