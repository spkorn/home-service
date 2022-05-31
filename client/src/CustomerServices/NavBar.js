import image from "../CustomerPhoto/imageIndex";
import icon from "../HomePagePhoto/imageIndex"
import "../App.css"
import { useNavigate } from "react-router-dom";

function NavBar() {
  const user_id = localStorage.getItem("user_id");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  return (
    <aside className="h-full w-[20vw] border border-grey300 rounded-lg px-6 pt-6 pb-[18px] bg-white">
      <div className="text-grey700 text-xl font-normal leading-[150%]">
        บัญชีผู้ใช้
      </div>
      <hr className="text-grey300 my-3" />
      <nav className="w-[180px]">
        <div className="flex justify-between items-center h-10 cursor-pointer" onClick={() => navigate("/profile")}>
          <img className="w-6 h-6" alt="Person Icon" src={image.personIcon} />
          <p className="w-[80%] text-grey950 font-normal no-underline hover:text-blue700">
            ข้อมูลผู้ใช้งาน
          </p>
        </div>
        {role==="admin" ? <div className="flex justify-between items-center h-10 cursor-pointer" onClick={() => navigate("/category-dashboard")}>
          <img className="w-6 h-6" alt="Time" src={icon.orderIcon} />
          <p className="w-[80%] text-grey950 font-normal no-underline hover:text-blue700">
           Admin
          </p>
        </div> : <div className="flex justify-between items-center h-10 cursor-pointer" onClick={() => navigate(`/order-history/${user_id}`)}>
          <img className="w-6 h-6" alt="Time" src={image.time} />
          <p className="w-[80%] text-grey950 font-normal no-underline hover:text-blue700">
            ประวัติการซ่อม
          </p>
        </div>}
      </nav>
    </aside>
  );
}

export default NavBar;
