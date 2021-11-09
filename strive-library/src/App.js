import 'bootstrap/dist/css/bootstrap.min.css';
import FirstNavbar from './components/FirstNavbar';
import './App.css';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div>
      <FirstNavbar />
      <Welcome />
      <LatestRelease />
      <Footer />
    </div>
  );
}

export default App;
