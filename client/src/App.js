import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import TripList from "./pages/TripList";
import WishList from "./pages/WishList";
import PropertyList from "./pages/PropertyList";
import ReservationList from "./pages/ReservationList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="https://flatmate-kohl.vercel.app/" element={<HomePage />} />
          <Route path="https://flatmate-kohl.vercel.app/register" element={<RegisterPage />} />
          <Route path="https://flatmate-kohl.vercel.app/login" element={<LoginPage />} />
          <Route path="https://flatmate-kohl.vercel.app/properties/:listingId" element={<ListingDetails />} />
          <Route path="https://flatmate-kohl.vercel.app/create-listing" element={<CreateListing />} />
          <Route path="https://flatmate-kohl.vercel.app/properties/category/:category" element={<CategoryPage />} />
          <Route path="https://flatmate-kohl.vercel.app/properties/search/:search" element={<SearchPage />} />
          <Route path="https://flatmate-kohl.vercel.app/:userId/trips" element={<TripList />} />
          <Route path="https://flatmate-kohl.vercel.app/:userId/wishList" element={<WishList />} />
          <Route path="https://flatmate-kohl.vercel.app/:userId/properties" element={<PropertyList />} />
          <Route path="https://flatmate-kohl.vercel.app/:userId/reservations" element={<ReservationList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
