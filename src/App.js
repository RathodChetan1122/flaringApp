import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search, MapPin, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 border-b pb-1 w-full max-w-md">
          <Search className="text-gray-500" />
          <Input placeholder="Search talents, challenges..." className="border-none focus:ring-0" />
        </div>
        <Button variant="ghost">
          <Bell className="text-gray-700" />
        </Button>
      </div>
      <motion.div className="w-full h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg p-4 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <h2 className="text-lg font-semibold">🔥 Trending Challenges</h2>
        <p className="text-sm">Join now and showcase your skills!</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/discover-talents">
          <Button className="bg-orange-500 text-white p-4 rounded-lg flex items-center gap-2 w-full">
            <MapPin /> Discover Talents
          </Button>
        </Link>
        <Button className="bg-blue-500 text-white p-4 rounded-lg flex items-center gap-2">
          <Trophy /> Join Challenges
        </Button>
        <Button className="bg-purple-500 text-white p-4 rounded-lg flex items-center gap-2">
          📚 Learn Skills
        </Button>
        <Button className="bg-gray-800 text-white p-4 rounded-lg flex items-center gap-2">
          <Users /> Connect with Mentors
        </Button>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">📢 Your Feed</h3>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-700">🎨 Jane just uploaded a new painting! Check it out.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-gray-700">🎵 Alex won the music challenge! Listen to his track.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const DiscoverTalents = () => {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">🌎 Discover Talents</h2>
      <motion.div className="w-full h-40 bg-gradient-to-r from-green-500 to-yellow-500 rounded-xl shadow-lg p-4 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <p>Explore talents worldwide through an interactive map.</p>
      </motion.div>
      <Card>
        <CardContent className="p-4">
          <p className="text-gray-700">🔥 Meet top artists and innovators from around the world.</p>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/discover-talents" element={<DiscoverTalents />} />
      </Routes>
    </Router>
  );
};

export default App;
