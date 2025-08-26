
export default function Home() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-[#111] flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-green-400">VoxelForge</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Skins</a>
          <a href="#" className="hover:text-green-400">Totems</a>
          <a href="#" className="hover:text-green-400">Generators</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-24 bg-[url('https://i.ibb.co/qNn8t9P/minecraft-bg.jpg')] bg-cover bg-center">
        <h2 className="text-5xl font-extrabold text-green-400 drop-shadow-lg">⚡ VoxelForge</h2>
        <p className="mt-4 text-lg max-w-xl">All-in-one Minecraft Tools Hub – Skins, Totems, Previews, and More 🚀</p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition">Explore Now</button>
      </header>

      {/* Cards Section */}
      <section className="flex-1 px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">🎨 Skin Stealer</h3>
          <p className="text-gray-400">Steal any Minecraft player's skin instantly.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition">Try Now</button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">🛡️ Totem Maker</h3>
          <p className="text-gray-400">Generate custom Totem of Undying with your skin.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition">Generate</button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2">🖼️ Skin to Art</h3>
          <p className="text-gray-400">Turn Minecraft skins into pixel art or posters.</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition">Create</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-6 text-center text-gray-400 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} VoxelForge – Powered by its own API ⚡
      </footer>
    </div>
  );
}
