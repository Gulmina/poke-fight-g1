import React from "react";
import axios from "axios";

const Leaderboard = () => {
  const data = new FormData();
  formData.append("first_name", profile.firstName);
  formData.append("last_name", profile.lastName);
  formData.append("email", profile.email);

  return fetch("http://example.com/api/v1/registration", {
    method: "POST",
    body: formData,
  }).then((response) => response.json());

  createNewProfile(profile)
    .then((json) => {
      // handle success
    })
    .catch((error) => error);
  return (
    <>
      <h1>This is Leaderboard page!</h1>
    </>
  );
};

export default Leaderboard;
