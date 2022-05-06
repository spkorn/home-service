/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../../App.css"
import image from "../../HomePagePhoto/imageIndex.js";

function ServiceHeader() {
  return (
    <div className="service-header">
          <div className="w-screen">
              <img src={image.banner} />
          </div>
    </div>
  );
}

export default ServiceHeader;
