import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Billling,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Premium from "./components/Premium";

const App = () => (
  <div className="bg-primary w-full overflow-hidden sm:px-8">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} sm:px-5`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <Billling />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
