import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
//import InputThaiAddress from "thai-address-autocomplete-react";
import InputAddress from "react-thailand-address-autocomplete";

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
    //setFullAddress({ address: e });
    setFullAddress(temp);
  };

  const handleChangeSubDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.subdistrict = e;
    //setFullAddress({ subdistrict: e });
    setFullAddress(temp);
  };

  const handleChangeDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.district = e;
    //setFullAddress({ district: e });
    setFullAddress(temp);
  };

  const handleChangeProvince = (e) => {
    const temp = { ...fullAddress };
    temp.province = e;
    //setFullAddress({ province: e });
    setFullAddress(temp);
  };

  const handleChangeZipcode = (e) => {
    const temp = { ...fullAddress };
    temp.zipcode = e;
    //setFullAddress({ zipcode: e });
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

  return (
    <div className="m-9">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
      </LocalizationProvider>

      <div>
        {/* <label>ที่อยู่</label>
        <br />
        <input
          className="h-9 w-32 py-2.5 pl-4 border rounded-lg border-grey300 focus:border-blue600 focus:outline-none"
          address="address"
          value={fullAddress.address}
          onChange={(e) => {
            handleChangeAddress(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <br /> */}
        {/* <label>ที่อยู่</label>
        <InputThaiAddress
          field={"address"}
          value={fullAddress.address}
          onChange={(e) => {
            handleChangeAddress(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>แขวง / ตำบล</label>
        <InputThaiAddress
          field={"subdistrict"}
          value={fullAddress.subdistrict}
          onChange={(e) => {
            handleChangeSubDistrict(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>เขต / อำเภอ</label>
        <InputThaiAddress
          address="district"
          value={fullAddress.district}
          onChange={(e) => {
            handleChangeDistrict(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>จังหวัด</label>
        <InputThaiAddress
          address="province"
          value={fullAddress.province}
          onChange={(e) => {
            handleChangeProvince(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>รหัสไปรษณีย์</label>
        <InputThaiAddress
          address="zipcode"
          value={fullAddress.zipcode}
          onChange={(e) => {
            handleChangeZipcode(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        /> */}

        <label>ที่อยู่</label>
        <InputAddress
          address="address"
          value={fullAddress.address}
          onChange={(e) => {
            handleChangeAddress(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>แขวง / ตำบล</label>
        <InputAddress
          address="subdistrict"
          value={fullAddress.subdistrict}
          onChange={(e) => {
            handleChangeSubDistrict(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>เขต / อำเภอ</label>
        <InputAddress
          address="district"
          value={fullAddress.district}
          onChange={(e) => {
            handleChangeDistrict(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>จังหวัด</label>
        <InputAddress
          address="province"
          value={fullAddress.province}
          onChange={(e) => {
            handleChangeProvince(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
        <label>รหัสไปรษณีย์</label>
        <InputAddress
          address="zipcode"
          value={fullAddress.zipcode}
          onChange={(e) => {
            handleChangeZipcode(e.target.value);
          }}
          onSelect={(e) => {
            handleSelectAddress(e);
          }}
        />
      </div>
    </div>
  );
}

export default TestInputPage;
