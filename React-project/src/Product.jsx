import './Product.css'
function Product({title,description,functions}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{functions.a}</p>
        </div>
    );
}

export default Product