import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Flame, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
    }
    setSearchQuery("");
  };

  return (
    <div className="relative overflow-hidden py-28 px-4 text-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Glitter Stars Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[200%] h-[200%] bg-stars animate-stars" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-text-glow">
          Master New Skills. Elevate Your Career.
        </h1>

        <p className="text-gray-300 dark:text-gray-400 text-lg md:text-xl">
          Join thousands of learners leveling up with curated, premium online courses.
        </p>

        {/* Highlights */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm md:text-base text-gray-200 font-medium">
          <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-full shadow-lg">
            <Star className="text-yellow-300" size={16} /> Certified Courses
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-full shadow-lg">
            <Flame className="text-orange-300" size={16} /> Trending Skills
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-400 px-4 py-2 rounded-full shadow-lg">
            <ShieldCheck className="text-green-100" size={16} /> Secure Platform
          </div>
        </div>

        {/* Search Input */}
        <form
          onSubmit={searchHandler}
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-2xl overflow-hidden max-w-xl mx-auto mt-6"
        >
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for courses..."
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-r-full hover:opacity-90 transition"
          >
            Search
          </Button>
        </form>

        {/* Explore Button */}
        <Button
          onClick={() => navigate(`/course/search?query`)}
          className="mt-4 bg-white dark:bg-gray-800 text-indigo-600 font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Browse All Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
