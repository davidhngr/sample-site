import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { AuthContext } from "../lib/AuthProvider";
import TextInput from "../components/TextInput/TextInput";

import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export default function Account() {
  const { auth, userData } = React.useContext(AuthContext);
  const [name, setName] = React.useState();

  React.useEffect(() => {
    setName(userData?.name);
  }, [userData]);

  return (
    <div className="account">
      <div className="account-container">
        <div className="account-sidebar">
          <div className="account-sidebar-container">
            <div>Profile</div>
          </div>
        </div>

        <div className="account-menu-info">
          <div className="account-menu-info-container">
            <div className="account-menu-info-container-header">
              Account Settings
            </div>
          </div>
        </div>

        <div className="account-settings">
          <div className="account-settings-container">
            {auth && userData && (
              <div className="profile-info">
                <div className="profile-image-header">Profile Picture</div>
                <div className="profile-image">
                  <img className="avatar" src={userData.avatar} />

                  <button className="button">Upload</button>
                </div>

                <div className="name-container">
                  <div>Name</div>
                  <TextInput
                    name="name"
                    html="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                </div>

                <div className="email-container">
                  <div className="email">{userData.data.email}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
