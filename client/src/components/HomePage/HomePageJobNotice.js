import '../../App.css'
import image from '../../HomePagePhoto/imageIndex.js'

function HomePageJobNotice() {
  return (
    <div className="job-notice-component relative">
      <div className="flex bg-blue600">
        <img src={image.jobNoticeWorker} alt="job-notice-worker" />

        <div className="flex flex-col pl-36 py-6 justify-evenly">
          <h1 className="text-white font-semibold text-[40px]">
            มาร่วมเป็นพนักงานซ่อม
            <br />
            กับ HomeServices
          </h1>
          <p className="text-white font-normal text-xl leading-[150%]">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
            <br />
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </p>
          <h2 className="text-white font-normal text-[32px] leading-[150%]">
            ติดต่อมาที่อีเมล: job@homeservices.co
          </h2>
        </div>
        <div className="absolute bottom-0 right-2 mix-blend-screen">
          <img src={image.jobNoticeHouseLogo} alt="job-notice-house" />
        </div>
      </div>
    </div>
  )
}

export default HomePageJobNotice
