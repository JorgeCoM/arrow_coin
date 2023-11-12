export const WalletCreate = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-900 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
            <div className="w-full lg:w-7/12 bg-gray-900 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-white text-center">
                Ingrese la cuenta
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-gray-900 rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="firstName"
                    >
                      Nombre
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      htmlFor="lastName"
                    >
                      Apellido
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-400"
                    for="email"
                  >
                    Numero de cuenta
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="1234 5678 9874 1543"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      for="fecha"
                    >
                      Fecha
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="text"
                      type="text"
                      placeholder="04/28"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      for="CVV"
                    >
                      CVV
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="CVV"
                      type="text"
                      placeholder="452"
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-400"
                      for="monto"
                    >
                      monto
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="monto"
                      type="text"
                      placeholder="100.00"
                    />
                  </div>
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-400"
                    for="tipoDeCuenta"
                  >
                    Tipo de cuenta
                  </label>
                  <select className="p-2 w-full rounded shadow" name="tipoDeCuenta" id="tipo">
                    <option value="">Seleccione una respuesta</option>
                    <option value="Cuenta bancaria">Cuenta bancaria</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
