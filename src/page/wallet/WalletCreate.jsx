import { useState, useEffect } from "react";
import { FormBankAccount } from "../../components/wallet/formBankAccount";
import { FormAccountCard } from "../../components/wallet/formAccountCard";

export const WalletCreate = () => {
  const [value, setValue] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full mx-auto">
        <div className="flex items-center flex-col">
          <div className="w-full xl:w-3/4 justify-center lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-gray-900 p-5 rounded-lg rounded-b-none">
              <h3 className="pt-4 mb-2 text-2xl text-white text-center">
                Ingrese la tarjeta de credito
              </h3>
              <div className="px-8">
                <label
                  className="block mb-2 text-sm font-bold text-gray-400"
                  htmlFor="tipoDeCuenta"
                >
                  Tipo de cuenta
                </label>
                <select
                  onChange={handleChange}
                  className="p-2 w-full rounded shadow"
                  name="tipoDeCuenta"
                  id="tipo"
                >
                  <option value="">
                    Seleccione una respuesta
                  </option>
                  <option disabled value="Cuenta bancaria">Cuenta bancaria (muy pronto)</option>
                  <option value="Tarjeta de credito">
                    Tarjeta de credito
                  </option>
                  <option disabled value="Cuenta bancaria">
                    Cuenta virtual (muy pronto)
                  </option>
                  <option disabled value="Cuenta bancaria">
                    Cuenta empresarial (muy pronto)
                  </option>
                </select>
              </div>
            </div>
          </div>
          {value === "Cuenta bancaria" && <FormBankAccount />}
          {value === "Tarjeta de credito" && <FormAccountCard type={"Tarjeta de crédito"} />}
        </div>
      </div>
    </div>
  );
};
