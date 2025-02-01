const Footer = () => {
  return (
    <footer
      className="w-full p-4 sm:p-8 bg-secondryColor"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="text-4xl max-w-1436 mx-auto grid grid-cols-5 gap-8">
        <div className="grid grid-cols-1 xl:grid-cols-5 col-span-5 xl:w-full w-fit gap-10">
          <div className="flex flex-col items-start">
            <span className="font-medium text-base text-customGray leading-6">
              Tel: +44 (0) 207 730 2122
            </span>
            <span className="font-medium text-base text-customGray leading-6">
              95–97 Pimlico Rd
            </span>
            <span className="font-medium text-base text-customGray leading-6">
              London SW1W 8PH
            </span>
          </div>
          <div className="flex flex-col items-start">
            <a
              className="font-medium text-base text-customGray leading-6"
              href="mailto:hello@jamb.co.uk"
              aria-label="Send an email to hello@jamb.co.uk"
            >
              hello@jamb.co.uk
            </a>
          </div>
          <div className="xl:block hidden"></div>

          <div className="xl:col-span-2 col-span-3 flex flex-col gap-3">
            <h4 className="font-medium text-base text-customGray leading-6">
              Newsletter
            </h4>
            <div
              className="flex items-center border bg-white border-gray-300"
              role="form"
              aria-label="Newsletter subscription form"
            >
              <input
                className="flex-1 w-full text-base px-4 py-2 bg-transparent placeholder-customGray text-customGray border-none focus:outline-none placeholder-leading-[31px]"
                type="text"
                placeholder="Search"
                aria-label="Enter your email to subscribe"
              />
              <button
                className="font-medium h-full text-base text-customGray leading-6 px-6 py-2 bg-white border-l border-customGray hover:bg-gray-100 focus:outline-none"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <input
                className="bg-transparent border-customGray custom-radio"
                type="radio"
                name="radio"
                id="radio"
                aria-label="I agree to our Privacy Policy"
              />
              <label
                htmlFor="radio"
                className="font-medium text-base text-customGray leading-6"
              >
                I agree to our Privacy Policy
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 col-span-5 gap-4 xl:gap-10">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Reproduction Chimneypieces
              </h3>
              <ul role="list" aria-label="Reproduction Chimneypieces links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Marble Chimneypieces"
                  >
                    Marble
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Stone Chimneypieces"
                  >
                    Stone
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Grates and Accessories"
                  >
                    Grates & Accessories
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Guide to Jamb Marbles"
                  >
                    Guide to Jamb Marbles
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Antique Chimneypieces
              </h3>
              <ul role="list" aria-label="Antique Chimneypieces links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="French and Italian Chimneypieces"
                  >
                    French & Italian
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Georgian Chimneypieces"
                  >
                    Georgian
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Regency Chimneypieces"
                  >
                    Regency
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Sell an Antique Chimneypiece
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Reproduction Lighting
              </h3>
              <ul role="list" aria-label="Reproduction Lighting links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Hanging Globes"
                  >
                    Hanging Globes
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Hanging Lanterns"
                  >
                    Hanging Lanterns
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Wall Lights"
                  >
                    Wall Lights
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Dish Lights"
                  >
                    Dish Lights
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Table Lamps"
                  >
                    Table Lamps
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Chains and Brackets"
                  >
                    Chains & Brackets
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Reproduction Furniture
              </h3>
              <ul role="list" aria-label="Reproduction Furniture links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Seating"
                  >
                    Seating
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Tables"
                  >
                    Tables
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Mirrors"
                  >
                    Mirrors
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="The Pantry Collection"
                  >
                    The Pantry Collection
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Antique Furniture
              </h3>
              <ul role="list" aria-label="Antique Furniture links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Seating"
                  >
                    Seating
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Tables"
                  >
                    Tables
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Desks"
                  >
                    Desks
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Bookcases and Cabinets"
                  >
                    Bookcases & Cabinets
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Chests"
                  >
                    Chests
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Mirrors"
                  >
                    Mirrors
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Fire Accessories"
                  >
                    Fire Accessories
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Objects"
                  >
                    Objects
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Works of Arts"
                  >
                    Works of Arts
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Lighting"
                  >
                    Lighting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                Journal
              </h3>
              <ul role="list" aria-label="Journal links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Praesentium"
                  >
                    Praesentium
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Voluptatibus"
                  >
                    Voluptatibus
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Accusamus"
                  >
                    Accusamus
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Iusto"
                  >
                    Iusto
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Dignissimos"
                  >
                    Dignissimos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">
                About
              </h3>
              <ul role="list" aria-label="About links">
                <li className="flex flex-col gap-2">
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Founders"
                  >
                    Founders
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Team"
                  >
                    Team
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="History"
                  >
                    History
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Galleries"
                  >
                    Galleries
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Workshops"
                  >
                    Workshops
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Showrooms"
                  >
                    Showrooms
                  </a>
                  <a
                    className="font-medium text-base text-customGray leading-6"
                    href="#"
                    aria-label="Terms and Conditions"
                  >
                    Term & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
