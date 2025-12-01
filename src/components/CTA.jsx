import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col w-full bg-gradient-to-br from-[#1A1A32]/90 via-[#252545]/80 to-[#1A1A32]/90 backdrop-blur-lg rounded-2xl p-6 border-2 border-[#3A3A60]/50 relative overflow-hidden shadow-2xl`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold ss:text-[50px] text-[52px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-purple-400 relative drop-shadow-2xl ss:leading-[100.8px] leading-[75px]">
        Ensemble, protégeons les papillons !
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-3`}>
        Agissez avec nous pour préserver leur habitat.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <div class="relative">
        <div class="absolute -inset-1 bg-gradient-to-r from-yellow-500/40 via-yellow-400/50 to-yellow-500/40 rounded-xl blur-lg"></div>
        <button class="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-400 text-[#1A1A32] font-black py-3 px-6 rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden shadow-2xl border-2 border-yellow-300/50">
          <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-crown w-5 h-5 text-[#1A1A32] drop-shadow-sm"
            >
              <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
              <path d="M5 21h14"></path>
            </svg>
          </div>
          <span class="relative font-black tracking-wide drop-shadow-sm">
            <span> Start Now!</span>
          </span>
          <div class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-2 drop-shadow-sm"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
