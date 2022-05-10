import "../App.css";
import AdminCategories from "../components/AdminCategoryPage/CategoriesList";
import AdminCategoryHeader from "../components/AdminCategoryPage/AdminCategoryHeader";
import SideBar from "../components/AdminCategoryPage/SideBar";
import useSearchBox from "../hooks/util";

function AdminCategoryPage() {
  const { searchCategory, setSearchCategory, category, setCategory } =
    useSearchBox();
  return (
    <div className="admin-category-page">
      <SideBar />
      <AdminCategoryHeader
        setCategory={setCategory}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      <AdminCategories
        category={category}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
    </div>
  );
}

export default AdminCategoryPage;
