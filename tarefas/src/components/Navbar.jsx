import React from "react";
import { useLocation } from "react-router-dom";
import LinkPerso from "./LinkPerso";
import { BsSun,BsMoonStars } from 'react-icons/bs';

export default function Navbar({ cor, setCor, tema, setTema }) {
  const nomeRota = useLocation();
  return (
    <div className=" flex items-center justify-between" style={{color:cor,backgroundColor:tema}}>
      <div className="flex items-center gap-20 w-screen h-[10vh] px-10 border-b-[1px]">
        <LinkPerso caminho={"/"}>
          <p className={`
          ${nomeRota.pathname === "/" ? 'text-rose-500' : "underline-offset-0"}
          `}>Beneficios</p>
        </LinkPerso>

        <LinkPerso caminho={"/version"}>
          <p className={`
          ${nomeRota.pathname === "/version" ? 'text-rose-500' : "underline-offset-0"}
          `}>Version</p>
        </LinkPerso>
         
         <div className="w-screen flex items-end justify-end">

        <button
          className="rounded-md"
          style={{}}
          onClick={() => {
            setTema(tema === "black" ? "white" : "black");
            setCor(cor === "white" ? "black" : "white");
          }}
        >
            {tema === "black" ? <BsSun size={25}/> : <BsMoonStars size={25}/>}
        </button>{" "}
        </div>
      </div>
    </div>
  );
}
