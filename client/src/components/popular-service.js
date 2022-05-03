/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../App.css";
import image from "../HomePagePhoto/imageindex";

function PopularService() {
  return (
    <div className="popular-service">
      <h1 className="text-blue950 text-center mt-20">บริการยอดฮิตของเรา</h1>
      <div className="flex flex-row w-screen justify-center">
        <div
          className="border border-grey300 border-solid rounded-lg"
          css={css`
            width: 349px;
            height: 369px;
            margin: 42px 18px 60px 18px;
          `}
        >
          <img
            className="rounded-t-lg"
            src={image.general}
            alt="ทำความสะอาดทั่วไป"
          />
          <div className="ml-6">
            <p className="bg-blue100 px-2.5 py-1 mt-4 w-fit rounded-lg text-blue800 text-xs">
              บริการทั่วไป
            </p>
            <h2 className="text-grey950 mt-2">ทำความสะอาดทั่วไป</h2>
            <div className="flex mb-6">
              <img src={image.tag} alt="tag" />
              <p className="text-grey700 text-sm ml-2.5">
                ค่าบริการประมาณ 500.00 - 1,000.00 ฿
              </p>
            </div>
            <a href="/">เลือกบริการ</a>
          </div>
        </div>
        <div
          className="flex-col border border-grey300 border-solid rounded-lg"
          css={css`
            width: 349px;
            height: 369px;
            margin: 42px 18px 60px 18px;
          `}
        >
          <img className="rounded-t-lg" src={image.air} alt="ล้างแอร์" />
          <div className="ml-6">
            <p className="bg-blue100 px-2.5 py-1 mt-4 w-fit rounded-lg text-blue800 text-xs">
              บริการทั่วไป
            </p>
            <h2 className="text-grey950 mt-2">ล้างแอร์</h2>
            <div className="flex mb-6">
              <img src={image.tag} alt="tag" />
              <p className="text-grey700 text-sm ml-2.5">
                ค่าบริการประมาณ 500.00 - 1,000.00 ฿
              </p>
            </div>
            <a href="/">เลือกบริการ</a>
          </div>
        </div>
        <div
          className="flex-col border border-grey300 border-solid rounded-lg"
          css={css`
            width: 349px;
            height: 369px;
            margin: 42px 18px 60px 18px;
          `}
        >
          <img
            className="rounded-t-lg"
            src={image.washingMachine}
            alt="ซ่อมเครื่องซักผ้า"
          />
          <div className="ml-6">
            <p className="bg-blue100 px-2.5 py-1 mt-4 w-fit rounded-lg text-blue800 text-xs">
              บริการทั่วไป
            </p>
            <h2 className="text-grey950 mt-2">ซ่อมเครื่องซักผ้า</h2>
            <div className="flex mb-6">
              <img src={image.tag} alt="tag" />
              <p className="text-grey700 text-sm ml-2.5">
                ค่าบริการประมาณ 500.00 ฿
              </p>
            </div>
            <a href="/">เลือกบริการ</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-screen">
        <button
          className="btn-primary"
          css={css`
            width: 155px;
            height: 44px;
          `}
        >
          ดูบริการท้ังหมด
        </button>
      </div>
    </div>
  );
}

export default PopularService;
