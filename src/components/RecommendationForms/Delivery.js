import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const Delivery = ({ formData, setFormData }) => {
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="vstack gap-3">
      <FormGroup>
        <FormLabel>High Delivery - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highDeliveryTraining}
          onChange={(e) =>
            handleInputChange("highDeliveryTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>High Delivery - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.highDeliveryBehaviour}
          onChange={(e) =>
            handleInputChange("highDeliveryBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Delivery - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageDeliveryTraining}
          onChange={(e) =>
            handleInputChange("averageDeliveryTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Average Delivery - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.averageDeliveryBehaviour}
          onChange={(e) =>
            handleInputChange("averageDeliveryBehaviour", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Delivery - Training</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowDeliveryTraining}
          onChange={(e) =>
            handleInputChange("lowDeliveryTraining", e.target.value)
          }
        />
      </FormGroup>

      <FormGroup>
        <FormLabel>Low Delivery - Behavioural</FormLabel>
        <FormControl
          as={"textarea"}
          rows={4}
          type="text"
          value={formData.lowDeliveryBehavioural}
          onChange={(e) =>
            handleInputChange("lowDeliveryBehavioural", e.target.value)
          }
        />
      </FormGroup>
    </div>
  );
};

export default Delivery;
