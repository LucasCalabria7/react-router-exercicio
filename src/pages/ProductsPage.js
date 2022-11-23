import { useParams } from "react-router-dom"

function ProductsPage () {
    const pathParams = useParams()
    return (
        <h1>This is the {pathParams.name}</h1>
    )
}

export default ProductsPage