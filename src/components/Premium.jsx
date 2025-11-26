const Premium = () => {
  return (
    <div class="max-w-7xl mx-auto px-4 py-6 relative z-30">
      <div class="absolute top-3 right-3 z-50">
        <button
          class='text-[#A0A0B0] transition-all duration-300 p-2 rounded-full backdrop-blur-sm border border-white/10 relative z-50 hover:text-white hover:bg-white/10 cursor-pointer"}'
          aria-label="Close promotion"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:justify-between gap-6">
        <div class="space-y-4 w-full md:max-w-sm flex flex-col items-center md:items-start">
          <div class="space-y-4 flex flex-col items-center md:items-start">
            <div class="flex items-center space-x-3">
              <div class="h-8 w-1 bg-gradient-to-b from-yellow-400 via-yellow-300 to-purple-500 rounded-full"></div>
              <div class="flex items-center gap-3">
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
                    class="lucide lucide-crown h-6 w-6 text-yellow-400 drop-shadow-lg"
                  >
                    <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </div>
                <span class="text-yellow-400 text-sm font-bold tracking-widest uppercase drop-shadow-sm">
                  Subscription
                </span>
              </div>
            </div>
            <h2 class="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-purple-400 relative drop-shadow-2xl">
                Fetra+ Faneva
                <div class="absolute -top-2 -right-2 text-yellow-400">
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
                    class="lucide lucide-sparkles h-5 w-5 drop-shadow-lg"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>
                </div>
              </span>
            </h2>
          </div>
          <div class="flex flex-col items-center md:items-start space-y-3 w-full">
            <div class="flex items-baseline">
              <span class="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-purple-400 drop-shadow-2xl">
                $1.67
              </span>
              <span class="text-[#BBBBBB] text-lg ml-2 font-medium">/</span>
              <span class="text-white font-bold text-xl ml-2 drop-shadow-lg">
                MONTH
              </span>
            </div>
            <div class="bg-gradient-to-r from-yellow-900/30 via-yellow-800/20 to-purple-900/30 backdrop-blur-md border-2 border-yellow-400/40 rounded-xl px-4 py-3 mt-4 w-full max-w-sm relative overflow-hidden shadow-2xl">
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div class="flex items-center justify-center md:justify-start gap-3 relative z-10">
                <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400/40 to-purple-400/40 border-2 border-yellow-400/60 shadow-lg">
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
                    class="lucide lucide-check w-4 h-4 text-yellow-200 font-bold"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <p class="text-white font-medium">
                  <span class="font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-purple-300 drop-shadow-lg">
                    Unlock Premium
                  </span>
                  <span class="text-yellow-100 font-semibold drop-shadow-sm">
                    features!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:max-w-sm space-y-4">
          <div class="w-full bg-gradient-to-br from-[#1A1A32]/90 via-[#252545]/80 to-[#1A1A32]/90 backdrop-blur-lg rounded-2xl p-6 border-2 border-[#3A3A60]/50 relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 w-20 h-20">
              <div class="absolute top-0 right-0 w-full h-full overflow-hidden">
                <div class="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-yellow-400/30 to-purple-400/30 transform rotate-45 translate-x-6 -translate-y-6 rounded-sm"></div>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
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
                  class="lucide lucide-shield h-6 w-6 text-yellow-400 drop-shadow-lg"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <span class="drop-shadow-sm">Premium Benefits</span>
            </h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-4 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/25 to-purple-400/25 border-2 border-yellow-400/40 text-yellow-400 group-hover:from-yellow-400/40 group-hover:to-purple-400/40 group-hover:border-yellow-400/70 transition-all duration-300 shadow-lg">
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
                    class="lucide lucide-zap w-5 h-5 flex-shrink-0 drop-shadow-sm"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <span class="text-base font-medium text-white group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-sm">
                  Ad-free reading experience
                </span>
              </li>
              <li class="flex items-center gap-4 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/25 to-purple-400/25 border-2 border-yellow-400/40 text-yellow-400 group-hover:from-yellow-400/40 group-hover:to-purple-400/40 group-hover:border-yellow-400/70 transition-all duration-300 shadow-lg">
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
                    class="lucide lucide-star w-5 h-5 flex-shrink-0 drop-shadow-sm"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                </div>
                <span class="text-base font-medium text-white group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-sm">
                  Early access to new chapters
                </span>
              </li>
              <li class="flex items-center gap-4 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/25 to-purple-400/25 border-2 border-yellow-400/40 text-yellow-400 group-hover:from-yellow-400/40 group-hover:to-purple-400/40 group-hover:border-yellow-400/70 transition-all duration-300 shadow-lg">
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
                    class="lucide lucide-user w-5 h-5 flex-shrink-0 drop-shadow-sm"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span class="text-base font-medium text-white group-hover:text-yellow-100 transition-colors duration-300 drop-shadow-sm">
                  Animated profile picture &amp; Badge
                </span>
              </li>
              <li class="flex items-center gap-4 group">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/25 to-purple-400/25 border-2 border-yellow-400/40 text-yellow-400 group-hover:from-yellow-400/40 group-hover:to-purple-400/40 group-hover:border-yellow-400/70 transition-all duration-300 shadow-lg">
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
                    class="lucide lucide-plus w-5 h-5 flex-shrink-0 drop-shadow-sm"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <span class="text-base font-medium ">
                  <span class="text-yellow-300 hover:text-yellow-200 transition-all duration-300 flex items-center gap-2 font-medium">
                    And more
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
                      class="lucide lucide-arrow-right w-4 h-4 inline-block transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </span>
              </li>
            </ul>
          </div>
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
                <span>Login &amp; Subscribe Now!</span>
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
      </div>
    </div>
  );
};

export default Premium;
