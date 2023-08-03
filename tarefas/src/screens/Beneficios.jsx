import React, { useState } from "react";

export default function Beneficios({ cor, setCor, tema, setTema }) {
  console.log(cor);

  const [contador, setContador] = useState(0);

  const someCounter = () => {
    setContador((prevCont) => prevCont + 1);
  };

  return (
    <div
      className={`w-screen h-screen flex justify-between px-14 p-10`}
      style={{ backgroundColor: tema, color: cor }}
    >
         <div className="flex gap-10">
      <div className="border-[2px] w-[30vh] h-[40vh] flex flex-col  shadow-xl">
        <div className=" h-[100%] rounded-lg">
          <img
            src="https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_funko_pop_trunks_do_futuro_super_sayajin_com_espada_dragon_ball_super_1281_funko_114693_1_7904d7ba3c31d934ce1d692a4993ca0c.jpg"
            alt=""
            className="h-[100%]"
          />
        </div>
        <div className="bg-white h-[30%] gap-3 flex flex-col p-4 text-black">
          <div>Iron Maden</div>
          <div>
            <button onClick={() => someCounter()}>comprar</button>
          </div>
        </div>
      </div>

      <div className="border-[2px] w-[30vh] h-[40vh] flex flex-col shadow-xl">
        <div className=" h-[100%] rounded-lg">
          <img
            src="https://images.tcdn.com.br/img/img_prod/684553/funko_pop_harry_potter_118_5009_1_7980455d69b016d2137daee2ce71d259.jpg"
            alt=""
            className="h-[100%]"
          />
        </div>
        <div className="bg-white h-[80%] gap-3 flex flex-col p-4 text-black">
          <div>Harry Potter</div>
          <div>
            <button onClick={() => someCounter()}>comprar</button>
          </div>
        </div>
        </div>
      </div>
      <p>Pontos de Beneficios : {contador}</p>
    </div>
  );
}
