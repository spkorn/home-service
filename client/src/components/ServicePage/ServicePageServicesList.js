/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import image from '../../ServicePagePhoto/imageIndex'

function ServicesList() {
  return (
    <div
      className="our-services"
      css={css`
        width: 1440px;
        height: 1384px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className="service-box"
        css={css`
          width: 1121px;
          height: 1203px;
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;
          grid-template-rows: 2fr 2fr 1fr;
        `}
      >
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        {/* {8 boxes} */}
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                  border-bottom-left-radius: 8px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>

        <div
          className="service-card"
          css={css`
            width: 349px;
            height: 369px;
            background-color: #ffff;
            border: 1px solid #ccd0d7;
            border-radius: 8px;
          `}
        >
          <img
            src={image.cleanAirConditioner}
            alt="Fix air conditioner"
            css={css`
              width: 349px;
              height: 200px;
              border-radius: 8px 8px 0px 0px;
            `}
          />
          <div
            className="service-description"
            css={css`
              margin: 16px 24px;
            `}
          >
            <div
              className="category-name"
              css={css`
                height: 26px;
                width: 79px;
                background-color: #e7eeff;
                border-radius: 8px;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #0e3fb0;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
              `}
            >
              บริการทั่วไป
            </div>
            <h2>ล้างแอร์</h2>
            <div
              css={css`
                height: 21px;
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #646c80;
                margin: 4px 0px 22px 0px;
              `}
            >
              <img
                src={image.tagIcon}
                alt="Price Tag"
                css={css`
                  width: 16px;
                  height: 16px;
                  margin-right: 9.33px;
                `}
              />
              ค่าบริการประมาณ 500.00 - 1,000.00 ฿
            </div>
            <a href>เลือกบริการ</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServicesList
