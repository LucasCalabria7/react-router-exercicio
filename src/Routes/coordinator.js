export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goToProfilePage = (navigate) => {
    navigate("/profile")
}

export const goToProductsPage = (navigate, name) => {
    navigate(`/products/${name}`)
}