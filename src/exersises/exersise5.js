import React, { useState, useEffect } from "react";
const RanomProfile = () => {
  const [data, setData] = useState([]);

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    fetch("https://randomuser.me/api/", { signal })
      .then((res) => res.json())
      .then(({ results }) => setData(results))
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {data && (
        <div>
          <p>name : {data[0].name.first}</p>
          <p>gender: {data[0].gender}</p>
          <img alt="profile" src={data[0].picture.medium}></img>
        </div>
      )}
    </>
  );
};

export default RanomProfile;
