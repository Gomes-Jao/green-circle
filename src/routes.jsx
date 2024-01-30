import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Inicio } from "./pages/Inicio";
import { Teste } from "./pages/Teste"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <Inicio/>
            },
            {
                path: '/teste',
                element: <Teste/>
            },
        ]
    }  
])