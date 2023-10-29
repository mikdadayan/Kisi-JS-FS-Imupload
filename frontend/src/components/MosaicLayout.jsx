import React, { useState, useEffect } from "react";
import Card from "./Card";

import "./MosaicLayout.scss";
import UploadButton from "./UploadButton";

const KISI_BACKEND_API = "http://localhost:8000";

function MosaicLayout() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetch(`${KISI_BACKEND_API}/api/images`)
      .then((response) => response.json())
      .then((data) => setImageData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="mosaic-layout">
      {imageData.map((item, id) => (
        <Card key={id} {...item} />
      ))}
      <UploadButton data={imageData} onDataUpload={setImageData} />
    </div>
  );
}

export default MosaicLayout;
