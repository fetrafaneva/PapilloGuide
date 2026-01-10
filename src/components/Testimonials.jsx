import styles from "../style";

const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    text: "Everything you need to accept card payments and grow your business anywhere on the planet.",
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "Instagram Influencer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    text: "Everything you need to accept card payments and grow your business anywhere on the planet.",
  },
  {
    id: 3,
    name: "James Washington",
    role: "Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    text: "Everything you need to accept card payments and grow your business anywhere on the planet.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 justify-center mt-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 22 20" fill="none">
        <path
          d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
          fill="#3b82f6"
        />
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Gradient */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* Header */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-10 relative z-[1]">
      <h2 className={styles.heading2}>
        Ce que disent <br className="sm:block hidden" /> les passionnés
      </h2>
      <p className={`${styles.paragraph} max-w-[450px] md:mt-0 mt-6`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
  </section>
);

export default Testimonials;
