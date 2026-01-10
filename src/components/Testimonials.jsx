import styles from "../style";

const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    role: "Amateur Naturalist",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    text: "This platform helped me identify different butterfly species and better understand their behavior in the wild.",
  },
  {
    id: 2,
    name: "Richard Nelson",
    role: "Nature Photographer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    text: "An amazing source of inspiration for my explorations. Every butterfly discovery feels like a unique visual adventure.",
  },
  {
    id: 3,
    name: "James Washington",
    role: "Biodiversity Enthusiast",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    text: "This site allowed me to deepen my knowledge of butterflies and share my discoveries with a passionate community.",
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
        Discover the beauty and diversity of butterflies through observations,
        photos, and stories shared by nature lovers around the world.
      </p>
    </div>

    {/* Cards */}
    <div className="flex flex-wrap justify-center gap-10 relative z-[1]">
      {testimonials.map((item) => (
        <div
          key={item.id}
          className="w-[300px] pt-16 pb-8 px-6 rounded-2xl
          bg-black-gradient border border-white/10
          hover:border-blue-500/50 transition-all duration-300"
        >
          {/* Avatar */}
          <div className="flex flex-col items-center relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover absolute -top-20 border-4 border-blue-500"
            />
            <div className="mt-10 text-center">
              <h3 className="text-white text-lg font-semibold">{item.name}</h3>
              <p className="text-dimWhite text-sm">{item.role}</p>
            </div>
          </div>

          {/* Text */}
          <p className="text-dimWhite text-center mt-6 text-sm leading-relaxed">
            “{item.text}”
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
