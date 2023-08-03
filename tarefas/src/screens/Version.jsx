import React from "react";

export default function Version({ cor, setCor, tema, setTema }) {
  return (
    <div
      className={`w-screen h-screen flex justify-between px-10 p-10`}
      style={{ backgroundColor: tema, color: cor }}
    >
      <p className="text-2xl">Version do Site : 4.2.1</p>

    </div>
  );
}
