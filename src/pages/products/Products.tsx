import { useState } from "react";
import DataTable from "../../components/datatable/DataTable";
import { products } from "../../data";
import "./products.scss";
import Add from "../../components/add/Add";

export default function Products() {
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params: any) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 150,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 150,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

  return (
    <div className="product">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable columns={columns} rows={products} slug="products" />
      {open && <Add fields={columns} slug="products" setOpen={setOpen} />}
    </div>
  );
}
