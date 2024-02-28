import { Link } from "react-router-dom";
import style from "./PageLocation.module.css";

function PageLocation({ prevPages, thisPage }) {
  return (
    <section className={style.content}>
      {prevPages.map((page, index) => {
        return (
          <div key={index}>
            <Link to={page.path}>{page.name}</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="8"
              viewBox="0 0 9 8"
              fill="none"
            >
              <path
                d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM8.35355 4.35355C8.54882 4.15829 8.54882 3.84171 8.35355 3.64645L5.17157 0.464466C4.97631 0.269204 4.65973 0.269204 4.46447 0.464466C4.2692 0.659728 4.2692 0.976311 4.46447 1.17157L7.29289 4L4.46447 6.82843C4.2692 7.02369 4.2692 7.34027 4.46447 7.53553C4.65973 7.7308 4.97631 7.7308 5.17157 7.53553L8.35355 4.35355ZM1 4.5H8V3.5H1V4.5Z"
                fill="#212311"
              />
            </svg>
          </div>
        );
      })}
      <p>{thisPage}</p>
    </section>
  );
}

export default PageLocation;
