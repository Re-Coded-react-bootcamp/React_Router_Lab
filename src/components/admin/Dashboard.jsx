import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <a href="/admin/posts">Post</a>
        </li>
        <li>
          <a href="/admin/users">Users</a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
