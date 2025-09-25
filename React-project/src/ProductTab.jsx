import Product from "./Product";
function ProductTab() {
return (
<>
        <Product title="Laptop" description="High performance laptop" price={400000}/>
        <Product title="Smartphone" description="Latest model smartphone" price={20000}/>
        <Product title="Tablet" description="Lightweight tablet" price={30000}/>
</>
);
}
export default ProductTab;
