import { contactUs } from "../lib/info";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="bg-background   mx-auto w-full text-white py-3.5 lg:scroll-mt-20"
      id="contact"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[85rem]  w-full h-full mx-auto px-7 py-12">
        <h1 className="text-primary text-center text-[2rem] md:text-3xl lg:text-4xl font-extrabold tracking-wider capitalize">
          Contact us now and <br />
          find your dream home
        </h1>
        <div className="w-[35%] h-1 bg-primary mx-auto my-4 rounded-full" />
        <div className="flex flex-col items-center justify-center  max-w-[70%] mx-auto gap-y-10">
          {contactUs.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={i}
                className="flex gap-x-7 items-center bg-primary w-full py-6 px-3.5 rounded-lg border-2 border-primary  text-black hover:bg-transparent hover:text-primary transition-all duration-300  "
                aria-label={`Contact via ${contact.text}`}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "100%" }}
                transition={{
                  opacity: { delay: i * 0.1, duration: 0.6, ease: "easeInOut" },

                  y: { duration: 0.2, ease: "easeIn" },
                }}
              >
                <Icon size={25} className="" />
                <p className="text-[1.3rem] font-light tracking-wider">
                  {contact.text}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
