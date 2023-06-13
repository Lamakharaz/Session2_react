import Button from "./Button";

function Product(props){
return(
 <div className="product-Card">
    <h6>{props.name}</h6>
    <h6> {props.price}</h6>
    <h6> {props.dec}</h6>
    <Button title="DOONNe" > </Button>
     </div>
)

}export default Product;

