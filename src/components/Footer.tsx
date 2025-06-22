import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Define interfaces
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode; // Changed from JSX.Element to React.ReactNode
  href: string;
  label: string;
}

// Navigation links
const NAV_LINKS: FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// Social media links
const SOCIAL_LINKS: SocialLink[] = [
  { icon: <FaGithub />, href: "https://github.com/GabooMedina", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/gabriel-medina-689522363/", label: "LinkedIn" },
  { icon: <FaXTwitter />, href: "https://x.com/gabiGolDev", label: "X" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/gabo_medina11?igsh=MXAycmZjbDNzdDl5Nw==", label: "Instagram" },
];

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#1c1c22] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-700 pb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff99] to-[#0099ff]">
              Portfolio
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Developing innovative digital solutions with precision engineering.
              Let's transform your vision into exceptional web experiences.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00ff99] transition-colors duration-300"
                  aria-label={`Visit my ${link.label}`}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#00ff99] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#00ff99] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#00ff99] mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:tuemail@example.com"
                  className="text-gray-300 hover:text-[#00ff99] transition-colors duration-200"
                >
                  gabomedina1007@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 flex items-center">
                  <img
                    src="/assets/projects/ecuador.png"
                    alt="Bandera de Ecuador"
                    className="w-5 h-5"
                  />
                </span>
                <span>Ambato, Ecuador</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                <a
                  href="tel:+593995154015"
                  className="text-gray-300 hover:text-[#00ff99] transition-colors duration-200"
                >
                  +593 995 154015
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕒</span>
                <span>Disponible 👨🏻‍💻</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Portfolio. All rights reserved Gabriel Medina.
          </p>
        </div>
      </div>
    </footer>
  );
}
