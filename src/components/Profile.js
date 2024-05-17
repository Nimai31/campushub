import { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Profile = (props) => {
  useEffect(() => {
    // You might fetch user profile data here
  }, []);

  return (
    <Container>
      <ProfileCard>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={props.user.photoURL} alt="User" />
          ) : (
            <img src="/images/user.svg" alt=" " />
          )}
          <UserInfo>
            <h2>{props.user ? props.user.displayName : "User Name"}</h2>
            <p>{props.user ? props.user.email : "user@example.com"}</p>
          </UserInfo>
        </div>
        <ProfileActions>
          <button>Edit Profile</button>
        </ProfileActions>
      </ProfileCard>
      <ProfileCard>Certifications</ProfileCard>
      <ProfileCard>Skills</ProfileCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  margin: 20px;
  padding-top: 100px;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #98c5e9;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border: 3px solid #001838;
`;

const ProfileCard = styled(CommonCard)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 90px;
  margin-right: 90px;
  min-height: 200px;
  margin-bottom: 50px;
  img {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
`;

const UserInfo = styled.div`
  text-align: center;

  h2 {
    margin: 0;
    font-size: 24px;
    color: #001838;
  }

  p {
    margin: 5px 0;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const ProfileActions = styled.div`
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    color: #001838;
    background-color: #fff;
    border: 1px solid #001838;
    border-radius: 20px;
    cursor: pointer;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Profile);
