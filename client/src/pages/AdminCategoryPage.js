import '../App.css'
import AdminCategories from '../components/AdminCategoryPage/CategoriesList'
import AdminCategoryHeader from "../components/AdminCategoryPage/AdminCategoryHeader";
import SideBar from '../components/AdminCategoryPage/SideBar';

function AdminCategoryPage() {
  return (
    <div className="admin-category-page">
      <SideBar />
      <AdminCategoryHeader />
      <AdminCategories />
      
    </div>
  )
}

export default AdminCategoryPage
