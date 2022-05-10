import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ServicePage from './ServicePage'
import AdminCategories from '../components/AdminCategoryPage/CategoriesList'
import CreateCategory from '../pages/CreateCategoryPage'
import '../App.css'

function UnauthenticatedApp() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/category-dashboard" element={<AdminCategories />} />
        <Route path="/create-category" element={<CreateCategory />} />
      </Routes>
    </div>
  )
}

export default UnauthenticatedApp
