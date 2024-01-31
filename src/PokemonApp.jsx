import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./componentes/Navbar"
import { Home } from "./pages/Home"
import { Perfil } from "./pages/Perfil"

export const PokemonApp = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="container">
            <Routes>
                <Route>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/perfil" element={<Perfil></Perfil>}></Route>
                    <Route path="/*" element={<Navigate to='/' />}></Route>
                </Route>
            </Routes>
        </div>
    </>
  )
}
