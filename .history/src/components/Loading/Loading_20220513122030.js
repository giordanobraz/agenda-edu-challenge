import loadingImg from "../../assets/loading.svg";
import "./Loading.scss";

function Loading() {
  return (
    <div className="center">
      <img src={loadingImg} alt="Loading" width={50} />
    </div>
  );
}

export default Loading;
