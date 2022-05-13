import image from '../AdminPhoto/imageIndex'
import '../AdminPageStyle.css'
import SideBar from '../components/AdminCategoryPage/SideBar'
import adminCategories from './AdminCategoryPage/CategoriesData'

function AddService() {
  return (
    <div>
      <SideBar />
      <div className="edit-container">
        <div className="add-service-box ml-60">
          <form className="add-service-white-box bg-white min-h-screen mb-24 mt-10 mx-10 py-10 px-6">
            <div className="service-name h-11 w-8/12 mb-10 flex justify-between items-center pr-16">
              <label
                className="serviceName w-52 text-grey700 text-base font-medium"
                htmlFor="serviceName"
              >
                ชื่อบริการ
              </label>
              <input
                className="serviceName rounded-lg h-11 w-3/4 border border-grey300"
                type="text"
                name="serviceName"
              />
            </div>
            <div className="choose-category h-11 w-8/12 mb-10 flex justify-between items-center pr-16">
              <label
                className="chooseCategory w-52 text-grey700 text-base font-medium"
                htmlFor="chooseCategory"
              >
                หมวดหมู่
              </label>
              <select
                className="input-chooseCategory rounded-lg h-11 w-3/4 border border-grey300"
                type="text"
                name="chooseCategory"
              >
                {adminCategories.map((dt) => {
                  return (
                    <option value={dt.categoryName} key={dt.id}>
                      {dt.categoryName}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="choose-image h-40 w-8/12 pr-16 mb-10 flex justify-between">
              <div className="text-grey700 w-52 text-base font-medium">
                รูปภาพ
              </div>
              <div className="add-image w-3/4 h-40">
                <div className="h-36 border border-dashed border-grey300 rounded-md py-6 flex flex-col items-center justify-between text-grey700">
                  <img
                    className="w-9 h-9"
                    alt="addimage"
                    src={image.addPhoto}
                  />
                  <div className=" text-sm">
                    <button className="text-blue600 font-normal mr-2">
                      อัพโหลดรูปภาพ
                    </button>
                    หรือ ลากและวางที่นี่
                  </div>
                  <div className="text-xs">PNG, JPG ขนาดไม่เกิน 5MB</div>
                </div>
                <div className="text-grey700 text-xs">
                  ขนาดภาพที่แนะนำ: 1440 x 225 PX
                </div>
              </div>
            </div>
            <hr className="break-line mb-10 text-grey300"></hr>
            <div className="title mb-10 text-grey700 text-base font-medium">
              รายการบริการย่อย
            </div>
            <div className="add-details-box h-16 mb-10 pl-11 flex justify-between">
              <div className="flex flex-col w-2/5">
                <label
                  className="orderName text-sm text-grey700"
                  htmlFor="orderName"
                >
                  ชื่อรายการ
                </label>
                <input
                  className="orderName 
              rounded-lg h-11 border border-grey300"
                  type="text"
                  name="orderName"
                />
              </div>
              <div className="flex flex-col w-60">
                <label className="serviceCharge text-sm text-grey700">
                  ค่าบริการ / 1 หน่วย
                </label>
                <input
                  className="serviceCharge rounded-lg h-11 border border-grey300"
                  type="text"
                  name="serviceCharge"
                />
              </div>
              <div className="flex flex-col w-60">
                <label
                  className="unitService text-sm text-grey700"
                  htmlFor="unitService"
                >
                  หน่วยการบริการ
                </label>
                <input className="unitService rounded-lg h-11 border border-grey300" />
              </div>
              <button className="text-grey600 underline">ลบรายการ</button>
            </div>
            <button className="add-new-order h-11 w-48 bg-white text-blue600 rounded-lg border">
              เพิ่มรายการ +
            </button>
          </form>
        </div>
      </div>
      )
    </div>
  )
}

export default AddService
