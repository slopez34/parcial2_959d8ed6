import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { RevistaCrear } from "../../componentes/revista/RevistaCrear.tsx";
import { RevistaListar } from "../../componentes/revista/RevistaListar";
import { RevistaAdmin } from "../../componentes/revista/RevistaAdmin";
import { RevistaActualizar } from "../../componentes/revista/RevistaActualizar";
import { QuienesSomos } from "../../componentes/otros/QuienesSomos.tsx";
import { NoEncontrado } from "../../componentes/contenedor/No_encontrado";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element= {<Inicio/>}/>

            <Route path="/revcre" element= {<RevistaCrear/>}/>
            <Route path="/revlis" element= {<RevistaListar/>}/>
            <Route path="/revadm" element= {<RevistaAdmin/>}/>

            <Route path="/revact/:codigo" element= {<RevistaActualizar/>}/>

            <Route path="/quien" element= {<QuienesSomos/>}/>
            <Route path="*" element={<NoEncontrado/>}/>
        </Routes>


    );
};