import { Mail, X } from "lucide-react";

type FooterProps = {
  isDarkMode: boolean;
};

const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer
      className={`py-12 border-t ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          DevPortfolio
        </div>
        <p className="opacity-60 mb-6">
          Build with Next.js, TypeScript, Tailwind CSS, Framer Motion, and
        </p>
        <div className="flex justify-center space-x-6">
          {[
            { icon: <X className="w-5 h-5" />, href: "#" },
            { icon: <Mail className="w-5 h-5" />, href: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="opacity-60 mb-6">
          {" "}
          © 2025 Dev Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
