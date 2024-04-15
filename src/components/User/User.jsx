import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  //   alert("heheeh");
  return (
    <div>
      <h3>hello User {id}</h3>
    </div>
  );
}

export default User;
