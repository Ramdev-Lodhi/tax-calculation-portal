import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-6xl px-4 pt-16">
        <Home />
      </div>
    </div>
  );
};

export default App;
