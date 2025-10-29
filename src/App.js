import './App.css';
import Navbar from './component/Navbar';
import { Toaster } from "react-hot-toast";
import './index.css'
import Home from './pages/Home';

function App() {
  return (
    <div className="lg:mx-16 md:mx-10 mx-1">
      <Toaster position="top-center" />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
