import "./App.css";

function App() {
  return (
    <div class="App text-white p-4">
      <div
        class="power min-h-screen"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/files/space.jpeg"
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <nav>
          <div class=" max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
              <div class="flex space-x-4">
                <div>
                  <a
                    href="/#"
                    class="flex items-center py-5 px-3 text-gray-700"
                  >
                    <div
                      class="rounded-full w-16 h-16 lg:w-32  lg:h-32"
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/files/header.png"}
                        alt="site_logo"
                      />
                    </div>
                  </a>
                </div>

                <div class="hidden md:flex  items-center space-x-1 px-6">
                  <a
                    href="/#"
                    class="py-5 px-3 text-md lg:text-xl"
                    style={{ fontWeight: 400 }}
                  >
                    Gen1 Mecha
                  </a>
                  <a
                    href="https://mechaodyssey.xyz/"
                    class="py-5 px-3 text-md lg:text-xl "
                    style={{ fontWeight: 400 }}
                  >
                    Game{" "}
                  </a>
                  <a
                    href="#roadmap"
                    class="py-5 px-3 text-md lg:text-xl "
                    style={{ fontWeight: 400 }}
                  >
                    Roadmap
                  </a>
                </div>
              </div>

              <div class="hidden md:flex  items-center">
                <a
                  href="https://game.mechaodyssey.xyz/"
                  class="py-1 px-5 bg-white text-black rounded-full transition duration-300 text-2xl"
                  style={{ fontWeight: 400 }}
                >
                  Play
                </a>
              </div>

              {/* mobile button heere */}

              <div class="md:hidden flex items-center">
                <button class="mobile-menu-button">
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* mobile btn edns here */}
            </div>
          </div>

          {/* mobile-menu */}

          <div class="mobile-menu hidden">
            <a href="/#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              {" "}
              Gen 1 Mecha
            </a>
            <a
              href="https://mechaodyssey.xyz/"
              class="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              {" "}
              Game
            </a>
            <a href="/#" class="block py-2 px-4 text-sm hover:bg-gray-200">
              {" "}
              Roadmap
            </a>
          </div>
        </nav>

        <div class="icon">
          <img
            class="mx-auto w-auto xl:h-48 h-48 xl:my-32 my-32"
            src="https://res.cloudinary.com/dqzpz4w3l/image/upload/v1643123509/Official_duswtm.png"
            alt="icon"
          />

          <p
            class="-mt-500 text-center break-normal text-sm sm:text-5xl lg:text-2xl"
            style={{ fontWeight: 400 }}
          >
            A utility NFT shoot em up inspired by arcade 2D classics
          </p>

          <br></br>

          <a
            href="https://opensea.io/collection/mechaodysseyx"
            target="_blank"
            rel=" noreferrer"
            class=" text-sm sm:text-4xl lg:text-xl mb-20 py-3 sm:px-8 px-4 bg-white text-black transition duration-300 rounded-full"
          >
            Purchase Mech
          </a>
        </div>
        <span class="inline-flex sm:ml-auto sm:mt-8 mt-4 justify-center ">
          <a
            href="https://Twitter.com/mechaodysseyx"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="w-10 h-10"
            >
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
            </svg>
          </a>
          <a
            href="https://t.co/JM2cEOKgTj"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="w-10 h-10"
            >
              <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
            </svg>
          </a>

          <a
            href="https://medium.com/@MechaOdysseyX"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="w-10 h-10"
            >
              {" "}
              <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z" />
            </svg>
          </a>
        </span>
      </div>

      <div style={{ backgroundColor: "#070B39" }}>
        <div class="flex justify-center">
          <div class="container">
            <h3 class="p-20 text-center justify-center sm:text-3xl text-sm">
              A squadron of 6 generation 1 Mech are being deployed into the
              metaverse to defend Earth <br></br> from digital alien forces.
            </h3>

            <br></br>

            <h3 class="text-center justify-center  sm:text-3xl text-sm">
              Choose between 6 Mech Machine Cartridges that allow you
              to pilot & boot your<br></br> Mech for the first mission and your
              call to serve planet Earth
            </h3>
          </div>
        </div>

        {/* DIV CARDS */}
        <br></br>

        <div class="flex justify-center">
          <div class="container sm:px-0 px-4">
            <div class="grid grid-cols-2 gap-2 md:flex items-center md:justify-between md:px-14">
              <div
                class="w-140 h-165 md:w-224 md:h-257"
                style={{ background: "#141950", borderRadius: 7 }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/files/Kabagif256.gif"}
                  alt="Kabagi"
                  style={{ width: 195, height: 179 }}
                />

                <h3>Kaba</h3>
              </div>
              <div
                class="w-140 h-165 md:w-224 md:h-257"
                style={{
                  background: "#141950",
                  borderRadius: 7,
                  marginTop: 200,
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/files/Zenith.gif"}
                  alt="Zenith"
                  style={{ width: 195, height: 179 }}
                />

                <h3>Zenith</h3>
              </div>
              <div
                class="w-140 h-165 md:w-224 md:h-257"
                style={{ background: "#141950", borderRadius: 7 }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/files/Novagif256 (1).gif"}
                  alt="Zenith"
                  style={{ width: 195, height: 179 }}
                />

                <h3>Nova</h3>
              </div>
              <div
                class="w-140 h-165 md:w-224 md:h-257"
                style={{
                  background: "#141950",
                  borderRadius: 7,
                  marginTop: 200,
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/files/Valkyriegif256.gif"}
                  alt="Valkyrie"
                  style={{ width: 195, height: 179 }}
                />

                <h3>Valkyrie</h3>
              </div>
              <div
                class="w-140 h-165 md:w-224 md:h-257"
                style={{ background: "#141950", borderRadius: 7 }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/files/Tank.gif"}
                  alt="Tank"
                  style={{ width: 195, height: 179 }}
                />

                <h3>HB-Tank</h3>
              </div>
              <div
                class="w-140 h-165 md:w-224 md:h-257"
                style={{
                  background: "#141950",
                  borderRadius: 7,
                  marginTop: 200,
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/files/Phantom.gif"}
                  alt="phantom"
                  style={{ width: 195, height: 179 }}
                />

                <h3>Phantom</h3>
              </div>
            </div>
          </div>
        </div>

        {/* PARAGRAPH TEXT */}

        <div class="flex justify-center">
          <div class="container">
            <div
              class=" md:flex md:justify-between md:text-center text-center"
              style={{ wordWrap: "normal" }}
            >
              <h4 class="p-20 text-center justify-center w-280 h-68 md:w-1069 md:h-170 sm:text-3xl text-sm">
                Earn power ups while you defend and conquer different parts of
                the metaverse to earn Credence*, a future token of the game
                economy that allows players to enter high score competitions, stake, buy
                skins, upgrades, worlds
              </h4>
            </div>
          </div>
        </div>

        {/* game features */}
        <div class="flex items-center justify-between px-4">
          <div class=" flex-col justify-center lg:visible lg:block invisible hidden  ">
            <img
              class="-pb-20 "
              src={process.env.PUBLIC_URL + "/files/+100 image.png"}
              alt="+100"
            />
            <img
              class="pl-14 "
              src={process.env.PUBLIC_URL + "/files/+100 image.png"}
              alt="+100"
            />

            <img
              class="-pb-20 "
              src={process.env.PUBLIC_URL + "/files/+100 image.png"}
              alt="+100"
            />
            <img
              class="pl-14 "
              src={process.env.PUBLIC_URL + "/files/+100 image.png"}
              alt="+100"
            />
          </div>

          <div class="flex items-center lg:p-0 p-32">
            <div class="flex flex-col items-center mx-auto">
              <img
                src={process.env.PUBLIC_URL + "/files/power ups mox.png"}
                alt="power"
                style={{ width: 473, height: 320, marginTop: -400 }}
              />

                <br></br><br></br><br></br>

              <div>
                <h2 class="md:text-3xl text-sm">
                  
                  You must own a Mech Machine Cartridge to play or else you must
                  deposit Credence*
                  
                </h2>
              </div>
            </div>
            <div class="lg:visible lg:block invisible hidden ">
              <img
                class="-pb-20"
                src={process.env.PUBLIC_URL + "/files/+100 image.png"}
                alt="+100"
              />
              <img
                class="pl-14"
                src={process.env.PUBLIC_URL + "/files/+100 image.png"}
                alt="+100"
              />

              <img
                class="-pb-20"
                src={process.env.PUBLIC_URL + "/files/+100 image.png"}
                alt="+100"
              />
              <img
                class="pl-14"
                src={process.env.PUBLIC_URL + "/files/+100 image.png"}
                alt="+100"
              />
            </div>
          </div>
        </div>
        {/* ROADMAP */}

        <a href name="roadmap" id="roadmap">
          <h2 style={{ fontSize: 40 }}>ROADMAP</h2>

          {/* TImELINE 'flex-start' */}

          <div
            class="container  mx-auto px-10 sm:w-13  md:left-50+'%' md:w-50 pb-16"
            style={{}}
          >
            <div class="relative wrap overflow-hidden sm:p-10 p-0 h-full">
              <div
                class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left sm:visible invisible"
                style={{ left: 50 + "%" }}
              ></div>

              <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">1</h1>
                </div>
                <div class="order-1  rounded-lg shadow-xl sm:w-5/12 w-full text-left px-6 py-4">
                  <hr class="h-2.5 w-64"></hr>
                  <p class="sm:text-sm text-xs font-medium leading-snug tracking-wide text-white text-opacity-100">
                    Mecha Odyssey X does a STEALTH airdrop and opens Discord
                  </p>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 pt-2">
                    Mecha and art from the featured artist Cypress Dahlia will
                    be shared and previewed. Chances for limited whitelist
                    opportunities will be rewarded through Twitter and Discord.
                  </p>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 pt-2">
                    Mint date, prices and quantities will be annouced during
                    this stage. Be ready. Suit up.
                  </p>
                </div>
              </div>

              <div class="mb-8 flex justify-between items-center w-full left-timeline">
                <div class="order-1 sm:w-5/12  "></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
                </div>
                <div class="order-1  rounded-lg shadow-xl sm:w-5/12 w-full text-left px-6 py-4">
                  <hr style={{ height: 10, width: 300 }} class="m-0"></hr>
                  <p class="text-sm leading-snug tracking-wide text-white-900 text-opacity-100">
                    Mint day. 6 different Mecha Machine Cartidges go on sale at
                    different prices based on scarcity.
                  </p>
                  <p class="text-sm leading-snug tracking-wide text-white-900 text-opacity-100 pt-2">
                    48hrs after mint more art will be revealed and some
                    giveaways and contest for the community.
                  </p>
                </div>
              </div>

              <div class="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">3</h1>
                </div>
                <div class="order-1  rounded-lg shadow-xl sm:w-5/12 w-full text-left px-6 py-4">
                  <hr style={{ height: 10, width: 237 }} class="m-0"></hr>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    Mecha Odyssey X will be a fun, progressive game that will
                    integrate the Web3 experience and Defi to play, build,
                    upgrade, stake and yield.
                  </p>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 pt-2">
                    75% of all funds from mint will be reinvested into the
                    development and release of Mecha Odyssey X and the space
                    banking station & 25% to the team and Artist
                  </p>
                </div>
              </div>

              <div class="mb-8 flex justify-between items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
                </div>
                <div class="order-1  rounded-lg shadow-xl sm:w-5/12 w-full text-left px-6 py-4">
                  <hr style={{ height: 10, width: 237 }} class="m-0"></hr>
                  <p class="text-sm leading-snug tracking-wide text-white-900 text-opacity-100">
                    Mecha Machine Cartridge owners will be airdropped two
                    different tokens, Credence* and Odyssey*.
                  </p>
                  <p class="text-sm leading-snug tracking-wide text-white-900 text-opacity-100 ">
                    These two tokens will represent the in-game economy and the
                    Mecha Odyssey X project as a whole.
                  </p>
                </div>
              </div>

              <div class=" flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 class="mx-auto text-white font-semibold text-lg">5</h1>
                </div>
                <div class="order-1  rounded-lg shadow-xl sm:w-5/12 w-full text-left px-6 py-4">
                  <hr style={{ height: 10, width: 237 }} class="m-0"></hr>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    Launch the first Mission of Mecha Odyssey X and the
                    community will start this journey together, shooting up any
                    opposition raking up points and credence to upgrade, enter
                    contests, stake and build. Join us as we build out the game
                    integrating the resources Web3 has to offer.
                  </p>
                  <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 pt-2">
                    More airdrops and giveaways as we move along this odyssey.
                    WAGMI. Peace
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINESTOP */}
        </a>
      </div>

      {/* last section */}

      <div class=" mx-auto py-16" style={{ backgroundColor: "#141950" }}>
        <div class="flex items-center px-15">
          <div
            class="rounded-full flex items-center mx-auto px-15 py-10 w-40 h-36 "
            style={{
              backgroundColor: "white",
              marginTop: 15,
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/files/header.png"}
              alt="site_logo"
            />
          </div>
        </div>
        <br></br>

        <h3 style={{ fontWeight: 400 }} class="text-sm sm:text-3xl py-2">
          Artist : Cypress Dahlia
        </h3>

        <h3 style={{ fontWeight: 400 }} class="text-sm sm:text-3xl py-2">
          Designed by Juschief.eth
        </h3>

        <h3 style={{ fontWeight: 400 }} class="text-sm sm:text-3xl py-2">
          Developed by Juschief.eth and Anon Alex
        </h3>

        <br></br>

        <hr></hr>
        <br></br>

        <a
          href="https://game.mechaodyssey.xyz/"
          class="py-1 px-5 bg-white text-black rounded-full transition duration-300 text-3xl"
          style={{ fontWeight: 400, marginTop: 40 }}
        >
          Play
        </a>

        <br></br>
        <br></br>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center ">
          <a
            href="https://Twitter.com/mechaodysseyx"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="w-8 h-8"
            >
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
            </svg>
          </a>
          <a
            href="https://t.co/JM2cEOKgTj"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="w-8 h-8"
            >
              <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@MechaOdysseyX"
            target="_blank"
            rel="noreferrer"
            class="ml-3 text-gray-500"
          >
            <svg
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              class="w-8 h-8"
            >
              {" "}
              <path d="M45,4H5C4.448,4,4,4.448,4,5v40c0,0.552,0.448,1,1,1h40c0.552,0,1-0.448,1-1V5C46,4.448,45.552,4,45,4z M40,13.5 l-1.821,2.197C38.064,15.811,38,15.965,38,16.125V32.75c0,0.16,0.064,0.314,0.179,0.428L40,35.546V36H30v-0.454l2.821-2.368 C32.936,33.064,33,32.91,33,32.75V17.879L24.848,36h-0.001h-1.543l0,0L15,18.375v13.108c0,0.22,0.076,0.433,0.215,0.605L18,35.546 V36h-8v-0.454l2.783-3.438C12.923,31.936,13,31.721,13,31.5V16.388c0-0.142-0.05-0.279-0.142-0.388L11,13.5V13h7.097l7.624,16.183 L33.002,13H40V13.5z" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
