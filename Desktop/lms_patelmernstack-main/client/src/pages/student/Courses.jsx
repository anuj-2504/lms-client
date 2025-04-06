import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";

const Courses = () => {
  const { data, isLoading, isError } = useGetPublishedCourseQuery();

  if (isError)
    return <h1 className="text-center text-red-500 mt-10">Some error occurred while fetching courses.</h1>;

  return (
    <div className="relative bg-background text-foreground">
      <div className="absolute inset-0 bg-stars pointer-events-none"></div> {/* glitter background if you want */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <h2 className="font-extrabold text-4xl text-center mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 animate-text-glow">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            : data?.courses &&
              data.courses.map((course, index) => (
                <Course key={index} course={course} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg dark:bg-white/5 bg-white/40 backdrop-blur-md p-4 space-y-4 animate-pulse">
      <Skeleton className="w-full h-36 rounded-md" />
      <Skeleton className="h-6 w-3/4 rounded" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-4 w-1/3" />
    </div>
  );
};
