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

const Container = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const MenuLink = styled(NavLink)`
  font-size: 1.1rem;
  font-weight: 600;

  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  &.active {
    border-bottom: 2px solid #22b9cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;

const Navigation = () => {
  return (
    <Container>
      {menus.map((menu) => (
        <li key={menu.url}>
          <MenuLink to={menu.url}>{menu.name}</MenuLink>
        </li>
      ))}
    </Container>
  );
};

export default Navigation;
