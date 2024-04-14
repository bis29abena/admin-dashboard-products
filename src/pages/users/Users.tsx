import "./users.scss";
import DataTable from "../../components/datatable/DataTable";
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

export default function Users() {
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avater",
      width: 100,
      renderCell: (params: any) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },

    {
      field: "firstName",
      headerName: "First name",
      width: 100,
      type: "string",
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 100,
      type: "string",
      editable: true,
    },
    {
      field: "email",
      headerName: "Email Address",
      type: "string",
      width: 200,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone number",
      type: "string",
      sortable: false,
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}> Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add fields={columns} slug="user" setOpen={setOpen} />}
    </div>
  );
}
