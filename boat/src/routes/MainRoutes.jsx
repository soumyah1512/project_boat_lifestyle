import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { HomePage } from "../Components/homepage/HomePage";


const MainRoutes = () => {
    return (
    <>
        {/* <Routes>
            <Route path="/" exact>
                <Navbar />
                <HomePage />
                <Footer />
            </Route>

            <Route path="/pages/sound-of-champions">
                <Navbar />
                <Champions />
                <Footer />
            </Route>

            <Route path="/account/login">
                <Navbar />
                <Login />
                <Footer />
            </Route>

            <Route path="/account/register">
                <Navbar />
                <Register />
                <Footer />
            </Route>

            <Route path="/products/:productName">
                <Navbar />
                <ProductPage />
                <Footer />
            </Route>

            <Route path="/cart">
                <Navbar />
                <Cart/>
            </Route>

            <Route exact path="/successful">
                <Success />
            </Route>

            <Route path="/collections/:collectionName">
                <Navbar />
                <Collections />
                <Footer />
            </Route>

            <Route>
                <Navbar />
                <Error />
                <Footer />
            </Route>
        </Routes> */}
    </>    
    );
}
export { MainRoutes }