import { SingIn } from './pages/SingIn/SingIn';
import { RoutesMain } from './routes/routes';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles/index.scss'

const App = () => {
    return (
        <>
        <RoutesMain />
        <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        </>
    )
};

export default App
