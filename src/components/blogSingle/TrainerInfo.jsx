import styles from "./blogSingle.module.css";
import photo from "../../assets/blog9.png";

const TrainerInfo = () => {
  return (
    <div className={`${styles["trainer-info"]} sections-padding`}>
      <img src={photo} alt="" />
      <h4>Benjamin Gray</h4>
      <p>Professional Trainer</p>
      <p>
        When an unknown printegalley of type and scrambled it to make a type
        specimen book. It has but also leap into electronic typesetting.
      </p>
      <a href="https://www.linkedin.com/in/pratham-attri-7676301a0/overlay/contact-info/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default TrainerInfo;
