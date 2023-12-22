import { useEffect, useState } from "react";
import http from "../components/http-config";

import {
  Form,
  Button,
  Container,
  Carousel,
  CarouselItem,
  Alert,
} from "react-bootstrap";
import { getFormLevel, getFormCategory } from "../utils/editFormTitles";
import useRecommendation from "../http-methods/getRecommendations";
import DisplayRecommendations from "../components/RecommendationForms/DisplayRecommendation";
import { List } from "react-bootstrap-icons";

const RecommendationForm = ({ user }) => {
  const [accessToken, setAccessToken] = useState("");
  const [index, setIndex] = useState(0);
  const [showoffCanvas, setShowoffCanvas] = useState(false);
  const getRecommendations = useRecommendation(accessToken);

  //Obtain and use access token
  useEffect(() => {
    if (user) {
      user.getIdToken().then((token) => setAccessToken(token));
    }
  });

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

  const handleSubmit = async () => {
    const { post, recommendationURL } = http;
    post(recommendationURL, JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const { isLoading, isError, data } = getRecommendations;

  //Error handler for two API datasets being consumed
  if (isLoading) {
    return <Alert>Resources are still loading...</Alert>;
  } else if (isError) {
    return <Alert variant="warning">Error in loading resources </Alert>;
  } else if (!data || data === undefined) {
    return <Alert>Resource data is unavailable</Alert>;
  }

  return (
    <>
      <Container className="col-12 col-md-10 d-flex">
        <main className="col-12">
          <h1 className="fs-2 text-center mt-3 fw-bold">
            Recommendation Policy
          </h1>
          <div className="d-flex justify-content-center">
            <div className="col-6 p-2 my-3 shadow-sm border-5 border-start border-info">
              <h2 className="fs-5 fw-bold">Tips</h2>
              <p>
                If you want to provide multiple recommendations per field, make
                sure to separate them by commas. Note, this is HR management
                policy. Fill it diligently.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3 p-3">
            <Form id="carousel-form" onSubmit={handleSubmit} className="col-9">
              <Carousel
                id="carousel-slide-recommendation-form"
                slide={false}
                text="Quality of work"
                className="p-5 border border-1 shadow-sm rounded-2"
                controls="as button"
                variant="dark"
                activeIndex={index}
                onSelect={handleSelect}
              >
                {Object.entries(formData).map(([category, levels]) => (
                  <CarouselItem key={category} interval={300000}>
                    <div className="d-flex justify-content-between">
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
                          <div key={field}>
                            <Form.Label
                              className="text-capitalize"
                              htmlFor={`${category}-${level}-${field}`}
                            >
                              {field}
                            </Form.Label>
                            <Form.Control
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
                    <div className="d-flex justify-content-end">
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
          </div>
          {showoffCanvas && (
            <DisplayRecommendations
              show={showoffCanvas}
              handleClose={handleClose}
              data={data}
            />
          )}
        </main>
        <div className="col-1 mt-3 mx-0">
          <Button
            variant="transparent"
            className="border border-secondary"
            onClick={handleShowOffcanvas}
            title="View HR Recommendation Policy"
          >
            <List /> Read
          </Button>
        </div>
      </Container>
    </>
  );
};

export default RecommendationForm;
