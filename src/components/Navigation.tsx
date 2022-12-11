import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const menus = [
  { url: "/", name: "전체보기" },
  { url: "/business", name: "비즈니스" },
  { url: "/entertainment", name: "엔터테인먼트" },
  { url: "/health", name: "건강" },
  { url: "/science", name: "과학" },
  { url: "/sports", name: "스포츠" },
  { url: "/technology", name: "기술" },
];

const activeStyle: CSSProperties = {
  color: "green",
};

const Container = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Navigation = () => {
  return (
    <Container>
      {menus.map((menu) => (
        <li key={menu.url}>
          <NavLink
            to={menu.url}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {menu.name}
          </NavLink>
        </li>
      ))}
    </Container>
  );
};

export default Navigation;
