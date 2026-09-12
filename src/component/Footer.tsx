
import FooterImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 py-10 lg:flex-row lg:px-16 lg:py-12">
        {/* Left Side*/}
        <div className="max-w-md">
          <img src={FooterImg} alt="Dev Stack Logo" className="h-8 w-auto" />
          <p className="py-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
            Curated tools, technologies, and resources for developers building{" "}
            <br className="hidden sm:inline" />
            modern software.
          </p>
          <ul className="flex items-center gap-5 text-xs font-semibold text-gray-600 sm:text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-gray-900">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-gray-900">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side*/}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
          <div>
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-gray-500 sm:text-sm">
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-gray-500 sm:text-sm">
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-wider text-gray-900 uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-gray-500 sm:text-sm">
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500 sm:flex-row lg:px-16">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="transition hover:text-gray-900">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-gray-900">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
