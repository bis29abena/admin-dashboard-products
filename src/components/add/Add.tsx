import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type AddProp = {
  fields: GridColDef[];
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Add(props: AddProp) {
  return (
    <div className="add">
      <div className="modal">
        <h1>Add new {props.slug}</h1>
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <form>
          {props.fields
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((field) => (
              <div className="item">
                <label>{field.headerName}</label>
                <input type={field.type} placeholder={field.field} />
              </div>
            ))}
            <button>Send</button>
        </form>
      </div>
    </div>
  );
}
