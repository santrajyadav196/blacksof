import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url(/footer-bg.jpg)", // update this path
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right bottom",
      }}
      className="text-black bg-footer bg-no-repeat bg-cover bg-right-bottom blade-top-padding blade-bottom-padding border-t border-opacity-10"
    >
      <div className="w-container max-w-screen-lg mx-auto px-4 py-10">
        <div>
          {/* Logo */}
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={148} height={44} />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
            {/* Applications */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 font-semibold uppercase text-opacity-90">
                Applications
              </li>
              <li>
                <Link
                  href="/applications/apparel"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/automotive"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/filtration"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Filtration
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/customised-nonwoven"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Customised Nonwoven
                </Link>
              </li>
            </ul>

            {/* Company */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 uppercase font-bold">Company</li>
              <li>
                <Link
                  href="/who-we-are"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/global-competency"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Global Competency
                </Link>
              </li>
              <li>
                <Link
                  href="/innovation"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/esg-impact"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  ESG Impact
                </Link>
              </li>
            </ul>

            {/* More */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 font-semibold uppercase text-opacity-90">
                More
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Careers
                </Link>
              </li>
            </ul>

            {/* Follow Us */}
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="mb-2 font-semibold uppercase text-opacity-90">
                Follow Us
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/supreme-group-company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm font-normal transition-all duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          <div className="grid grid-cols-2 md:hidden items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-6 2xl:mt-10 mt-8">
            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-opacity-90">
                Applications
              </li>
              <li>
                <Link
                  href="/applications/apparel"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/automotive"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Automotive
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/filtration"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Filtration
                </Link>
              </li>
              <li>
                <Link
                  href="/applications/customised-nonwoven"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Customised Nonwoven
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="uppercase font-bold">Company</li>
              <li>
                <Link
                  href="/who-we-are"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/global-competency"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Global Competency
                </Link>
              </li>
              <li>
                <Link
                  href="/innovation"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Innovation
                </Link>
              </li>
              <li>
                <Link
                  href="/esg-impact"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  ESG Impact
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-opacity-90">More</li>
              <li>
                <Link
                  href="/contact-us"
                  className="xl:text-base text-sm text-black text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100"
                >
                  Careers
                </Link>
              </li>
            </ul>

            <ul className="grid sm:gap-5 gap-3 text-black list-none">
              <li className="font-semibold uppercase text-opacity-90">
                Follow Us
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/supreme-group-company/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap xl:text-base text-sm font-normal transition-all duration-300"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex gap-3 md:flex-row flex-col  justify-between items-center blade-top-padding-xl mt-20">
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            ©{new Date().getFullYear()}. All Rights Reserved.
          </h6>
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
          <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
            ©{new Date().getFullYear()}. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}
