import Card from "./Card/index";
import UploadButton from "./UploadButton";
import { useFetchData } from "../hooks/useFetchData";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

import "./MosaicLayout.scss";

function MosaicLayout() {
  const {
    data: imageData,
    setData: setImageData,
    error,
    loading,
  } = useFetchData(`${process.env.REACT_APP_KISI_BACKEND_API}/api/images`);

  return (
    <>
      {error && <ErrorMessage message={error && error.message} />}
      {loading && !imageData.length && <Loading />}
      <div className="mosaic-layout">
        {!error &&
          imageData &&
          imageData.length &&
          imageData.map((item, id) => <Card key={id} {...item} />)}
        <UploadButton data={imageData} onDataUpload={setImageData} />
      </div>
    </>
  );
}

export default MosaicLayout;
