import { Download, Eye, Github, Linkedin, Mail, X } from "lucide-react";
import { motion } from "motion/react";
type HeroProps = {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
};
const Hero = ({ isDarkMode, scrollToSection }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20" />
      <motion.div
        // style={{ opacity, scale }}
        className="container mx-auto px-6 text-center z-10"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Dev Portfolio
            </span>
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl mb-8 font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="typewriter">
              Full-Stack Developer & AI Enthusiast
            </span>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating beautiful, functional, and user-centered
            digital experiences with cutting-edge technologies. Specialized in
            React, Next.js, and AI integration.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>View My Work</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 border-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center space-x-2 ${
                isDarkMode
                  ? "border-blue-400 text-blue-400"
                  : "border-blue-500 text-blue-500"
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 border rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:border-gray-500"
                  : "border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-sm opacity-60">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3+</div>
              <div className="text-sm opacity-60">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">25+</div>
              <div className="text-sm opacity-60">Happy Clients</div>
            </div>
          </motion.div>
          {/* Social Links */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex space-x-6">
              {[
                {
                  icon: <Github className="w-6 h-6" />,
                  href: "#",
                  label: "GitHub",
                  color: "hover:text-gray-400",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <X className="w-6 h-6" />,
                  href: "#",
                  label: "Twitter",
                  color: "hover:text-sky-400",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  href: "#",
                  label: "Email",
                  color: "hover:text-red-400",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    social.color
                  } ${
                    isDarkMode
                      ? "border-gray-600 text-gray-400"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
