import { Segment } from "semantic-ui-react";
import { UsersTable } from "./UsersTable.jsx";
import { UserEdit } from "./UserEdit.jsx";

export const UsersPage = () => {
  return (
    <Segment>
      <div className="content-header">
        <div>
          <h3>Users Page</h3>
        </div>
        <div>
          <UserEdit title="Add" />
        </div>
      </div>
      <UsersTable />
    </Segment>
  );
};
