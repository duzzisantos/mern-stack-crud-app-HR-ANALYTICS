import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const Punctuality = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="vstack gap-3">
      <FormGroup>
        <FormLabel>High Punctuality - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highPunctualityTraining}
          onChange={(e) =>
            handleInputChange("highPunctualityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>High Punctuality - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highPunctualityBehaviour}
          onChange={(e) =>
            handleInputChange("highPunctualityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Punctuality - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averagePunctualityTraining}
          onChange={(e) =>
            handleInputChange("averagePunctualityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Punctuality - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averagePunctualityBehaviour}
          onChange={(e) =>
            handleInputChange("averagePunctualityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Punctuality - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowPunctualityTraining}
          onChange={(e) =>
            handleInputChange("lowPunctualityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Punctuality - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowPunctualityBehavioural}
          onChange={(e) =>
            handleInputChange("lowPunctualityBehavioural", e.target.value)
          }
        />
      </FormGroup>
    </div>
  );
};

export default Punctuality;
