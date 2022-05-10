/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SideBar from "../components/AdminCategoryPage/SideBar";
import axios from "axios";

function CreateCategory() {
  const navigate = useNavigate();
  const [category_name, setCategory_name] = useState("");
  const createCategory = async () => {
    await axios.post("http://localhost:4000/category", { category_name });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCategory();
    navigate("/category-dashboard");
  };

  return (
    <div
      className="create-category-container h-screen"
      css={css`
        background-color: #f3f4f6;
      `}
    >
      <SideBar />
      <form className="pl-60" onSubmit={handleSubmit}>
        <div className="header-name flex items-center h-20 px-10 justify-between border-b border-grey300 bg-white">
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
            >
              สร้าง
            </button>
          </div>
        </div>
        <div
          className="createCategory bg-white border border-grey200 flex items-center rounded-lg h-32"
          css={css`
            margin: 40px 24px 0px 40px;
            padding: 0px 24px;
          `}
        >
          <div
            className="inputForCreate flex justify-between items-center h-11"
            css={css`
              width: 662px;
            `}
          >
            <label className="h-6">
              ชื่อหมวดหมู่<span className="text-red">*</span>
            </label>
            <input
              required
              id="categoryName"
              name="categoryName"
              type="text"
              css={css`
                padding: 10px 0px 10px 16px;
                width: 433px;
                height: 44px;
              `}
              className="border rounded-lg border-grey300 focus:border-blue600 focus:outline-none"
              value={category_name}
              onChange={(event) => {
                setCategory_name(event.target.value);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateCategory;
