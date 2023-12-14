import React from 'react';
import HomePage from './pages/HomePage';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PrivateRoutes from './services/PrivateRoutes';
import Page404 from './pages/Page404';
import LoginPage from './pages/LoginPage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import TransactionPage from './pages/TransactionPage';
import AuthLayout from './components/AuthLayout';
import RegisterPage from './pages/RegisterPage';
import ContactUsPage from './pages/ContactUsPage';
import ProfileEditPage from './pages/ProfileEditPage';
import DetailItemPage from './pages/DetailItemPage';
import SearchPage from './pages/SearchPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Page404 />} />
        <Route path="/delisome.github.io" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" redirect element={<Navigate to="/login" />} />
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
        </Route>
      </>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
