
import Single from "../../components/single/Single";
import { singleProduct } from "../../data";

export default function Product() {
  return (
    <div className="product">
      <Single {...singleProduct}/>
    </div>
  );
}
