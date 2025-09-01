export default function NotFound() {
  return (
    <section>
      <div className=" flex justify-center py-52 ">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className=" text-7xl mb-24 tracking-tight font-extrabold lg:text-9xl text-orange-400">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-black">
            Page not found currently
          </p>
          <p className="mb-4 text-lg font-light text-gray-600">
            Sorry, we can't find such page.
          </p>

          <button
            type="button"
            className="text-white  bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
          >
            Back To Home
          </button>
        </div>
      </div>
    </section>
  );
}
