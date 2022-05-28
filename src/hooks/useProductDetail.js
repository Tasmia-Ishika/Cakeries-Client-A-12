
import { useEffect, useState } from "react";

const useProductDetail = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://afternoon-meadow-48575.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);
    return [product, setProduct]
}

export default useProductDetail;