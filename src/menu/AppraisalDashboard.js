import { useState } from "react";
import { monthsArray, generateYears } from "../utils/dropDownOptions";
import { Alert, Button, Container, Form } from "react-bootstrap";
import ProgressComponent from "../components/ProgressComponent";
import HRComments from "../components/HRComments";
import EmployeeProfile from "../components/EmployeeProfile";
import PerformanceHistory from "../components/PerformanceHistory";
import { getAvailableYears } from "../utils/getChartLabels";
import useGetEmployeeAppraisal from "../http-methods/getEmployeeAppraisal";
import useGetEmployeeData from "../http-methods/getEmployeeData";
import {
  Calendar,
  CalendarMonth,
  List,
  PersonBadge,
} from "react-bootstrap-icons";
import EmployeeMenu from "../components/EmployeeMenu";

const AppraisalDashboard = ({ user }) => {
  const accessToken = user?.accessToken;
  const [search, setSearch] = useState("");
  const [selectMonth, setSelectMonth] = useState("");
  const [selectYear, setSelectYear] = useState("");
  const [graphYear, setGraphYear] = useState("");
  const [show, setShow] = useState(false);

  const getAppraisal = useGetEmployeeAppraisal(accessToken);
  const getEmployee = useGetEmployeeData(accessToken);

  const { isLoading, isError, data } = getAppraisal;

  //Error handler for two API datasets being consumed
  if (isLoading || getEmployee.isLoading) {
    return <Alert>Resources are still loading...</Alert>;
  } else if (isError || getEmployee.isError) {
    return <Alert variant="warning">Error in loading resources </Alert>;
  } else if (
    !data ||
    data === undefined ||
    getEmployee.data === undefined ||
    !getEmployee.data
  ) {
    return <Alert>Resource data is unavailable</Alert>;
  }

  const filteredEmployees = getEmployee.data.filter((element) =>
    search.match(new RegExp(`${element.ID}`)) ? element : !element
  );

  const filteredAppraisal = data.filter((element) =>
    search.match(new RegExp(`${element.ID}`)) &&
    selectMonth.match(new RegExp(`${element.month}`, "i")) &&
    selectYear.match(new RegExp(`${element.year}`, "i"))
      ? element
      : !element
  );

  const noItemsFoundYet =
    !filteredAppraisal.length && !filteredEmployees.length;

  const labels = getAvailableYears(data);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Container
        fluid
        className="py-4 d-flex flex-column gap-3 justify-content-center align-items-center"
        style={{ height: "fit-content" }}
      >
        <main className="col-sm-10 col-lg-10 col-md-10 mx-lg-auto mx-md-auto d-flex flex-column gap-3 py-4">
          <h1 className="fs-2 fw-bold text-center">Appraisal Dashboard</h1>
          <div className="d-flex flex-lg-row mx-auto justify-content-center gap-3 fw-bold flex-sm-column col-lg-10 col-sm-10 col-md-10">
            <div className="col-lg-3 col-md-10 col-sm-10">
              <Form.Label htmlFor="employee-id">
                <PersonBadge /> Employee ID
              </Form.Label>
              <Form.Control
                size="sm"
                id="employee-id"
                type="search"
                placeholder="Filter by Staff ID"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-lg-3 col-md-10 col-sm-10">
              {" "}
              <Form.Label htmlFor="employee-month">
                <CalendarMonth /> Month
              </Form.Label>
              <Form.Select
                size="sm"
                id="employee-month"
                name="selected-month"
                onChange={(e) => setSelectMonth(e.target.value)}
              >
                <option>Select</option>
                {monthsArray.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="col-lg-3 col-md-10 col-sm-10">
              <Form.Label htmlFor="employee-year">
                <Calendar /> Year
              </Form.Label>
              <Form.Select
                size="sm"
                id="employee-year"
                name="selected-year"
                onChange={(e) => setSelectYear(e.target.value)}
              >
                <option>Select</option>
                {generateYears().map((element, index) => (
                  <option key={index} value={element}>
                    {element}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>

          <div className="col-lg-1 mx-4">
            <Button
              variant="trasnsparent"
              className=" border border-secondary"
              onClick={handleShow}
            >
              <List /> Menu
            </Button>
          </div>
          <div>
            {noItemsFoundYet ? (
              <Alert variant="warning">
                Select employee ID from{" "}
                <kbd className="bg-transparent text-dark border border-secondary">
                  <List /> Menu
                </kbd>
                {". "}
                Search for employees by their correct ID. Either that or ensure
                that the employee ID, year and month values are correct.
              </Alert>
            ) : (
              <>
                <div
                  id="dashboard-wrapper"
                  className="col-lg-12 col-md-10 d-flex flex-lg-column gap-3 flex-sm-column p-4 mx-md-auto"
                >
                  {filteredAppraisal.map((item, index) => {
                    const {
                      quantityOfWork,
                      qualityOfWork,
                      delivery,
                      responsibility,
                      punctuality,
                    } = item;
                    return (
                      <ProgressComponent
                        key={index}
                        quantityOfWork={quantityOfWork}
                        qualityOfWork={qualityOfWork}
                        delivery={delivery}
                        responsibility={responsibility}
                        punctuality={punctuality}
                      />
                    );
                  })}
                  {filteredAppraisal.map((item, i) => (
                    <HRComments
                      key={i}
                      hrComments={item.hrComment}
                      superVisorComments={item.supervisorComment}
                    />
                  ))}
                  <EmployeeProfile employee={filteredEmployees} />
                </div>
                <div
                  className="shadow-sm py-2 mt-5"
                  style={{ height: "fit-content" }}
                >
                  <PerformanceHistory
                    years={labels}
                    chartData={data}
                    employeeId={search}
                    graphYear={graphYear}
                    setGraphYear={(e) => setGraphYear(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </main>

        {show && (
          <EmployeeMenu
            show={show}
            data={getEmployee.data}
            handleClose={handleClose}
          />
        )}
      </Container>
    </>
  );
};

export default AppraisalDashboard;
