import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1>Who we are</h1>

      <div className={styles.details}>
        <p>
          Our store is the leading online marketplace in whole world, empowering
          tens of thousands of sellers to connect with millions of customers.
          Our store provides immediate and easy access to 10 million products in
          more than 100+ categories and delivers more than 2 million packages
          every month to all corners of its countries.
        </p>
        <p>
          Our store is a mall, a marketplace and a community for its customers.
          It is also a university for entrepreneurs, and every month it educates
          more than 5,000 new sellers on e-commerce operations. To overcome the
          logistics challenge in its markets, Our store has built its own
          logistics company specifically designed for e-commerce operations -
          Our store Express (known as DEX) - to raise the standards for the
          industry.
        </p>
        <p>
          Our store is also helping existing and new logistics providers
          digitize. In 2018, Our store was acquired by other store Group, and is
          proud to carry its part of the mission to 'make it easy to do business
          anywhere in the era of the digital economy'. As part of the other
          store ecosystem, Our store is leveraging other store's global
          leadership and experience in technology, online commerce, mobile
          payments and logistics to drive growth in its markets.
        </p>
      </div>
    </div>
  );
};

export default About;
