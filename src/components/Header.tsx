import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: #252f3f;
  color: #9fa6b2;
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 4rem;
`;

const StyledMobileMenu = styled.div`
  display: grid;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const StyledDesktopMenu = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  gap: 0.5rem;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  color: #d2d6dc;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: #374151;
    outline: 0;
    color: #fff;
  }

  &.active {
    background-color: #161e2e;
    color: #fff;
  }
`;

const StyledButton = styled.button`
  display: flex;
  color: #9fa6b2;
  justify-self: flex-end;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MenuButton: React.FC<React.PropsWithoutRef<JSX.IntrinsicElements["button"]>> = ({ ...props }) => {
  return (
    <StyledButton {...props}>
      <MdMenu size="1.5em" />
    </StyledButton>
  );
};

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();
  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <StyledNav>
      <StyledContainer>
        <StyledDesktopMenu>
          <StyledLink className={location.pathname === "/" ? "active" : ""} to="/">
            Schedule
          </StyledLink>
          <StyledLink className={location.pathname === "/events" ? "active" : ""} to="/events">
            Events
          </StyledLink>
          <StyledLink className={location.pathname === "/teams" ? "active" : ""} to="/teams">
            Teams
          </StyledLink>
        </StyledDesktopMenu>
        <MenuButton onClick={onClickHandler} />
      </StyledContainer>
      {open && (
        <StyledMobileMenu>
          <StyledLink className={location.pathname === "/" ? "active" : ""} to="/">
            Schedule
          </StyledLink>
          <StyledLink className={location.pathname === "/events" ? "active" : ""} to="/events">
            Events
          </StyledLink>
          <StyledLink className={location.pathname === "/teams" ? "active" : ""} to="/teams">
            Teams
          </StyledLink>
        </StyledMobileMenu>
      )}
    </StyledNav>
  );
};

export default Header;
