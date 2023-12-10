import Auth from "../auth/auth";
import { Container } from "react-bootstrap";

const LeagueTable = () => {
  return (
    <>
      <Auth />
      <Container
        fluid
        className="col-12 d-flex justify-content-center"
        style={{ height: "fit-content" }}
      >
        <h1 fs-3 fw-bold text-center>
          League Table
        </h1>
      </Container>
    </>
  );
};

export default LeagueTable;
