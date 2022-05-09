/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import icons from '../../AdminPhoto/imageIndex'
import adminCategories from './CategoriesData'
import '../../App.css'

export default function AdminCategories() {
  return (
    <div
      className="categories-data"
      css={css`
        width: 1200px;
        height: 994px;
        background: #e5e5e5;
        padding: 41px;
        border: 0.5px solid #e6e7eb;
      `}
    >
      <div
        css={css`
          width: 1120px;
          height: 305px;
          border-radius: 5px;
        `}
      >
        <div
          className="table header"
          css={css`
            width: 1120px;
            height: 41px;
            background-color: #efeff2;
            color: #646c80;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            align-items: center;
            padding-left: 56px;
            border-radius: 5px 5px 0px 0px;
          `}
        >
          <h5
            className="order number"
            css={css`
              width: 80px;
              padding: 24px;
            `}
          >
            ลำดับ
          </h5>
          <h5
            className="categoryName"
            css={css`
              width: 262px;
              padding: 24px;
            `}
          >
            ชื่อหมวดหมู่
          </h5>
          <h5
            className="createdDate"
            css={css`
              width: 245px;
              padding: 24px;
            `}
          >
            สร้างเมื่อ
          </h5>
          <h5
            className="lastEdited"
            css={css`
              width: 357px;
              padding: 24px;
            `}
          >
            แก้ไขล่าสุด
          </h5>
          <h5
            className="action"
            css={css`
              width: 120px;
              padding: 24px;
            `}
          >
            Action
          </h5>
        </div>
        {adminCategories.map((categoryData) => {
          return (
            <div
              key={categoryData.id}
              className="data-category-box"
              css={css`
                width: 1120px;
                height: 88px;
                background-color: #ffff;
                display: flex;
                justify-content: space-between;
                border: 0.5px solid #e6e7eb;
              `}
            >
              <div
                className="data-category"
                css={css`
                  width: 888px;
                  height: 88px;
                  padding-left: 56px;
                  display: flex;
                  align-items: center;
                `}
              >
                <div
                  className="order-number"
                  css={css`
                    width: 80px;
                    text-align: center;
                  `}
                >
                  {categoryData.order}
                </div>
                <div
                  className="category-name"
                  css={css`
                    width: 262px;
                    padding: 24px;
                  `}
                >
                  {categoryData.categoryName}
                </div>
                <div
                  css={css`
                    width: 245px;
                    padding: 24px;
                  `}
                >
                  {categoryData.createdDate}
                </div>
                <div
                  css={css`
                    width: 245px;
                    padding: 24px;
                  `}
                >
                  {categoryData.lastEdited}
                </div>
              </div>
              <div
                className="icons-box"
                css={css`
                  width: 120px;
                  height: 88px;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                `}
              >
                <img
                  alt="Delete"
                  src={icons.trashIcon}
                  css={css`
                    width: 24px;
                    height: 24px;
                  `}
                />
                <img
                  alt="Edit"
                  src={icons.editIcon}
                  css={css`
                    width: 24px;
                    height: 24px;
                  `}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
