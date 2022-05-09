import "../../App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css";
import { useState } from "react";
import image from "../../AdminPhoto/imageIndex";
import { useNavigate } from "react-router-dom";

function AdminCategoryHeader() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <header className="admin-header">
      <div className="header-name w-screen flex items-center h-20 px-10 justify-between border-b border-grey300">
        <h1 className="text-xl font-medium">หมวดหมู่</h1>
        <div className="flex">
          <input
            id="search-text"
            name="search-text"
            type="text"
            placeholder="ค้นหาหมวดหมู่..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            value={search}
            className="border rounded-lg border-grey300"
            css={css`
              padding: 10px 0px 10px 16px;
            `}
          />
          <button
            className="btn-primary flex items-center ml-6"
            onClick={() => navigate("/category-dashboard")}
          >
            <div className="text-base font-medium mr-3">เพิ่มหมวดหมู่</div>
            <img src={image.plusSign} />
          </button>
        </div>

        {/* <div
        className="header-name w-screen flex items-center h-20 px-10 justify-between border-b border-grey300"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-medium">เพิ่มหมวดหมู่</h1>
        <div className="flex">
          <button
            className="btn-secondary flex items-center justify-center text-base font-medium w-28 h-11"
            onClick={() => navigate("/category-dashboard")}
          >
            ยกเลิก
          </button>
          <button
            className="btn-primary flex items-center justify-center ml-6 text-base font-medium w-28 h-11"
            type="submit"
            onClick={() => navigate("/category-dashboard")}
          >
            สร้าง
          </button>
        </div>*/}
      </div>
    </header>
  );
}

export default AdminCategoryHeader;
