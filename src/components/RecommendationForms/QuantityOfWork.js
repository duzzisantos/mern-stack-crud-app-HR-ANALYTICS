import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const QuantityOfWork = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="vstack gap-3">
      <FormGroup>
        <FormLabel>High Quantity - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highQuantityTraining}
          onChange={(e) =>
            handleInputChange("highQuantityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>High Quantity - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highQuantityBehaviour}
          onChange={(e) =>
            handleInputChange("highQuantityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Quantity - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageQuantityTraining}
          onChange={(e) =>
            handleInputChange("averageQuantityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Quantity - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageQuantityBehaviour}
          onChange={(e) =>
            handleInputChange("averageQuantityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Quantity - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowQuantityTraining}
          onChange={(e) =>
            handleInputChange("lowQuantityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Quantity - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowQuantityBehavioural}
          onChange={(e) =>
            handleInputChange("lowQuantityBehavioural", e.target.value)
          }
        />
      </FormGroup>
    </div>
  );
};

export default QuantityOfWork;
