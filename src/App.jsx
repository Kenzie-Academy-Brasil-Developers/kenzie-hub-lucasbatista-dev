import { GlobalStyle } from "./styles/GlobalStyles";
import { RoutesLogin as Routes } from "./routes/RoutesLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
