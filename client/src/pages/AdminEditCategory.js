import '../App.css'
import '../AdminPageStyle.css'
import SideBar from '../components/AdminCategoryPage/SideBar'
import image from '../AdminPhoto/imageIndex'
import { useNavigate } from 'react-router-dom'

function AdminEditCategory() {
  const navigate = useNavigate()

  return (
    <div className="edit-container">
      <SideBar />
      <div className="header-and-content ml-60 h-screen">
        <header
          className="h-20 w-full flex items-center justify-between 
        border-b border-grey300 px-10 py-10 bg-white"
        >
          <div className="flex justify-between h-12 w-44">
            <button onClick={() => navigate('/category-dashboard')}>
              <img alt="Arrow Icon" src={image.arrow} className="w-10 h10" />
            </button>

            <div className="w-32 h-12">
              <div className="font-normal text-grey700 text-xs">หมวดหมู่</div>
              <div className="font-medium text-xl">บริการห้องครัว</div>
            </div>
          </div>
          <div className="buttons flex justify-between h-11 w-64 px-1">
            <button
              className="cancel-button 
            w-28 h-11 bg-white rounded-lg border border-blue600 text-blue600"
            >
              ยกเลิก
            </button>
            <button
              className="confirm-button 
          w-28 h-11 bg-blue600 rounded-lg text-white"
            >
              ยืนยัน
            </button>
          </div>
        </header>
        <div className="editCategory h-1/5 w-full py-14 px-10 flex flex-col ">
          <div className="editBox bg-white h-auto border border-grey200 rounded-lg px-6 py-10 w-full">
            <div className="input-box flex justify-between items-center h-11 w-3/5">
              <label className=" text-grey700">
                ชื่อหมวดหมู่<span className=" text-red">*</span>
              </label>
              <input
                className="rounded-lg border px-4 h-11 w-4/6"
                type="text"
              />
            </div>
            <hr className="border text-grey300 my-10 "></hr>
            <div
              className="time-line-category
             h-24 flex flex-col justify-between"
            >
              <div className="h-11 w-96 flex items-center justify-between">
                <div className="font-medium text-grey700 font-normal">
                  สร้างเมื่อ
                </div>
                <div>12/02/2022 10:30PM</div>
              </div>
              <div className="h-11 w-96 flex items-center justify-between">
                <div className="font-medium text-grey700 font-normal">
                  แก้ไขล่าสุด
                </div>
                <div>12/02/2022 10:30PM</div>
              </div>
            </div>
          </div>
          <div className="delete-button w-28 h-6 flex justify-between self-end mt-6 text-grey600 underline ">
            <img alt="Trash" className="w-6 h-6" src={image.trashIcon} />
            <button>ลบหมวดหมู่</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEditCategory
