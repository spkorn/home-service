import "../../App.css";
import { useEffect } from "react";

function AdminOrderHeader(props) {
  const { searchOrder, setSearchOrder, searchOrderData} = props;

  useEffect(() => {
    searchOrderData();
  }, [searchOrder]);

  return (
    <header className="sticky top-0 bg-white">
      <div className="pl-60 flex items-center h-20 pr-10 justify-between border-b border-grey300 ">
        <h1 className="text-xl font-medium pl-10">รายการคำสั่งซ่อม</h1>
        <div className="flex">
          <input
            id="search-text"
            name="search-text"
            type="text"
            placeholder="ค้นหารายการคำสั่งซ่อม..."
            onChange={(event) => {
              setSearchOrder(event.target.value);
            }}
            value={searchOrder}
            className="border rounded-lg border-grey300 px-4 py-2.5"
          />
        </div>
      </div>
    </header>
  );
}

export default AdminOrderHeader;
