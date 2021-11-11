import 'bootstrap/dist/css/bootstrap.min.css';
import FirstNavbar from './components/FirstNavbar';
import './App.css';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
// import LatestRelease from './components/LatestRelease';
import './components/Components.css';
import BookList from './components/BookList';



function App() {
  return (
    <div>
      <FirstNavbar />
      <Welcome />
      <BookList />
      {/* <LatestRelease /> */}
      <Footer />
    </div>
  );
}

export default App;
