import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const QualityOfWork = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="vstack gap-3">
      <FormGroup>
        <FormLabel>High Quality - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highQualityOfWorkTraining}
          onChange={(e) =>
            handleInputChange("highQualityOfWorkTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>High Quality - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highQualityOfWorkBehavioural}
          onChange={(e) =>
            handleInputChange("highQualityOfWorkBehavioural", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Quality - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageQualityTraining}
          onChange={(e) =>
            handleInputChange("averageQualityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Quality - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageQualityBehaviour}
          onChange={(e) =>
            handleInputChange("averageQualityBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Quality - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowQualityTraining}
          onChange={(e) =>
            handleInputChange("lowQualityTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Quality - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowQualityBehavioural}
          onChange={(e) =>
            handleInputChange("lowQualityBehavioural", e.target.value)
          }
        />
      </FormGroup>
    </div>
  );
};

export default QualityOfWork;
