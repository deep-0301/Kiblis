import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Why from './Components/Why';
import { Photo } from './Components/Photo';
import Review from './Review';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Cards />
      <Why />
      <Photo />
      <Review />
      <SearchBar />
      <Footer />
    </>
  );
}

export default App;
