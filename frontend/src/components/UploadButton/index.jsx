import { useState, useCallback } from "react";
import Input from "../Input";

import "./style.scss";

const UploadButton = ({ data, onDataUpload, setErrors }) => {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileUpload = useCallback(
    async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_KISI_BACKEND_API}/api/images`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          onDataUpload([...data, responseData.data]);
        } else {
          console.error("Upload failed:", response.status, response.statusText);
          setErrors((prevErr) => [...prevErr, "Upload failed"]);
        }
      } catch (error) {
        console.error("Error during upload:", error);
      }
    },
    [data, onDataUpload, setErrors]
  );

  let handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedFile(file);
        handleFileUpload(file);
        setSelectedFile("");
      }
    },
    [handleFileUpload]
  );

  return (
    <div className="file-upload">
      <div className="file-upload-container">
        <Input
          type="file"
          onChange={handleFileChange}
          value={selectedFile}
          id="image_uploads"
          className="file-upload-button"
          accept="image/*"
          labelText="Upload"
          labelClassName="file-upload-label"
        />
      </div>
    </div>
  );
};

export default UploadButton;
