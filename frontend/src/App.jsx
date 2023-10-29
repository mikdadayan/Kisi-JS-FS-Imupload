import "./App.scss";
import MosaicLayout from "./components/MosaicLayout";

console.log(process.env);

const App = () => {
  console.log("=====>", process.env.KISI_BACKEND_API);
  return (
    <div className="app">
      <MosaicLayout />
    </div>
  );
};

export default App;
