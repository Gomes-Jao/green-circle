import { useEffect } from "react"

export function Teste(){

    // TITULO DA PAGINA
    useEffect(() => {
        document.title = "Teste"
    })
    // -------------------------------
    
    return(
        <div>
            Olá teste
        </div>
    ) 

}