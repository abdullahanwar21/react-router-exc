import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/abdullahanwar21`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github
      <img src={data.avatar_url} alt="git pic" width={300} height={300} />
    </div>
  );
}

export default Github;
export const githubInfo = async () => {
  const response = await fetch(`https://api.github.com/users/abdullahanwar21`);
  return response.json();
};
