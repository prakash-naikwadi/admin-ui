import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { getUsersData } from "@/pages/api";

const MainWrapper = styled.div``;

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData().then((data) => {
      setUsers(data);
    });
  }, []);

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user?.id !== id;
      });
    });
  };

  return (
    <MainWrapper>
      <UsersTable users={users} deleteUser={deleteUser} />
    </MainWrapper>
  );
};

export default Users;
