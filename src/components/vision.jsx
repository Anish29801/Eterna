import React from "react";
import { GiStonePath, GiAncientSword, GiTempleGate } from "react-icons/gi";

const Vision = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-playfair font-bold text-center mb-8">Our Vision</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center w-64 transform hover:scale-105 transition-transform">
          <GiStonePath className="text-gray-600 text-6xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Preserve the Past</h3>
          <p className="text-gray-600">
            Safeguard historical artifacts and stories to keep the legacy of ancient civilizations alive.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center w-64 transform hover:scale-105 transition-transform">
          <GiAncientSword className="text-red-600 text-6xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Celebrate Heritage</h3>
          <p className="text-gray-600">
            Honor the cultural heritage and traditions that have shaped our world.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center w-64 transform hover:scale-105 transition-transform">
          <GiTempleGate className="text-yellow-600 text-6xl mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Connect Through History</h3>
          <p className="text-gray-600">
            Build connections by sharing the stories and achievements of past civilizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
