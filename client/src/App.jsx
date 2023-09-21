import NFTCard from "./components/NFTCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full min-h-screen">
        <NFTCard />
      </div>
    </>
  );
}

export default App;
