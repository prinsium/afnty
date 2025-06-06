export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a] to-[#0f0f0f] blur-2xl z-20 pointer-events-none" />

      {/* Glowing Circles */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        {/* Outermost Circle */}
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] opacity-20 animate-pulse" />
        {/* Outer Circle */}
        <div className="absolute w-[350px] h-[350px] bg-pink-500 rounded-full blur-[100px] opacity-30 animate-ping" />
        {/* Inner Circle */}
        <div className="absolute w-[200px] h-[200px] bg-blue-500 rounded-full blur-[60px] opacity-40 animate-pulse" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-30 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Buy Once, Own Forever
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Affinity Suite of Softwares
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Explore Apps
          </button>
          <button className="border border-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}




// #3ec2fa
// #eb78ff
// #ffa263