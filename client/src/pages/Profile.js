import "../App.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NavBar from "../CustomerServices/NavBar";
import image from "../HomePagePhoto/imageIndex";
import { useUser } from "../hooks/user";

function UserProfile() {
  const { loginName,
    userPhoneNumber,
    userEmail,
    loginRole } = useUser();

  return (
    <div className="bg-bg">
      <Nav />
      <div className="h-24 bg-blue600 flex items-center justify-center">
        <h1 className="text-white text-[32px] font-medium">ข้อมูลผู้ใช้งาน</h1>
      </div>
      <div className="flex my-8 mx-0 justify-between px-[15vw]">
        <NavBar />
        <section className="p-8 w-full ml-10 h-full bg-white border border-grey300 rounded-lg flex justify-evenly items-center">
            <img
              className="w-48 shadow-xl mr-8 rounded-full relative z-10"
              src={image.avatar}
              alt="user's display"
            />
          <div className="flex-col items-center">
            {loginRole === "admin" ? (
            <div className="bg-stone px-2.5 py-1 w-fit rounded-md text-xs text-white mt-4">
              administrator
            </div>
          ) : loginRole === "customer" ? (
            <div className="bg-cyan px-2.5 py-1 w-fit rounded-md text-xs text-white mt-4">
              customer
            </div>
          ) : null}
            <div className="my-4">
              <label className="text-sm text-grey700 absolute bg-gradient-to-b from-white via-white font-normal z-20 ml-4">
                ชื่อ-นามสกุล
              </label>{" "}
              <input
                className="text-grey800 mt-2 w-[25vw] h-[44px] px-4 py-2.5 border rounded-lg border-grey300 relative"
                value={loginName}
                disabled
              />
            </div>
            <div className="my-4">
              <label className="text-sm text-grey700 absolute bg-gradient-to-b from-white via-white font-normal z-20 ml-4">
                อีเมล
              </label>{" "}
              <input
                className="text-grey800 mt-2 w-[25vw] h-[44px] px-4 py-2.5 border rounded-lg border-grey300 relative"
                value={userEmail}
                disabled
              />
            </div>
            <div className="my-4">
              <label className="text-sm text-grey700 absolute bg-gradient-to-b from-white via-white font-normal z-20 ml-4">
                เบอร์โทรศัพท์
              </label>{" "}
              <input
                className="text-grey800 mt-2 w-[25vw] h-[44px] px-4 py-2.5 border rounded-lg border-grey300 relative"
                value={userPhoneNumber}
                disabled
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
