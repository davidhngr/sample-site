import React from "react";
import { AuthContext } from "../lib/AuthProvider";

import { useLazyQuery, useMutation } from "@apollo/client";
import { CURRENT_USER } from "../lib/graphql/queries";
import { UPDATE_USER } from "../lib/graphql/mutations";

import TextInput from "../components/TextInput/TextInput";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Account() {
  const { auth } = React.useContext(AuthContext);
  const [avatar, setAvatar] = React.useState();
  const [userData, setUserData] = React.useState();

  const [getUser, { data, loading, error, refetch }] = useLazyQuery(
    CURRENT_USER,
    {
      notifyOnNetworkStatusChange: true,
      variables: { id: "628b9ebb7da5b905fb6f0261" },
    }
  );
  const [updateUser] = useMutation(UPDATE_USER);

  const updateUserData = () => {
    updateUser({
      variables: {
        id: userData.id,
        fullname: formik.values.name,
        phone: formik.values.phone,
        location: formik.values.location,
      },
    })
      .then((data) => {
        if (data) {
          console.log(data.data.updateOneUser);
          refetch();
        } else {
          //set error for no-access rights
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    if (!loading && !error) {
      getUser()
        .then((data) => {
          console.log(data);

          switch (data.networkStatus) {
            case 1:
              console.log("Loading...");
              break;
            case 4:
              console.log("Data refetching...");
              break;
            case 7:
              setUserData(data.data.user);
              setAvatar(data.data.user.avatar);
              break;
            case 8:
              console.log(data);
              break;
          }
        })
        .catch((err) => console.log(err));
    }
  }, [data]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userData?.fullname,
      email: userData?.data.email,
      phone: userData?.phone,
      location: userData?.location,
    },
  });

  return (
    <div className="account">
      <div className="account-container">
        <div className="account-sidebar">
          <div className="account-sidebar-container">
            <div>{userData?.fullname}</div>
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
          {auth && userData && (
            <div className="profile">
              <div className="profile-container">
                <div className="profile-header">
                  <div className="header-header">General Info</div>

                  <div className="header-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>

                <div className="meta-info">
                  <div className="meta-info-container-left">
                    <div className="meta-info-helper">
                      <div className="helper-container">
                        <div className="helper-header">
                          Your Profile Picture
                        </div>

                        <div className="helper-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </div>
                      </div>

                      <div className="profile-image">
                        <img className="avatar" src={avatar} />

                        <input
                          style={{ display: "none" }}
                          type="file"
                          id="file"
                          onChange={(e) => {
                            setAvatar(URL.createObjectURL(e.target.files[0]));
                            console.log(URL.createObjectURL(e.target.files[0]));
                          }}
                        />

                        <label className="file-upload" htmlFor="file">
                          <FontAwesomeIcon
                            className="file-upload-icon"
                            icon={faCamera}
                          />
                        </label>

                        <div className="username">{userData.fullname}</div>
                        <div className="userid">{`@${userData.id}`}</div>
                      </div>
                    </div>
                  </div>

                  <div className="meta-info-container-right">
                    <div className="meta-header">Edit Profile</div>
                    <div className="info">
                      <div className="info-container">
                        <div className="info-container-label">Name</div>
                        <TextInput
                          name="name"
                          html="username"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          disabled
                        />
                      </div>

                      <div className="info-container">
                        <div className="info-container-label">Email</div>
                        <TextInput
                          name="email"
                          html="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          disabled
                        />
                      </div>

                      <div className="info-container">
                        <div className="info-container-label">Phone Number</div>
                        <TextInput
                          name="phone"
                          html="mobile"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          disabled
                        />
                      </div>

                      <div className="info-container">
                        <div className="info-container-label">Location</div>
                        <TextInput
                          name="location"
                          html="address"
                          value={formik.values.location}
                          onChange={formik.handleChange}
                          disabled
                        />
                      </div>
                    </div>

                    <button className="button" onClick={() => updateUserData()}>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
