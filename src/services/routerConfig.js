import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Page404 from "../pages/Page404";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoutes from "./PrivateRoutes";
import AuthLayout from "../components/AuthLayout";
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/HistoryPage";
import ProfilePage from "../pages/ProfilePage";
import TransactionPage from "../pages/TransactionPage";
import ContactUsPage from "../pages/ContactUsPage";
import ProfileEditPage from "../pages/ProfileEditPage";
import DetailItemPage from "../pages/DetailItemPage";
import SearchPage from "../pages/SearchPage";
import RecentViewedPage from "../pages/RecentViewedPage";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutPageStatus from "../pages/CheckoutPageStatus";
import ArticlePage from "../pages/ArticlePage";

export const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="*" element={<Page404 />} />
            <Route path="/" redirect element={<Navigate to="/home" />} />
            <Route path="/delisome.github.io" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes />}>
                <Route element={<AuthLayout />}>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/history' element={<HistoryPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/transaction' element={<TransactionPage />} />
                </Route>
                <Route path='/contact-us' element={<ContactUsPage />} />
                <Route path='/profile-edit' element={<ProfileEditPage />} />
                <Route path='/detail-item' element={<DetailItemPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/recent-viewed' element={<RecentViewedPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/checkout-status' element={<CheckoutPageStatus />} />
                <Route path='/article' element={<ArticlePage />} />
            </Route>
        </>
    )
);