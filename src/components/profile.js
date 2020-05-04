import React from "react";
import User from "./user";
import Palette from "./palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="data:image/jpeg;base64,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"
        alt="man"
        name="Scott"
      />
      <Palette />
    </div>
  );
};

export default Profile;
