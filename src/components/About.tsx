import { Code, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
type AboutProps = {
  isDarkMode?: boolean;
};

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>{" "}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg mb-6 opacity-80 leading-relaxed">
              {`I'm a passionate full-stack developer with over 3 years of experience building 
                      web applications that solve real-world problems. I love turning complex requirements 
                      into simple, beautiful, and intuitive designs`}
              .
            </p>

            <p className="text-lg mb-6 opacity-80 leading-relaxed">
              {`When I'm not coding, you can find me exploring new technologies, contributing to 
                      open-source projects, or sharing knowledge with the developer community through 
                      blog posts and mentoring.`}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-blue-400" />
                <span>Clean, maintainable code</span>
              </div>
              <div className="flex items-center space-x-3">
                <Palette className="w-5 h-5 text-purple-400" />
                <span>User-centered design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-teal-400" />
                <span>Performance optimization</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className={`w-80 h-80 mx-auto rounded-2xl overflow-hidden ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-teal-400 opacity-80 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
