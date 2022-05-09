import "../../App.css";
import image from "../../HomePagePhoto/imageIndex";
import icon from "../../AdminPhoto/imageIndex";
import { useNavigate } from "react-router-dom";

function LeftNav() {
  const navigate = useNavigate();
  return (
    <div className="left-nav w-60 h-screen bg-blue950 top-0 z-10 fixed">
      <div className="flex justify-center my-8">
        <div className="py-2 px-2.5 bg-blue100 rounded-xl w-48 h-12 flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-7 h-7 mr-1.5" src={image.logoHomeService} />
          <p className=" text-blue500 font-medium text-xl">HomeServices</p>
        </div>
      </div>
      <div>
        <div className="hover:bg-blue900 h-12 my-1 cursor-pointer pt-3">
          <img className="inline-block w-5 mr-2 ml-7" src={icon.category} alt="หมวดหมู่"/>
          <a className="h-14 text-grey100 font-medium text-base no-underline">
            หมวดหมู่
          </a>
        </div>
        <div className="hover:bg-blue900 h-12 my-1 cursor-pointer pt-3">
          <img className="inline-block w-5 mr-2 ml-7" src={icon.service} alt="บริการ"/>
          <a className="h-14 text-grey100 font-medium text-base no-underline ">
            บริการ
          </a>
        </div>
        <div className="hover:bg-blue900 h-12 my-1 cursor-pointer pt-3">
          <img className="inline-block h-5 mr-2 ml-7" src={icon.coupon} alt="Promotion Code"/>
          <a className="h-14 text-grey100 font-medium text-base no-underline">
            Promotion Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftNav;
