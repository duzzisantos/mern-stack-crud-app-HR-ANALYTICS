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
        <div className="col-lg-9 d-flex flex-column gap-3 py-4">
          <h1 className="fs-3 fw-bold text-center">League Table</h1>
        </div>
      </Container>
    </>
  );
};

export default LeagueTable;
