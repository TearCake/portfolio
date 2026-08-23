import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aditya Chavan",
          from_email: form.email,
          to_email: "adityachavan1357@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Quick Contact Information Badges */}
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='bg-tertiary/60 p-4 rounded-xl border border-white/5 overflow-hidden'>
            <p className='text-secondary text-xs font-semibold uppercase tracking-wider mb-1'>Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className='text-white text-[13px] sm:text-sm font-medium hover:text-[#915EFF] transition break-all block'
              title={personalInfo.email}
            >
              {personalInfo.email}
            </a>
          </div>

          <div className='bg-tertiary/60 p-4 rounded-xl border border-white/5 overflow-hidden'>
            <p className='text-secondary text-xs font-semibold uppercase tracking-wider mb-1'>Phone</p>
            <a
              href={`tel:${personalInfo.phone}`}
              className='text-white text-[13px] sm:text-sm font-medium hover:text-[#915EFF] transition block'
            >
              {personalInfo.phone}
            </a>
          </div>

          <div className='bg-tertiary/60 p-4 rounded-xl border border-white/5 overflow-hidden'>
            <p className='text-secondary text-xs font-semibold uppercase tracking-wider mb-1'>Location</p>
            <p className='text-white text-[13px] sm:text-sm font-medium'>
              {personalInfo.location}
            </p>
          </div>

          <div className='bg-tertiary/60 p-4 rounded-xl border border-white/5 flex gap-3 items-center flex-wrap'>
            <a
              href={personalInfo.linkedin}
              target='_blank'
              rel='noreferrer'
              className='text-xs bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 text-[#70b5f9] px-3 py-2 rounded-lg font-medium border border-[#0A66C2]/30 transition'
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.github}
              target='_blank'
              rel='noreferrer'
              className='text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg font-medium border border-white/20 transition'
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to discuss?'
              className='bg-tertiary py-3.5 px-5 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition duration-300'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
