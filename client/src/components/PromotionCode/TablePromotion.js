import tw from 'tailwind-styled-components/dist/tailwind'

function TablePromotion() {
  const TH = tw.th`text-sm text-gray-700 leading-[150%] font-normal not-italic px-6`
  const TD = tw.td`text-base font-light not-italic px-6 rounded-lg`
  const Discount = tw.td`text-[#C82438] text-base font-light not-italic px-6`

  return (
    <div className="w-full m-[50px]">
      <table className="w-full text-left rounded-lg overflow-hidden">
        <tr className="bg-gray-100 h-[41px] border-collapse border border-gray-200">
          <TH className="">Promotion Code</TH>
          <TH>ประเภท</TH>
          <TH>โควต้าการใช้(ครั้ง)</TH>
          <TH>ราคาที่ลด</TH>
          <TH>สร้างเมื่อ</TH>
          <TH>วันหมดอายุ</TH>
          <TH>
            <div className="w-[120px] text-center">Action</div>
          </TH>
        </tr>
        {FakeData.map((data) => {
          return (
            <tr
              key={data.id}
              className="h-[88px] last:rounded-br-lg border border-gray-200 "
            >
              <TD>{data.code}</TD>
              <TD>{data.type}</TD>
              <TD>{data.timeforuse}</TD>
              <Discount>{data.discount}</Discount>
              <TD>{data.createdate}</TD>
              <TD>{data.usebefore}</TD>
              <TD>
                <div className="w-[120px] flex justify-between text-center px-[42px]">
                  <img className="w-6  h-6" alt="Delete" src="" />
                  <img className="w-6  h-6" alt="Edit" src="" />
                </div>
              </TD>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default TablePromotion
