

'use client';
import designer from "@/app/assets/designer.svg";
import { motion } from 'framer-motion';
import photo from "@/app/assets/photo.svg";
import publisher from "@/app/assets/publisher.svg";
import Image from "next/image";
import reviews from "../db/reviews";

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Landing = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unleash Your Creativity with Affinity</h1>
          <p className="text-lg mb-6">Professional-grade tools for designers, photographers, and publishers.</p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Explore Apps</button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">View Plans</button>
          </div>
        </div>
        <div className="w-full md:w-[45%]">
          <Image src="/images/affinity-hero.jpg" alt="Affinity Suite" width={600} height={400} className="rounded-xl shadow-lg" />
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
              viewport={{ once: true }}
            >
              <div className="relative w-full h-40 flex justify-center items-center bg-gray-50">
                <Image src={image} alt="Affinity App" width={120} height={120} className="object-contain" />
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
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Award-winning software for Mac, Windows & iPad
        </h2>
        <div className="overflow-hidden whitespace-nowrap mt-8">
          <div className="flex gap-6 animate-marquee">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-[300px] bg-white shadow-md p-4 rounded-lg text-left"
              >
                <p className="text-sm text-gray-700 italic mb-2">“{review.text}”</p>
                <p className="text-xs font-semibold text-gray-500">– {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Marketplace */}
      <section className="bg-blue-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Enhance Your Workflow</h2>
        <p className="mb-6 text-gray-700">Discover add-ons, templates, and tutorials to boost your productivity.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Visit Marketplace</button>
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
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{value}</h3>
              <p className="text-gray-700">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;

