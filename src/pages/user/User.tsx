import Single from "../../components/single/Single";
import { singleUser } from "../../data";

export default function User() {
  return (
    <div className="user">
      <Single  {...singleUser}/>
    </div>
  );
}
