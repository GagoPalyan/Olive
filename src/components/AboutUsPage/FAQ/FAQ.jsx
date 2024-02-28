import style from "./FAQ.module.css";
import Title from "../../../sharedComponents/Title/Title";
import Questions from "./Questions/Questions";

function FAQ() {
  return (
    <section className={style.content}>
      <Title caption="FAQ" text="Friquently Asked Questions" />
      <h3>
        Hare You Can Find Friquently Asked Questions. We Help You To Find The
        Answer!
      </h3>
      <Questions question="How many meals should I eat per day?" />
      <Questions question="How can I maintain a healthy diet on a busy schedule?" />
      <Questions question="Are there specific diets that guarantee a healthy lifestyle?" />
      <Questions
        question="What constitutes a healthy lifestyle?"
        text="A healthy lifestyle involves a combination of balanced nutrition, regular physical activity, sufficient sleep, stress management, and avoiding harmful habits like smoking or excessive alcohol consumption. Nutrition is crucial for overall health. A healthy diet should include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. It provides essential nutrients and supports optimal body function."
      />
      <Questions question="How can I make healthier food choices at the grocery store?" />
      <Questions question="What are some healthy alternatives to sugary snacks?" />
      <Questions
        question="Are all fats bad for you?"
        text="No, not all fats are bad. Healthy fats, such as those found in avocados, nuts, and olive oil, are essential for bodily functions. It's important to limit saturated and trans fats."
      />
    </section>
  );
}

export default FAQ;
