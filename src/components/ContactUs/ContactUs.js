import Image from "./../../images/image.jpeg";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1>Get in touch</h1>
      <div className={styles.form}>
        <form>
          <input type="text" placeholder="Full Name" required />
          <select>
            <option value="0" selected>Select</option>
            <option value="feedback">Feedback</option>
            <option value="suggestion">Suggestion</option>
          </select>
          <input type="email" placeholder="Email Address" required />
          <textarea cols="30" rows="5" placeholder="Message"></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
