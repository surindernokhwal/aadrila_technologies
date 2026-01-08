import AppRoutes from "./Routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
AOS.init();
  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
