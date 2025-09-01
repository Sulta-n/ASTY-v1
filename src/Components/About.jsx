import IMG from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className=" bg-background  min-h-screen mx-auto w-full text-white py-3.5 lg:scroll-mt-20"
      id="about"
    >
      <div className="max-w-[85rem] w-full h-full mx-auto px-7">
        <h1 className="text-primary text-center text-[2rem] md:text-3xl lg:text-4xl font-extrabold tracking-wider ">
          About Asty
        </h1>

        <div className="w-[15%] h-1 bg-primary mx-auto my-4 rounded-full" />
        {/* desktop */}
        <motion.div
          className="hidden lg:grid grid-cols-[1fr_2fr] items-start justify-center gap-x-12 mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: "100%" }}
          transition={{
            opacity: { delay: 0.2, duration: 0.6, ease: "easeInOut" },

            y: { duration: 0.6, ease: "easeIn" },
          }}
        >
          <motion.div
            className="h-[32rem] w-full items-center justify-center place-content-center "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={IMG}
              alt="An image of Asty's Founder "
              className="h-full w-full object-cover rounded-[2rem]"
              loading="lazy"
            />
          </motion.div>
          <div className="flex flex-col gap-y-5 pt-3 text-primary text-bold tracking-wide leading-6 text-[1.3rem]">
            <p>
              At ASTY Real Estate Properties, we believe that finding the right
              property is more than just a transaction — it’s the start of a new
              chapter. Founded on passion, integrity, and an uncompromising
              dedication to client satisfaction, we have built a reputation for
              delivering safe, secure, and value-driven real estate solutions.
            </p>
            <p>
              From the moment you reach out, our team is committed to guiding
              you every step of the way — whether you’re buying your dream home,
              securing an investment property, or exploring prime rental
              opportunities. We don’t just close deals; we create lasting
              relationships grounded in trust, transparency, and results.
            </p>
            <p>
              What sets us apart is our thorough approach. We go beyond the
              surface, making in-depth inquiries, verifying every detail, and
              ensuring that every property we present is worth your confidence.
              Every recommendation we make is backed by careful research and
              genuine care for your needs.
            </p>
            <p>
              At ASTY, your goals are our mission. Your safety is our priority.
              And your satisfaction is our success story.
            </p>
            <p>
              ASTY Real Estate Properties — Building Trust. Creating Value.
              Finding Home.
            </p>
          </div>
        </motion.div>
        {/* mobile */}
        <motion.div
          className="flex lg:hidden flex-col gap-y-2 items-center justify-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: "100%" }}
          transition={{
            opacity: { delay: 0.2, duration: 0.6, ease: "easeInOut" },

            y: { duration: 0.6, ease: "easeIn" },
          }}
        >
          <div className="grid grid-cols-[1fr_1fr] md:grid-cols-2 gap-x-4">
            <div className="h-[20rem] md:h-[22rem] w-full md:w-[80%] items-center justify-center mx-auto">
              <img
                src={IMG}
                alt="An image of Asty's Founder "
                className="h-full w-full object-cover rounded-[2rem] "
                loading="lazy"
              />
            </div>
            <div className="text-[.9rem] text-primary flex flex-col gap-y-4 md:text-2xl">
              <p>
                At ASTY Real Estate Properties, we believe that finding the
                right property is more than just a transaction it’s the start of
                a new chapter. Founded on passion, integrity, and an
                uncompromising dedication to client satisfaction, we have built
                a reputation for delivering safe, secure, and value-driven real
                estate solutions.  
              </p>
            </div>
          </div>
          <div className="flex flex-col text-primary md:px-5 text-left items-center md:gap-y-3 md:text-[1.5rem] font-light">
            <p>
              From the moment you reach out, our team is committed to guiding
              you every step of the way whether you’re buying your dream
            </p>
            <p>
              home, securing an investment property, or exploring prime rental
              opportunities. We don’t just close deals; we create lasting
              relationships grounded in trust, transparency, and results.
            </p>
            <p>
              What sets us apart is our thorough approach. We go beyond the
              surface, making in-depth inquiries, verifying every detail, and
              ensuring that every property we present is worth your confidence.
              Every recommendation we make is backed by careful research and
              genuine care for your needs
            </p>
            <p>
                ASTY Real Estate Properties Building Trust. Creating Value.
              Finding Home.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
