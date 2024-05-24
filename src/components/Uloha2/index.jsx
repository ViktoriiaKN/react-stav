import { useState } from "react";

/*
Zadání 1: Převeďte `cislo` na stavovou proměnnou.
Zadání 2: Zařiďte, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku,
  vynulovat nastavovalo na nulu apod.
*/

const Pocitadlo = () => {
  const [cislo, setCislo] = useState(0);

  function pricitatJednicku () {
setCislo(cislo + 1); 
  }

  function pricitatPetku () {
    setCislo(cislo + 5);
  }

  function vynulovat () {
    setCislo(0);
  }

  function odcitatJednicku () {
    setCislo(cislo - 1);
  }

  function odcitatPetku () {
    setCislo(cislo - 5);
  }

  return (
    <>
      <h3>Počítadlo: {cislo}</h3>
      <div>
        <button onClick={odcitatPetku}>-5</button>
        <button onClick={odcitatJednicku}>-1</button>
        <button onClick={vynulovat}>vynulovat</button>
        <button onClick={pricitatJednicku}>+1</button>
        <button onClick={pricitatPetku}>+5</button>
      </div>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
      <Pocitadlo />
    </>
  );
};
