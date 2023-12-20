import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const Responsibility = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="vstack gap-3">
      <FormGroup>
        <FormLabel>High Responsibility - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highResponsibilityTraining}
          onChange={(e) =>
            handleInputChange("highResponsibilityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>High Responsibility - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highResponsibilityBehaviour}
          onChange={(e) =>
            handleInputChange("highResponsibilityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Responsibility - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageResponsibilityTraining}
          onChange={(e) =>
            handleInputChange("averageResponsibilityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Responsibility - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageResponsibilityBehaviour}
          onChange={(e) =>
            handleInputChange("averageResponsibilityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Responsibility - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowResponsibilityTraining}
          onChange={(e) =>
            handleInputChange("lowResponsibilityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Responsibility - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowResponsibilityBehavioural}
          onChange={(e) =>
            handleInputChange("lowResponsibilityBehavioural", e.target.value)
          }
        />
      </FormGroup>
    </div>
  );
};

export default Responsibility;
