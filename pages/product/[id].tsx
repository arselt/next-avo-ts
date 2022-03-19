import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"

const ProductPage = () => {

    const [product, setProduct] = useState<TProduct>();

    const {
        query : { id },
    } = useRouter()
    
    useEffect(() => {
        if (id) { // fetches only when id is given
            window
            .fetch(`/api/avo/${id}`)
            .then((response) => response.json())
            .then(( data ) => setProduct(data))
        }
    }, [id])
    
    return (
        <div>
            <h2>esta es la pagina del producto: {product?.name}  </h2>
            <p>{product?.attributes.description}</p>
        </div>
    )
};

export default ProductPage;