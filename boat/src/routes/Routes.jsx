import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
// import CartPage from "../components/CartPage/CartPage";
// import { Error } from "../components/Error";
import { HomePage } from "../Components/homepage/HomePage";
// import { Champions } from "../components/Champions";
// import { Login } from "../components/Login";
// import { Register } from "../components/Register";
// import { Footer } from "../components/Footer";
// import ProductPage from "../components/ProductPage/ProductPage";
// import { Collections } from "../components/Collections";
// // import { Success } from "../components/Success";
import Cart from "../Components/cart/Cart";

export function Rout() {
    return (
        <Routes>
            <Route path="/" exact>
                <Navbar />
                <HomePage />
                {/* <Footer /> */}
            </Route>

            <Route path="/pages/sound-of-champions">
                <Navbar />
                {/* <Champions /> */}
                {/* <Footer /> */}
            </Route>

            <Route path="/account/login">
                <Navbar />
                {/* <Login /> */}
                {/* <Footer /> */}
            </Route>

            <Route path="/account/register">
                <Navbar />
                {/* <Register /> */}
                {/* <Footer /> */}
            </Route>

            <Route path="/products/:productName">
                <Navbar />
                {/* <ProductPage /> */}
                {/* <Footer /> */}
            </Route>

            <Route path="/cart">
                <Navbar />
                <Cart/>
            </Route>

            <Route exact path="/successful">
                {/* <Success /> */}
            </Route>

            <Route path="/collections/:collectionName">
                <Navbar />
                {/* <Collections /> */}
                {/* <Footer /> */}
            </Route>

            <Route>
                <Navbar />
                {/* <Error /> */}
                {/* <Footer /> */}
            </Route>
        </Routes>
    );
}
