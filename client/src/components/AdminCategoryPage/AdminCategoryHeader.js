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
    <header className="admin-header ">
      <div className="header-name pl-60 w-screen flex items-center h-20 pr-10 justify-between border-b border-grey300 ">
        <h1 className="text-xl font-medium pl-10">หมวดหมู่</h1>
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
            onClick={() => navigate("/create-category")}
          >
            <div className="text-base font-medium mr-3">เพิ่มหมวดหมู่</div>
            <img src={image.plusSign} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminCategoryHeader;
