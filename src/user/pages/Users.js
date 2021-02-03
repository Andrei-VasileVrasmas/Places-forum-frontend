import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Diablo Caliente",
      image:
        "https://www.pexels.com/photo/person-wearing-white-and-purple-mask-6155875/",
      places: "3",
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
