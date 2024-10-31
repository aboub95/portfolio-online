"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function MyCv() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCv = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-5">
      <button
        onClick={toggleCv}
        className="p-2 mb-3 text-white bg-blue-500 rounded-lg"
      >
        {isOpen ? "Masquer le CV" : "Afficher le CV"}
      </button>

      {isOpen && (
        <div className="p-5 mt-3 border rounded-lg bg-gray-100">
          <h2 className="text-xl font-semibold">Mon Parcours Académique</h2>
          <ul className="list-disc ml-5">
            <li>
              Licence 1 en Management et Gestion des Organisation - USIA-ESSIG
              (2021-2022)
            </li>
            <li>
              Licence 2 en Management et Gestion des Organisation - USIA-ESSIG
              (2022-2023)
            </li>
            <li>
              Licence 3 en Management et Gestion des Organisation - USIA-ESSIG
              (2023-2024)
            </li>
            <li>
              Formation en Développement web et web mobile - Ecole 241 (2024)
            </li>
          </ul>
          <h2 className="text-xl font-semibold mt-4">
            Expériences Professionnelles
          </h2>
          <ul className="list-disc ml-5">
            <li>Développeur Web chez Phila.Inc (2021 - présent)</li>
            <li>Stagiaire Développeur chez Entreprise 2 (2020)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyCv;
