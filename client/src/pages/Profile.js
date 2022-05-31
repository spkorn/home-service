import "../App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NavBar from "../CustomerServices/NavBar";
import image from "../HomePagePhoto/imageIndex";

function UserProfile() {
  const name = localStorage.getItem("name");
  const userPhoneNumber = localStorage.getItem("phoneNumber");
  const userEmail = localStorage.getItem("email");

  return (
    <div className="bg-bg">
      <Nav />
      <div className="h-24 bg-blue600 flex items-center justify-center">
        <h1 className="text-white text-[32px] font-medium">ข้อมูลผู้ใช้งาน</h1>
      </div>
      <div className="flex my-8 mx-0 justify-between w-screen px-[15vw]">
        <NavBar />
        <div className="p-6 w-full ml-10 h-full bg-white border border-grey300 rounded-lg flex-col items-center">
          <div
            className="w-44 bg-grey700 flex justify-center items-center
rounded-full border-8 border-grey600 mb-4"
          >
            <img
              className="rounded-full"
              src={image.avatar}
              alt="user's display"
            />
          </div>
          <label className="text-sm text-grey700 absolute bg-white font-normal z-20 ml-4">
            ชื่อ-นามสกุล
          </label>{" "}
          <input
            className="text-grey800 mt-2 w-[35vw] h-[44px] px-4 py-2.5 border rounded-lg border-grey300 relative"
            value={name}
            disabled
          />
          <h2 className="text-xl text-black font-normal my-5">
            อีเมล: <span className="text-grey800">{userEmail}</span>
          </h2>
          <h2 className="text-xl text-black font-normal my-5">
            เบอร์โทรศัพท์:{" "}
            <span className="text-grey800">{userPhoneNumber}</span>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
