import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";

const StyledNav = styled.nav`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const NavLink = styled(Link)`
  width: 100%;
  color: #6b7280;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #f7fafc;
    outline: 0;
    color: #2a4365;
  }

  &.active {
    background-color: #ebf8ff;
    color: #2a4365;
  }
`;

const DesktopMenuContainer = styled(Container)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content));
  align-items: center;
  height: 4rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const DesktopMenu: React.FC = () => {
  const location = useLocation();

  return (
    <DesktopMenuContainer>
      {ROUTES.map(({ name, to }) => (
        <NavLink key={name} className={location.pathname === to ? "active" : ""} to={to}>
          {name}
        </NavLink>
      ))}
    </DesktopMenuContainer>
  );
};

const MobileMenuContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4rem;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MobileMenuDropdown = styled.div`
  display: grid;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <MobileMenuContainer>
        <button onClick={onClickHandler}>{open ? "Close" : "Open"}</button>
      </MobileMenuContainer>
      {open && (
        <MobileMenuDropdown>
          {ROUTES.map(({ name, to }) => (
            <NavLink key={name} className={location.pathname === to ? "active" : ""} to={to}>
              {name}
            </NavLink>
          ))}
        </MobileMenuDropdown>
      )}
    </>
  );
};

const Header: React.FC = () => {
  return (
    <StyledNav>
      <DesktopMenu />
      <MobileMenu />
    </StyledNav>
  );
};

export default Header;
