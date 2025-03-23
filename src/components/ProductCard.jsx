/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ProductCard({motorcycle, onClick}) {
    // Поля в motorcycle
    // Id
    // Name
    // DealerId
    // Price
    // Mileage
    // Color
    // Image
    // Description
    // ModelName
    // ModelBrandId
    // InStock

    const imagePath = "images/motorcycles/"
    return(
        // <Link to={"product?id=" + motorcycle.Id} className="product-card-box" key={motorcycle.Id}>
            
        // </Link>
        <div key={motorcycle.id} onClick={() => onClick()}>
            <img src={imagePath + motorcycle.image} alt="product" className="product-card-image"/>
            <div className="product-card-info">
                <div>{motorcycle.name}</div>
                <strong>{motorcycle.price} &#8381;</strong>
            </div>  
        </div>
    )
}