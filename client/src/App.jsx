function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <div className="max-w-sm m-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="bg-[url('/assets/images/NFT_image.jpg')] rounded-lg bg-cover bg-no-repeat w-full h-64"></div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                The Rule of Apes 2023 NFT
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              The Rule of Apes NFT is a singular, exclusive digital artwork
              centered around an ape-themed NFT. Mint yours now!
            </p>
            <div className="flex flex-row-reverse">
              <button className="bg-white text-black font-bold p-2 rounded-md hover:bg-gray-100">
                Mint NFT!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
