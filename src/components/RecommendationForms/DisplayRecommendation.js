import { Offcanvas, Stack } from "react-bootstrap";
import { getFormCategory, getFormLevel } from "../../utils/editFormTitles";

const DisplayRecommendations = ({ data, show, handleClose }) => {
  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Recommendation Policy</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <section>
          <h6 className="fw-semibold">
            HR Recommendations set by your company
          </h6>
          <Stack gap={3}>
            {Object.entries(data[0])
              .filter(
                ([key]) =>
                  key !== "_id" &&
                  key !== "createdAt" &&
                  key !== "updatedAt" &&
                  key !== "__v"
              )
              .map(([category, levels]) => (
                <fieldset
                  key={category}
                  className="rounded-0 shadow-sm border-end border-success border-5 w-100"
                >
                  <legend
                    className="mx-3 shadow-sm border-0 fs-6 rounded-0 text-capitalize fw-semibold w-50 justify-content-center d-flex align-items-center"
                    style={{ float: "none" }}
                  >
                    {getFormCategory(category)}
                  </legend>
                  {Object.entries(levels).map(([level, fields]) => (
                    <div key={level} className="p-2">
                      <details>
                        <summary>{getFormLevel(level)}</summary>
                        {Object.entries(fields).map(([field, value]) => (
                          <ul key={field}>
                            <li>
                              {field.charAt(0).toUpperCase() +
                                field.slice(1, field.length)}{" "}
                              {value}
                            </li>
                          </ul>
                        ))}
                      </details>
                    </div>
                  ))}
                </fieldset>
              ))}
          </Stack>
        </section>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default DisplayRecommendations;
