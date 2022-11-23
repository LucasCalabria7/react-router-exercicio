import { useNavigate } from "react-router-dom"
import { goToHomePage, goToProfilePage, goToProductsPage } from "../Routes/coordinator"

export function Header () {
    let navigate = useNavigate()


    return (
        <>
        <h1>Welcome to our Website</h1>
        <button onClick={()=>goToHomePage(navigate)} >Ir para Página Principal</button>
        <button onClick={()=>goToProfilePage(navigate)} >Ir para Página de Perfil</button>
        <button onClick={()=>goToProductsPage(navigate, "Iphone")} >Ir para Página de Produtos</button>
        </>
    )
}