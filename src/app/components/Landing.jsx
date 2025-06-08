'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import designer from "@/app/assets/designer.svg";
import photo from "@/app/assets/photo.svg";
import publisher from "@/app/assets/publisher.svg";
import heroimg from "@/app/assets/heroimg.png";
import reviews from "../db/reviews";

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const heroVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Landing = () => {
  return (
    <div className="font-sans text-gray-900 pt-12">
      {/* Hero Section */}
      <section className="bg-[#f3f3f5] w-full h-full px-4 py-4 md:px-10 md:py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12">
        <motion.div
          className="max-w-xl"
          variants={heroVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" variants={heroItem}>
            Unleash Your Creativity with Affinity
          </motion.h1>
          <motion.p className="text-lg mb-6" variants={heroItem}>
            Professional-grade tools for designers, photographers, and publishers.
          </motion.p>
          <motion.div className="flex flex-col md:flex-row gap-4" variants={heroItem}>
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Apps
            </motion.button>
            <motion.button
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Plans
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="relative w-full md:w-[45%]">
          <div className="absolute w-[30vw] h-[30vw] bg-purple-500 rounded-full blur-[150px] opacity-20 animate-pulse z-10" />
          <div className="relative z-20 w-full h-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-3">
            <div className="w-full h-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-3">
              <Image src={heroimg} alt="Affinity Suite" width={600} height={400} className="shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-2">Our Products</h2>
        <p className="text-gray-600 mb-12">Buy once, own forever</p>
        <div className="grid md:grid-cols-3 gap-10">
          {[photo, designer, publisher].map((image, i) => (
            <motion.div
              key={i}
              className="rounded-lg overflow-hidden shadow-md p-4 bg-white hover:shadow-xl transition"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-40 flex justify-center items-center bg-gray-50">
                <Image src={image} alt="Affinity App" width={100} height={100} className="object-contain" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-1">
                  {['Affinity Photo', 'Affinity Designer', 'Affinity Publisher'][i]}
                </h3>
                <p className="text-sm text-gray-600">
                  {
                    [
                      'Advanced photo editing with professional-grade tools.',
                      'Vector graphic design software for precise creativity.',
                      'Powerful desktop publishing for beautiful layouts.'
                    ][i]
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10">
          <button className="text-blue-600 underline hover:text-blue-800">All Apps →</button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-12 px-4">
  {/* Section Heading */}
  <h2 className="w-full text-3xl font-semibold text-center mb-2">Loved by Millions</h2>
  <p className="text-gray-600 mb-12 text-center">Creators from all over the world use Affinity Products</p>
    
  <div className='relative overflow-hidden max-h-[500px]'>
  {/* Gradient overlays */}
  <div className="pointer-events-none absolute z-20 inset-0">
    {/* Top gradient */}
    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
    {/* Bottom gradient */}
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent"></div>
    {/* Left gradient */}
    <div className="absolute top-0 left-0 h-full w-30 bg-gradient-to-r from-gray-50 to-transparent"></div>
    {/* Right gradient */}
    <div className="absolute top-0 right-0 h-full w-30 bg-gradient-to-l from-gray-50 to-transparent"></div>
  </div>

  {/* Marquee container */}
  <div className="overflow-hidden relative z-10">
  {/* Desktop (vertical columns) */}
  <div className="hidden md:flex gap-6 justify-center">
    {/* Column 1: top to bottom */}
    <div className="flex flex-col gap-4 animate-marquee-vertical-down">
      {[...reviews, ...reviews].map((review, i) => (
        <div
          key={`col1-${i}`}
          className="w-[500px] bg-[#dfe0e5] shadow-md p-4 rounded-lg"
        >
          <p className="text-md text-gray-700 italic mb-8">“{review.text}”</p>
          <p className="text-sm font-semibold text-gray-500">– {review.name}</p>
        </div>
      ))}
    </div>

    {/* Column 2: bottom to top */}
    <div className="flex flex-col gap-4 animate-marquee-vertical-up">
      {[...reviews, ...reviews].map((review, i) => (
        <div
          key={`col2-${i}`}
          className="w-[500px] bg-[#dfe0e5] shadow-md p-4 rounded-lg"
        >
          <p className="text-md text-gray-700 italic mb-8">“{review.text}”</p>
          <p className="text-sm font-semibold text-gray-500">– {review.name}</p>
        </div>
      ))}
    </div>

    {/* Column 3: top to bottom */}
    <div className="flex flex-col gap-4 animate-marquee-vertical-down">
      {[...reviews, ...reviews].map((review, i) => (
        <div
          key={`col3-${i}`}
          className="w-[500px] bg-[#dfe0e5] shadow-md p-4 rounded-lg"
        >
          <p className="text-md text-gray-700 italic mb-8">“{review.text}”</p>
          <p className="text-sm font-semibold text-gray-500">– {review.name}</p>
        </div>
      ))}
    </div>

    {/* Repeat as needed */}
  </div>

  {/* Mobile (horizontal marquee) */}
  <div className="flex md:hidden gap-4 animate-marquee-horizontal">
    {[...reviews, ...reviews].map((review, i) => (
      <div
        key={`h-${i}`}
        className="min-w-[300px] bg-[#dfe0e5] shadow-md p-4 rounded-lg"
      >
        <p className="text-sm text-gray-700 italic mb-8">“{review.text}”</p>
        <p className="text-xs font-semibold text-gray-500">– {review.name}</p>
      </div>
    ))}
  </div>
</div>

  </div>

</section>


      {/* Visit Marketplace */}
      <section className="bg-blue-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Enhance Your Workflow</h2>
        <p className="mb-6 text-gray-700">Discover add-ons, templates, and tutorials to boost your productivity.</p>
        <motion.button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Visit Marketplace
        </motion.button>
      </section>

      {/* Why Choose Affinity */}
      <section className="py-20 px-6 md:px-20 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-10">Why Choose Affinity?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            ['10+', 'Years of Innovation'],
            ['1M+', 'Users Worldwide'],
            ['100+', 'Team Members'],
            ['200+', 'Global Markets'],
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-600 mb-2">{value}</h2>
              <p className="text-gray-700">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;

