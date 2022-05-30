import image from "../CustomerPhoto/imageIndex";
import "../App.css"
import { useNavigate } from "react-router-dom";

function NavBar() {
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();
  return (
    <aside className="h-full w-[15vw] border border-grey300 rounded-lg px-6 pt-6 pb-[18px] bg-white">
      <div className="text-grey700 text-xl font-normal leading-[150%]">
        บัญชีผู้ใช้
      </div>
      <hr className="text-grey300 mt-5 mb-4" />
      <nav className="w-[180px]">
        <div className="flex justify-between items-center h-12 cursor-pointer" onClick={() => navigate("/profile")}>
          <img className="w-6 h-6" alt="Person Icon" src={image.personIcon} />
          <p className="w-[80%] text-grey950 font-normal no-underline">
            ข้อมูลผู้ใช้งาน
          </p>
        </div>
        <div className="flex justify-between items-center h-12 cursor-pointer" onClick={() => navigate(`/order-history/${user_id}`)}>
          <img className="w-6 h-6" alt="Time" src={image.time} />
          <p className="w-[80%] text-grey950 font-normal no-underline">
            ประวัติการซ่อม
          </p>
        </div>
      </nav>
    </aside>
  );
}

export default NavBar;
