import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthProvider, { useAuthContext } from "./context/auth";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

const AppRoutes = () => {
  const {user} = useAuthContext();
return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/movie/:id" element={<Movie />} />
    {
      user &&
      <Route path="/movie/:id/book" element={<Booking />} />
    }
    <Route path="/success" element={<Success />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)
}
