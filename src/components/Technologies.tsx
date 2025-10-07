"use client";
import { Code, Database, Globe, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
type TechProps = {
  isDarkMode: boolean;
};
const Technologies = ({ isDarkMode }: TechProps) => {
  // Technologies data
  const technologies = [
    { name: "Next.js", icon: <Globe className="w-6 h-6" />, level: 90 },
    { name: "TypeScript", icon: <Code className="w-6 h-6" />, level: 85 },
    { name: "React", icon: <Zap className="w-6 h-6" />, level: 95 },
    { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" />, level: 90 },
    { name: "Node.js", icon: <Database className="w-6 h-6" />, level: 80 },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, level: 75 },
  ];
  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              key={tech.name}
              className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:border-blue-400"
                  : "bg-white border-gray-200 hover:border-blue-400 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-400">{tech.icon}</div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </div>
                <span className="text-sm opacity-60">{tech.level}%</span>
              </div>
              <div
                className={`w-full h-2 rounded-full overflow-hidden ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
