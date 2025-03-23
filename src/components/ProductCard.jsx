/* eslint-disable react/prop-types */
export default function ProductCard({motorcycle, onClick}) {

    const imagePath = "images/motorcycles/"
    return(
        <div key={motorcycle.id} onClick={() => onClick()} className="product-card-box">
            <img src={imagePath + motorcycle.image} alt="product" className="product-card-image"/>
            <div className="product-card-info">
                <div>{motorcycle.name}</div>
                <strong>{motorcycle.price} &#8381;</strong>
            </div>  
        </div>
    )
}