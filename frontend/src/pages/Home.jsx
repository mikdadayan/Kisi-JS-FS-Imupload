import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";

import Loading from "../components/Loading";
import MosaicLayout from "../components/MosaicLayout";

const Home = () => {
  const [errors, setErrors] = useState([]);

  const {
    data: imageData,
    setData: setImageData,
    error,
    loading,
  } = useFetchData(`${process.env.REACT_APP_KISI_BACKEND_API}/api/images`);

  return (
    <div className="home">
      {error && <ErrorMessage message={error && error.message} />}
      {errors &&
        errors.length > 0 &&
        errors.map((error, id) => <ErrorMessage key={id} message={error} />)}
      {loading && !imageData.length && <Loading />}
      <MosaicLayout
        imageData={imageData}
        setErrors={setErrors}
        errors={errors}
        error={error}
        loading={loading}
        setImageData={setImageData}
      />
    </div>
  );
};

export default Home;
