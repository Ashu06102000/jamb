const Footer = () => {
  return (
    <footer className="w-full p-4 sm:p-8 bg-secondryColor">
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
            >
              hello@jamb.co.uk
            </a>
          </div>
          <div className="xl:block hidden"></div>
          <div className="xl:col-span-2 col-span-3 flex flex-col gap-3">
            <h4 className="font-medium text-base text-customGray leading-6">
              Newsletter
            </h4>
            <div className="flex items-center border bg-white border-gray-300">
              <input
                className="flex-1 w-full text-base px-4 py-2 bg-transparent placeholder-customGray text-customGray border-none focus:outline-none placeholder-leading-[31px]"
                type="text"
                placeholder="Search"
              />
              <button className="font-medium h-full text-base text-customGray leading-6 px-6 py-2 bg-white  border-l border-customGray  hover:bg-gray-100 focus:outline-none">
                Subscribe
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <input
                className="bg-transparent border-customGray custom-radio"
                type="radio"
                name="radio"
                id="radio"
              />
              <p className="font-medium text-base text-customGray leading-6">
                I agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 col-span-5 gap-4 xl:gap-10">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">Reproduction Chimneypieces</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">Marble</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Stone</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Grates & Accessories</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Guide to Jamb Marbles</a>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">Antique Chimneypieces</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">French & Italian</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Georgian</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Regency</a>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-customGray border-t flex flex-col gap-3  w-full">
              <h3 className="font-semibold text-base text-black leading-6">Antique Chimneypieces</h3>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">Reproduction Lighting</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">Hanging Globes</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Hanging Lanterns</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Wall Lights</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Dish Lights</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Table Lamps</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Chains & Brackets</a>
                </li>
              </ul>
            </div>
           
          </div>
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">Reproduction Furniture</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">Seating</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Tables</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Mirrors</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">The Pantry Collection</a>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">Antique Furniture</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">Seating</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Tables</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Desks</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Bookcases & Cabinets</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Chests</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Mirrors</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Fire Accessories</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Objects</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Works of Arts</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Lighting</a>
                </li>
              </ul>
            </div>
           
          </div>
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">Journal</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">Praesentium</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Voluptatibus</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Accusamus</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Iusto</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Dignissimos</a>
                </li>
              </ul>
            </div>
           
          </div>
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="pt-4 border-customGray border-t flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-base text-black leading-6">About</h3>
              <ul>
                <li className="flex flex-col gap-2">
                  <a className="font-medium text-base text-customGray leading-6" href="#">Founders</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Team</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">History</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Galleries</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Workshops</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Showrooms</a>
                  <a className="font-medium text-base text-customGray leading-6" href="#">Term & Conditions</a>
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
