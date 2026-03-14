export default function Hero() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-12 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Tailwind Template for NFT Marketplace and Web3 Platforms
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Template for NFT, Token, and Web3 marketplace projects, based on Tailwind CSS.
          Comes with all the essential UI components and pages you need to build an NFT
          marketplace or all sorts of Web3 platforms.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-md font-semibold transition">
            Explore now
          </button>
          <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition">
            Upload Your Art
          </button>
        </div>
      </div>

      <div className="relative flex justify-center items-center min-h-[400px]">
        <div className="w-80 h-80 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400 rounded-[3rem] shadow-2xl transform rotate-12 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-full blur-sm" />
            <div className="absolute w-0 h-0 ml-2 border-t-[20px] border-t-transparent border-l-[30px] border-l-white border-b-[20px] border-b-transparent" />
          </div>
        </div>

        <div className="absolute -top-10 right-10 w-8 h-8 bg-gradient-to-tr from-pink-400 to-purple-600 rounded-full animate-bounce" />
        <div className="absolute -bottom-10 left-10 w-12 h-12 bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full" />
      </div>
    </main>
  )
}
