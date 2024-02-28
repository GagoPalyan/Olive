import style from "./Home.module.css";
import Find from "./Find/Find";
import VeryTasty from "./VeryTasty/VeryTasty";
import AboutHealthyLife from "./AboutHealthyLife/AboutHealthyLife";
import ImportentYourLife from "./ImportentYourLife/ImportentYourLife";
import HealthyTime from "./HealthyTime/HealthyTime";
import HealthyDiet from "./HealthyDiet/HealthyDiet";
import FeedbackProduct from "./FeedbackProduct/FeedbackProduct";

function Home() {
  return (
    <main className={style.main}>
      <Find />
      <VeryTasty />
      <AboutHealthyLife />
      <ImportentYourLife />
      <HealthyTime />
      <HealthyDiet />
      <FeedbackProduct />
    </main>
  );
}

export default Home;
