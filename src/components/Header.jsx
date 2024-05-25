import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { signOutAPI } from "../actions";

const Header = (props) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <Container>
      <Content>
        <Logo onClick={handleHomeClick}>
          <a>
            <img src="/images/header-logo.svg" alt="Logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="Search Icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active" onClick={handleHomeClick}>
              <a>
                <img src="/images/nav-home.svg" className="home" alt="Home" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img
                  src="/images/nav-events.svg"
                  className="events"
                  alt="Events"
                />
                <span>Event Hub</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img
                  src="/images/nav-project-colab.svg"
                  className="projects"
                  alt="Projects"
                />
                <span>Project Hub</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img
                  src="/images/nav-messaging.svg"
                  className="messaging"
                  alt="Messaging"
                />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img
                  src="/images/nav-notifications.svg"
                  className="notifications"
                  alt="Notifications"
                />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="User" />
                ) : (
                  <img src="/images/user.svg" alt="User" />
                )}
                <span>Me</span>
                <img src="/images/nav-dropdown.svg" alt="Dropdown Icon" />
              </a>

              <SignOut onClick={() => props.SignOut()}>
                <a>Sign Out</a>
              </SignOut>

              <Profile onClick={handleProfileClick}>
                <a>My Profile</a>
              </Profile>
            </User>

            <Work>
              <a>
                <img src="/images/nav-menu.svg" alt="Menu" />
                <span>
                  More
                  <img src="/images/nav-dropdown.svg" alt="Dropdown Icon" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #98c5e9;
  border-bottom: 3px solid #001838;
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  cursor: pointer;
  & > a {
    img {
      height: 40px;
      width: 40px;
    }
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: #001838;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    img {
      max-height: 35px;
      max-width: 35px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .home {
      max-height: 31px;
      padding-bottom: 9px;
    }

    .projects {
      max-height: 31px;
      padding-bottom: 9px;
    }

    .events {
      max-height: 36px;
      padding-bottom: 4px;
    }

    span {
      color: #001838;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 80px;
  background-color: white;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const Profile = styled.div`
  position: absolute;
  top: 45px;
  background-color: white;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    ${Profile} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(NavList)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  SignOut: () => dispatch(signOutAPI()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
