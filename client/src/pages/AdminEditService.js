/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import SideBar from "../components/AdminCategoryPage/SideBar";
import ServiceEditForm from "../components/AdminServicePage/EditForm";
import useUtils from "../hooks/utils";

function AdminEditService() {
  const {
    getServiceById,
    service,
    getCategory,
    category,
    setService,
    setCategory_name,
    category_name,
    service_name,
    setService_name,
    editHeader,
    setEditHeader,
  } = useUtils();
  return (
    <div>
      <SideBar />
      <ServiceEditForm
        getServiceById={getServiceById}
        service={service}
        getCategory={getCategory}
        category={category}
        setService={setService}
        setCategory_name={setCategory_name}
        category_name={category_name}
        service_name={service_name}
        setService_name={setService_name}
        editHeader={editHeader}
        setEditHeader={setEditHeader}
      />
    </div>
  );
}

export default AdminEditService;
