import './Inicio.css'
import { useEffect } from "react"

export function Inicio(){
    
    // TITULO DA PAGINA
    useEffect(() => {
        document.title = "Início"
    })
    // -------------------------------

    return(
        <div>
            Olá
        </div>
    )
}