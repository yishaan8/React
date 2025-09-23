import Product from "./Product";
function ProductTab() {
let options={a:"hitech",b:"durable",c:"lightweight"};
return (
<>
        <Product title="Laptop" description="High performance laptop" functions={options}/>
        <Product title="Smartphone" description="Latest model smartphone" functions={options}/>
        <Product title="Tablet" description="Lightweight tablet" functions={options}/>
</>
);
}
export default ProductTab;
