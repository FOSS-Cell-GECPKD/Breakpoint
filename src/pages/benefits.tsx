import {
  Award,
  Users,
  BookOpen,
  Zap,
  Globe,
  ArrowRight,
  ArrowLeft,
  Blocks,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const BenefitsPage = () => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;

    const span = spanRef.current;
    span.style.position = "relative";

    // Create the sketch effect with SVG
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );

    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
    svgElement.setAttribute(
      "viewBox",
      `0 0 ${span.offsetWidth} ${span.offsetHeight}`,
    );
    svgElement.style.position = "absolute";
    svgElement.style.top = "0";
    svgElement.style.left = "0";
    svgElement.style.pointerEvents = "none";
    svgElement.style.zIndex = "-1";

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Get the dimensions of the span
    const width = span.offsetWidth;
    const height = span.offsetHeight;

    // Define the path for a rough rectangle
    const pathData = `
      M 0,0
      L ${width},0
      L ${width},${height}
      L 0,${height}
      Z
    `;

    path.setAttribute("d", pathData);
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "#FFEB3B");
    path.setAttribute("stroke-dasharray", `${width * 2 + height * 2}`);
    path.setAttribute("stroke-dashoffset", `${width * 2 + height * 2}`);

    path.animate(
      [{ strokeDashoffset: width * 2 + height * 2 }, { strokeDashoffset: 0 }],
      {
        duration: 1500,
        fill: "forwards",
        easing: "ease-out",
      },
    );

    svgElement.appendChild(path);
    span.appendChild(svgElement);

    return () => {
      if (span.contains(svgElement)) {
        span.removeChild(svgElement);
      }
    };
  }, []);

  // Card variants for hover animation
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Icon container variants for the rotating light effect
  const iconContainerVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen">
      <header className="pt-16 pb-12 text-center px-4 relative">
        <div className="absolute left-4 top-4">
          <Link
            to="/"
            className="flex items-center text-gray-800 hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-1" size={20} />
            <span>Back to Main</span>
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Why Share Your Project on{" "}
          <span ref={spanRef} className="px-3 bg-transparent text-black">
            Breakpoint;
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Showcase your work, connect with peers, and build your developer
          profile
        </motion.p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl border border-black"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative bg-blue-100 p-3 rounded-full w-fit mb-6"
              variants={iconContainerVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-blue-200 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                initial={{ opacity: 0 }}
                whileHover="hover"
              />
              <Globe className="text-blue-600 relative z-10" size={28} />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Gain Visibility
            </h2>
            <p className="text-gray-700 mb-4">
              Get your projects in front of peers, professors, and potential
              employers. Breakpoint showcases your work to the entire community,
              helping you build recognition for your skills and creativity.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <ArrowRight size={16} className="text-blue-500" />
                </div>
                <span>Exposure to the entire campus community</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <ArrowRight size={16} className="text-blue-500" />
                </div>
                <span>Showcase your best work in a professional format</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <ArrowRight size={16} className="text-blue-500" />
                </div>
                <span>Build credibility as a developer</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl border border-black"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative bg-purple-100 p-3 rounded-full w-fit mb-6"
              variants={iconContainerVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-purple-200 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                initial={{ opacity: 0 }}
                whileHover="hover"
              />
              <Users className="text-purple-600 relative z-10" size={28} />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Connect With Others
            </h2>
            <p className="text-gray-700 mb-4">
              Breakpoint is more than a project gallery—it's a community.
              Connect with like-minded developers, find collaborators for future
              projects, and build your professional network.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <ArrowRight size={16} className="text-purple-500" />
                </div>
                <span>Find collaborators with complementary skills</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <ArrowRight size={16} className="text-purple-500" />
                </div>
                <span>Get feedback from peers who understand your work</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <ArrowRight size={16} className="text-purple-500" />
                </div>
                <span>
                  Build meaningful connections within the tech community
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-black"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative inline-block"
              variants={iconContainerVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-green-200 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                initial={{ opacity: 0 }}
                whileHover="hover"
              />
              <BookOpen
                className="text-green-600 mb-4 relative z-10"
                size={24}
              />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Build Your Portfolio
            </h3>
            <p className="text-gray-700">
              Create a professional portfolio of your work that you can share
              with potential employers or in academic applications. Each project
              on Breakpoint becomes part of your developer story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-black"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative inline-block"
              variants={iconContainerVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-yellow-200 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                initial={{ opacity: 0 }}
                whileHover="hover"
              />
              <Award className="text-yellow-600 mb-4 relative z-10" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Gain Recognition
            </h3>
            <p className="text-gray-700">
              Stand out from the crowd. Popular projects get featured on our
              homepage and social media channels, bringing even more visibility
              to your work and skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-black"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative inline-block"
              variants={iconContainerVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-red-200 rounded-full z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                initial={{ opacity: 0 }}
                whileHover="hover"
              />
              <Zap className="text-red-600 mb-4 relative z-10" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Boost Your GitHub
            </h3>
            <p className="text-gray-700">
              More visibility means more stars on your GitHub repos. Breakpoint
              links directly to your repositories, helping you build credibility
              on GitHub.
            </p>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://opnform.com/forms/my-form-k1tkuv"
            className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-lg font-medium transition"
          >
            <Blocks className="mr-2" size={20} />
            Add Your Project Now
          </a>
          <p className="text-gray-500 mt-3">
            It only takes a few minutes to get started
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default BenefitsPage;
