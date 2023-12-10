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
      ></Container>
    </>
  );
};
