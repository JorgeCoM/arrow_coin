export const FormBankAccount = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full mx-auto">
        <div className="flex items-center flex-col">
          <div className="w-full xl:w-3/4 items-center justify-center lg:w-11/12 flex">
            <div className="w-full lg:w-7/12 bg-gray-900 p-5 rounded-lg rounded-t-none">
              <form className="px-8 mb-4 bg-gray-900 rounded">
                <div className=" md:flex md:justify-between"></div>
                <div>
                  <label
                    className="block mb-2 mt-4 text-sm font-bold text-gray-400"
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
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-400"
                    for="monto"
                  >
                    Monto
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="monto"
                    type="text"
                    placeholder="100.00"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
