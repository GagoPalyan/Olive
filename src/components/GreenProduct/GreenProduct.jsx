import DetoxSmoothiesImg from "./DetoxSmoothiesImg/DetoxSmoothiesImg";
import DetoxSmoothies from "./DetoxSmoothies/DetoxSmoothies";
import style from "./GreenProduct.module.css";

function GreenProduct() {
  return (
    <main className={style.content}>
      <DetoxSmoothiesImg />
      <DetoxSmoothies />
    </main>
  );
}

export default GreenProduct;
