import "../../App.css";
import image from "../../ServicePagePhoto/imageIndex";

function SubmitTab(props) {
  return (
    <footer className="w-full flex justify-between items-center bg-white h-[92px] px-[10vw] border-t border-grey300 fixed bottom-0 ">
      <button className="btn-secondary" onClick={props.onClickBack}>
        <img src={image.BackBlue} className="inline " alt="ย้อนกลับ" /> ย้อนกลับ{" "}
      </button>
      <button className="btn-primary" onClick={props.onClickNext}>
        {props.next} <img src={image.BackWhite} className="inline" alt={props.next} />
      </button>
    </footer>
  );
}

export default SubmitTab;
