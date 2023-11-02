import Card from "./Card/index";
import UploadButton from "./UploadButton";
import HeadingText from "./Heading-Text";

import "./MosaicLayout.scss";

function MosaicLayout({
  imageData,
  setErrors,
  errors,
  error,
  loading,
  setImageData,
}) {
  return (
    <>
      {!loading && (
        <div className="mosaic-layout">
          <HeadingText />
          {!error &&
            imageData &&
            imageData.length &&
            imageData.map((item, id) => <Card key={id} {...item} />)}
        </div>
      )}
      <UploadButton
        errors={errors}
        setErrors={setErrors}
        data={imageData}
        onDataUpload={setImageData}
      />
    </>
  );
}

export default MosaicLayout;
