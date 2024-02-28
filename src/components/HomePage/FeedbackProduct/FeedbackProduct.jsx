import Star from "../../../sharedComponents/Star/Star";
import Title from "../../../sharedComponents/Title/Title";
import style from "./FeedbackProduct.module.css";
import FeedbackProductList from "./FeedbackProductList/FeedbackProductList";

function FeedbackProduct() {
  return (
    <section className={style.content}>
      <Title caption="reviwe" text="Customer feedback on the product" />
      <div className={style.carusel}>
        {FeedbackProductList.map((item) => {
          return (
            <div
              key={item.id}
              className={item.active ? style.active : style.cart}
            >
              <div className={style.stars}>
                {item.stars.map((el, index) => {
                  return el ? (
                    <Star
                      key={index}
                      starFill={true}
                      star={
                        item.active
                          ? { width: "17", height: "14" }
                          : { width: "11", height: "10" }
                      }
                    />
                  ) : (
                    <Star
                      key={index}
                      starFill={false}
                      star={
                        item.active
                          ? { width: "17", height: "14" }
                          : { width: "11", height: "10" }
                      }
                    />
                  );
                })}
              </div>
              <h1>{item.name}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className={style.buttons}>
        {FeedbackProductList.map((item, index) => {
          return (
            <button
              key={index}
              style={item.active ? { backgroundColor: "#afb293" } : null}
              className={style.Btn}
            ></button>
          );
        })}
      </div>
    </section>
  );
}

export default FeedbackProduct;
