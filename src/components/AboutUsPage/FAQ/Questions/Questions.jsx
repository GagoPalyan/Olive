import style from "./Questions.module.css";

function Questions({ question, text = null }) {
  return (
    <div className={style.questions}>
      <h2>{question}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default Questions;
