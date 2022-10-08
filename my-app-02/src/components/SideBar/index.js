import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBtnWrap,
  SideBarLink,
  SidebarRoute,
} from "./SidebarElements";
function SideBar({ toggle, isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="discover" onClick={toggle}>
            Discover
          </SideBarLink>
          <SideBarLink to="Services" onClick={toggle}>
            Services
          </SideBarLink>
          <SideBarLink to="signup" onClick={toggle}>
            Sign Up
          </SideBarLink>

          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign in</SidebarRoute>
          </SideBtnWrap>
        </SideBarMenu>
      </SideBarWrapper>
    </SidebarContainer>
  );
}

export default SideBar;
