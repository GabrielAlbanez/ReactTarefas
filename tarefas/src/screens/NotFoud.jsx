import React from "react";

export default function NotFoud({ cor, setCor, tema, setTema }) {
  return (
    <div
      className={`w-screen h-[90vh] flex items-center justify-center px-10 p-10`}
      style={{ backgroundColor: tema, color: cor }}
    >
      <p className="text-4xl">NotFound : 404</p>
      <div>
        {" "}

      </div>
    </div>
  );
}
