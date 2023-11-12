import React, { useState } from "react";
import styles from "../style";
import Button from "./Button";

const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePricing = () => {
    setIsMonthly((prevValue) => !prevValue);
  };

  const priceData = {
    basic: isMonthly ? "$0" : "$0",
    professional: isMonthly ? "$8.99" : "$79.99",
    master: isMonthly ? "16$.99" : "$99.99",
  };

  return (
    <div id="plan" className="font-montserrat bg-very-light-grayish-blue">
      <header className="text-center py-10">
        <h2 className="text-grayish-blue text-3xl md:text-4xl text-white font-bold tracking-wider">
          Planes
        </h2>
        <nav className="flex justify-center items-center gap-4 md:gap-8 mt-5">
          <p className="text-grayish-blue text-2xl text-white">Anual</p>
          <button
            onClick={togglePricing}
            className={`toggle-area ${isMonthly ? "Mensual" : "Anual"}`}
          >
            {/* Renderizar un ícono para indicar el cambio de mensual a anual */}
            {isMonthly ? (
              <i className="text-white text-2xl bx bx-chevron-right"></i>
            ) : (
              <i className="text-white text-2xl bx bx-chevron-left"></i>
            )}
          </button>
          <p className="text-grayish-blue text-2xl text-white">Mensual</p>
        </nav>
      </header>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mx-4 md:mx-auto">
          <article className="pricing container-1 flex flex-col items-center bg-black-gradient-2 rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-grayish-blue text-gradient text-lg md:text-xl font-bold">
              Gratis
            </h2>
            <p className="price-1 text-3xl text-white md:text-4xl font-bold mt-4">
              {priceData.basic}
            </p>
            <ul className="mt-6 w-full">
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Acceso a 4 gráficas
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center  w-full border-white">
                2 dispositivo a la vez
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 mb-4 border-b flex justify-center items-center w-full border-white">
                1 tarjeta disponible
                <i className="text-gradient bx bx-check"> </i>
              </li>
            </ul>
          </article>
          <article className="pricing flex flex-col items-center container-2 blue__gradient__2  from-hsl-236 via-hsl-237 to-white text-white rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-lg text-gradient md:text-xl font-bold">
              Avanzado
            </h2>
            <p className="price-2 text-3xl text-white md:text-4xl font-bold mt-4">
              {priceData.professional}
            </p>
            <ul className="mt-6 w-full">
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Acceso a 6 gráficas
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center  w-full border-white">
                4 dispositivo a la vez
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                3 tarjeta disponible
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Depositos
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 mb-4 border-b flex justify-center items-center w-full border-white">
                Diseño de tarjetas
                <i className="text-gradient bx bx-check"> </i>
              </li>
            </ul>
            <Button text="Suscribirse" />
          </article>
          <article className="pricing container-3 flex flex-col items-center text-white bg-black-gradient-2 rounded-lg p-6 md:p-8 shadow-md">
            <h2 className="text-grayish-blue text-gradient text-lg md:text-xl font-bold">
              Profesional
            </h2>
            <p className="price-3 text-3xl text-white md:text-4xl font-bold mt-4">
              {priceData.master}
            </p>
            <ul className="mt-6 w-full">
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Acceso a 10 gráficas
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center  w-full border-white">
                7 dispositivo a la vez
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                 Tarjeta ilimitadas disponible
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Depositos
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Diseño de tarjetas
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Activos (crypto, primas etc...)
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 border-b flex justify-center items-center w-full border-white">
                Tareas automatizadas
                <i className="text-gradient bx bx-check"> </i>
              </li>
              <li className="py-2 mb-7 border-b flex justify-center items-center w-full border-white">
                Asistente IA (Proximamente)
                <i className="text-gradient bx bx-check"> </i>
              </li>
            </ul>
            <div>
              <Button text="Suscribirse" />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default PricingComponent;
