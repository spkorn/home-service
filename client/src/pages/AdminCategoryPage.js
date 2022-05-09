import '../App.css'
import AdminCategories from '../components/AdminCategoryPage/CategoriesList'
import AdminCategoryHeader from "../components/AdminCategoryPage/AdminCategoryHeader";

function AdminCategoryPage() {
  return (
    <div className="admin-category-page">
    <AdminCategoryHeader />
      <AdminCategories />
    </div>
  )
}

export default AdminCategoryPage
