import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="background-image h-screen overflow-x-hidden mx-auto "
      aria-label="Hero section promoting ASTY Properties"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" size-full mx-auto max-w-[85rem] flex flex-col gap-y-10 justify-center items-start px-7 pt-7"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl  lg:text-5xl font-extrabold tracking-wide text-primary"
          role="heading"
          aria-level="1"
        >
          Find Your Perfect Home with ASTY <br />
          PROPERTIES
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-white text-[1.5rem] md:text-2xl lg:text-3xl font-semibold"
        >
          Trusted real estate solutions in Kwara State and others . <br />
          Buy , Rent or Invest with confidence
        </motion.p>
        <motion.a
          variants={fadeInUp}
          href="#contact"
          className=" py-2.5 px-3 text-[1.2rem] md:py-3 md:px-5 bg-primary md:text-2xl text-white rounded-2xl font-semibold border-2 border-primary hover:bg-transparent  transition-colors duration-300 ease-in pointer primary-glow"
          role="button"
          aria-label="Contact ASTY Properties"
        >
          CONTACT US NOW
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
