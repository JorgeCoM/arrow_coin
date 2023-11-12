export const Soon = () => {
  return (
    <div className="font-sans leading-normal tracking-normal">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl text-white font-bold mb-6">
              Pronto lanzaremos
            </h1>
            <p className="text-gray-400 mb-12">
              Introduzca su correo electrónico para ser el primero en enterarse
              de nuestro lanzamiento.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex items-center">
                <input
                  type="email"
                  className="mr-3 py-2 px-4 w-full rounded-md focus:outline-none focus:bg-white"
                  placeholder="email"
                />
                <button
                  type="submit"
                  className="bg-[#1976D2] text-white py-2 px-4 rounded-md hover:bg-[#1668ba] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  Suscríbete
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-20">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl text-white font-bold mb-6">Qué puedes esperar</h2>
            <p className="text-gray-400 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              orci quis justo aliquam euismod eget a leo. Sed eget orci feugiat,
              porttitor nibh vel, faucibus mauris.
            </p>
          </div>
          <div className="flex flex-wrap pr-3 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-gray-700 shadow-md p-8">
                <div className="text-4xl font-bold text-[#1976D2] mb-4">
                  01
                </div>
                <h3 className="text-2xl text-white font-bold mb-4">Característica 1</h3>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec orci quis justo aliquam euismod eget a leo.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-gray-700 shadow-md p-8">
                <div className="text-4xl font-bold text-[#1976D2] mb-4">
                  02
                </div>
                <h3 className="text-2xl text-white font-bold mb-4">Característica 2</h3>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec orci quis justo aliquam euismod eget a leo.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-gray-700 shadow-md p-8">
                <div className="text-4xl font-bold text-[#1976D2] mb-4">
                  03
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Característica 3</h3>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nec orci quis justo aliquam euismod eget a leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
