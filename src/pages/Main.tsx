import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const Container = styled.main`
  margin: 1.5rem auto;
  max-width: 800px;
`;

const Main = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Main;
