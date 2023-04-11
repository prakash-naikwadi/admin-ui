import React, { useEffect, useState } from "react";

const itemsPerPage = 10;
const UsersTable = ({ users = [], deleteUser = () => {} }) => {
  console.log({ users });
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  console.log({ pageNumber });

  const lastPageNumber = Math.ceil(users.length / itemsPerPage);

  console.log({ lastPageNumber });

  useEffect(() => {
    const start = itemsPerPage * pageNumber;
    const visibleUsersData = users.slice(start, start + itemsPerPage);
    console.log({ visibleUsersData });
    setVisibleUsers(visibleUsersData);
  }, [pageNumber, users]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((user) => {
            return (
              <tr key={user?.id}>
                <td>
                  {user?.id}
                  <input type="checkbox" />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => deleteUser(user?.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPageNumber((prev) => (prev = prev - 1))}>
          Previous
        </button>
        <button onClick={() => setPageNumber((prev) => (prev = prev + 1))}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
