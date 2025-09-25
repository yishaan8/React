import './Product.css'
function Product({title,description,price}) {
    let styles={backgroundColor:price>30000?"lightblue":""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>{description}</p>
            {price>30000 ?<p>Discount of 5%</p>:null}
        </div>
    );
}

export default Product