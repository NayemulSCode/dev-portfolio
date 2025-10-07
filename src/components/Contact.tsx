import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
type ContactProps = {
  isDarkMode: boolean;
};
interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = ({ isDarkMode }: ContactProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();
  const onSubmit = async (data: ContactFormData): Promise<void> => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      reset();

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };
  return (
    <section
      id="contact"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {`Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.`}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">{`Let's Connect`}</h3>
                <p className="opacity-80 leading-relaxed">
                  {`I'm always interested in hearing about new projects and
                  opportunities. Whether you're a company looking to hire, or
                  you're a fellow developer who wants to collaborate, I'd love
                  to hear from you.`}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="opacity-70">developersupport@email.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="opacity-70">+880 176 800 0000</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="opacity-70">Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "#",
                      label: "GitHub",
                      color: "hover:text-gray-400",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "#",
                      label: "LinkedIn",
                      color: "hover:text-blue-400",
                    },
                    {
                      icon: <X className="w-5 h-5" />,
                      href: "#",
                      label: "Twitter",
                      color: "hover:text-sky-400",
                    },
                    {
                      icon: <Mail className="w-5 h-5" />,
                      href: "#",
                      label: "Email",
                      color: "hover:text-red-400",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        social.color
                      } ${
                        isDarkMode
                          ? "border-gray-600 hover:border-gray-500"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        errors.fullName
                          ? "border-red-400 focus:border-red-400"
                          : isDarkMode
                          ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                          : "bg-white border-gray-300 focus:border-blue-400"
                      } focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                      placeholder="Your Name"
                    />
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-1 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.fullName.message}
                      </motion.p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400"
                        : isDarkMode
                        ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                        : "bg-white border-gray-300 focus:border-blue-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                    placeholder="xyz@example.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    {...register("subject", {
                      required: "Please select a subject",
                    })}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      errors.subject
                        ? "border-red-400 focus:border-red-400"
                        : isDarkMode
                        ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                        : "bg-white border-gray-300 focus:border-blue-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                  >
                    <option value="">Select a subject</option>
                    <option value="project">New Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject.message}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-400 focus:border-red-400"
                        : isDarkMode
                        ? "bg-gray-700 border-gray-600 focus:border-blue-400"
                        : "bg-white border-gray-300 focus:border-blue-400"
                    } focus:outline-none focus:ring-2 focus:ring-blue-400/20`}
                    placeholder="Tell me about your project or how I can help you..."
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-1 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mt-6 p-4 rounded-lg border flex items-center space-x-3 ${
                      submitStatus === "success"
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-red-500/10 border-red-500/30 text-red-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          {`Thank you! Your message has been sent successfully.
                          I'll get back to you soon!`}
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>
                          Sorry, there was an error sending your message. Please
                          try again.
                        </span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
