import Link from 'next/link';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      theme === 'dark'
        ? 'bg-balsamic border-iron/30 text-flagstone'
        : 'bg-white border-flagstone/30 text-lucky-grey'
    }`}>
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className={`text-2xl font-serif font-bold mb-4 inline-block ${
              theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
            }`}>
              SB Home Zone
            </Link>
            <p className={`text-sm leading-relaxed mb-4 max-w-md ${
              theme === 'dark' ? 'text-flagstone/90' : 'text-lucky-grey'
            }`}>
              Creating beautiful and functional spaces that reflect your personality and enhance your lifestyle. We specialize in residential and commercial interior design solutions across Nellore, Tirupati, and Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-iron/20 text-flagstone hover:bg-iron/40'
                    : 'bg-flagstone/10 text-lucky-grey hover:bg-flagstone/20'
                }`}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-iron/20 text-flagstone hover:bg-iron/40'
                    : 'bg-flagstone/10 text-lucky-grey hover:bg-flagstone/20'
                }`}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.352.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-iron/20 text-flagstone hover:bg-iron/40'
                    : 'bg-flagstone/10 text-lucky-grey hover:bg-flagstone/20'
                }`}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-iron/20 text-flagstone hover:bg-iron/40'
                    : 'bg-flagstone/10 text-lucky-grey hover:bg-flagstone/20'
                }`}
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-serif font-bold text-lg mb-4 ${
              theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className={`hover:underline transition-colors duration-200 ${
                      theme === 'dark' ? 'text-flagstone/90 hover:text-flagstone' : 'text-lucky-grey hover:text-balsamic'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-serif font-bold text-lg mb-4 ${
              theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
            }`}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className={`w-5 h-5 mt-0.5 mr-3 ${
                    theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-flagstone/90' : 'text-lucky-grey'
                }`}>
                  123 Design Street, Nellore, AP 524001
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className={`w-5 h-5 mr-3 ${
                    theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@sbhomezone.com"
                  className={`text-sm hover:underline ${
                    theme === 'dark' ? 'text-flagstone/90 hover:text-flagstone' : 'text-lucky-grey hover:text-balsamic'
                  }`}
                >
                  info@sbhomezone.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className={`w-5 h-5 mr-3 ${
                    theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+919912345678"
                  className={`text-sm hover:underline ${
                    theme === 'dark' ? 'text-flagstone/90 hover:text-flagstone' : 'text-lucky-grey hover:text-balsamic'
                  }`}
                >
                  +91 99123 45678
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`font-serif font-bold text-lg mb-4 ${
              theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
            }`}>
              Newsletter
            </h3>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-flagstone/90' : 'text-lucky-grey'
            }`}>
              Subscribe to our newsletter for the latest updates and design tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className={`px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-iron/20 text-flagstone focus:ring-flagstone/50 placeholder-flagstone/50'
                    : 'bg-flagstone/10 text-balsamic focus:ring-balsamic/50 placeholder-lucky-grey/70'
                }`}
              />
              <button
                className={`px-4 py-2 rounded-r-md font-medium transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'bg-flagstone text-balsamic hover:bg-flagstone/90'
                    : 'bg-balsamic text-flagstone hover:bg-balsamic/90'
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className={`border-t pt-8 ${theme === 'dark' ? 'border-iron/30' : 'border-flagstone/30'}`}>
          <div className="max-w-md mx-auto text-center">
            <h3 className={`font-serif font-bold text-lg mb-2 ${
              theme === 'dark' ? 'text-flagstone' : 'text-balsamic'
            }`}>
              Stay Updated
            </h3>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-flagstone/90' : 'text-lucky-grey'
            }`}>
              Get the latest design trends and project updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 ${
                  theme === 'dark'
                    ? 'bg-iron/20 border-iron/30 text-flagstone placeholder-flagstone/50 focus:ring-flagstone/50'
                    : 'bg-flagstone/10 border-flagstone/20 text-balsamic placeholder-lucky-grey/70 focus:ring-balsamic/50'
                }`}
              />
              <button className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${
                theme === 'dark' 
                  ? 'bg-flagstone text-balsamic hover:bg-flagstone/90 shadow-lg shadow-flagstone/25' 
                  : 'bg-balsamic text-flagstone hover:bg-balsamic/90 shadow-lg'
              }`}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t mt-8 pt-6 text-center ${
          theme === 'dark' ? 'border-iron/30' : 'border-flagstone/30'
        }`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-flagstone/80' : 'text-lucky-grey/80'}`}>
            &copy; {new Date().getFullYear()} Meghana Interiors. All rights reserved. |
            <Link href="#" className={`ml-1 hover:underline transition-colors ${
              theme === 'dark' ? 'text-flagstone/90 hover:text-flagstone' : 'text-lucky-grey hover:text-balsamic'
            }`}>
              Privacy Policy
            </Link> |
            <Link href="#" className={`ml-1 hover:underline transition-colors ${
              theme === 'dark' ? 'text-flagstone/90 hover:text-flagstone' : 'text-lucky-grey hover:text-balsamic'
            }`}>
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;