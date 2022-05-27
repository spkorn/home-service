import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import InputAddress from "react-thailand-address-autocomplete";
// ลง package โดยใช้คำสั่ง npm install --save react-thailand-address-autocomplete

function TestInputPage() {
  const [dateTime, setDateTime] = useState(new Date());
  const today = new Date();
  const tomorrow = new Date(today).setDate(new Date(today).getDate() + 1);

  const [fullAddress, setFullAddress] = useState({
    address: "",
    subdistrict: "",
    district: "",
    province: "",
    zipcode: "",
  });

  const handleChangeAddress = (e) => {
    const temp = { ...fullAddress };
    temp.address = e;
    setFullAddress(temp);
  };

  const handleChangeSubDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.subdistrict = e;
    setFullAddress(temp);
  };

  const handleChangeDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.district = e;
    setFullAddress(temp);
  };

  const handleChangeProvince = (e) => {
    const temp = { ...fullAddress };
    temp.province = e;
    setFullAddress(temp);
  };

  const handleChangeZipcode = (e) => {
    const temp = { ...fullAddress };
    temp.zipcode = e;
    setFullAddress(temp);
  };

  const handleSelectAddress = (addresses) => {
    //const { address, subdistrict, district, province, zipcode } = addresses;
    setFullAddress({
      ...fullAddress,
      ...addresses,
    });
    // or setFullAddress({ address, subdistrict, district, province, zipcode, })
  };

  function toThaiDateString(date) {
    let monthNames = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม.",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];

    let year = date.getFullYear() + 543;
    let month = monthNames[date.getMonth()];
    let numOfDay = date.getDate();

    let hour = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let second = date.getSeconds().toString().padStart(2, "0");

    // return `${numOfDay} ${month} ${year} ` + `${hour}:${minutes}:${second} น.`;
    return `${numOfDay} ${month} ${year}`; // เอาแต่ วัน เดือน ปี ไม่เอาเวลา
  }

  console.log(fullAddress);
  console.log(toThaiDateString(dateTime));
  console.log(dateTime.toLocaleTimeString("th-TH")); // เวลาแบบ 24 ชั่วโมง

  const addressStyle = {
    marginTop: "0.5rem",
    width: "47vw",
    height: "44px",
    borderRadius: "0.5rem",
    padding: "0.625rem 1rem",
    borderWidth: "1px",
    borderColor: "#ccd0d7",
  };

  return (
    <div className=" px-6 pt-6 pb-8 flex flex-col justify-between border border-grey300 rounded-lg">
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="วันเวลาที่สะดวกใช้บริการ"
          value={dateTime}
          onChange={(newDateTime) => {
            setDateTime(newDateTime);
          }}
          minDate={tomorrow}
          //minDate={new Date()}
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
        />
      </LocalizationProvider> */}
      <form>
        <div className="w-full flex flex-col justify-between mt-4">
          <label>
            <h5 className="text-grey900">
              ที่อยู่<span className="text-red"> *</span>
            </h5>
            <InputAddress
              id="address"
              address="address"
              value={fullAddress.address}
              type="text"
              onChange={(e) => {
                handleChangeAddress(e.target.value);
              }}
              onSelect={(e) => {
                handleSelectAddress(e);
              }}
              style={addressStyle}
            />
          </label>
          <label>
            <h5 className="text-grey900">
              แขวง / ตำบล<span className="text-red"> *</span>
            </h5>
            <InputAddress
              id="subdistrict"
              address="subdistrict"
              value={fullAddress.subdistrict}
              type="text"
              onChange={(e) => {
                handleChangeSubDistrict(e.target.value);
              }}
              onSelect={(e) => {
                handleSelectAddress(e);
              }}
              style={addressStyle}
            />
          </label>
          <label>
            <h5 className="text-grey900">
              เขต / อำเภอ<span className="text-red"> *</span>
            </h5>
            <InputAddress
              id="district"
              address="district"
              value={fullAddress.district}
              type="text"
              onChange={(e) => {
                handleChangeDistrict(e.target.value);
              }}
              onSelect={(e) => {
                handleSelectAddress(e);
              }}
              style={addressStyle}
            />
          </label>
          <label>
            <h5 className="text-grey900">
              จังหวัด<span className="text-red"> *</span>
            </h5>
            <InputAddress
              id="province"
              address="province"
              value={fullAddress.province}
              type="text"
              onChange={(e) => {
                handleChangeProvince(e.target.value);
              }}
              onSelect={(e) => {
                handleSelectAddress(e);
              }}
              style={addressStyle}
            />
          </label>
          {/* <label>
          <h5 className="text-grey900">
            รหัสไปรษณีย์<span className="text-red"> *</span>
          </h5>
          <InputAddress
            address="zipcode"
            value={fullAddress.zipcode}
            onChange={(e) => {
              handleChangeZipcode(e.target.value);
            }}
            onSelect={(e) => {
              handleSelectAddress(e);
            }}
            style={addressStyle}
          />
        </label> */}
        </div>
      </form>
    </div>
  );
}

export default TestInputPage;
