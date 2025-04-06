import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <Link to={`/course-detail/${course._id}`}>
      <Card className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-gray-700 dark:bg-white/5">
        <div className="relative">
          <img
            src={course.courseThumbnail}
            alt="course"
            className="w-full h-40 object-cover rounded-t-xl"
          />
        </div>

        <CardContent className="p-5 space-y-4">
          <h2 className="font-semibold text-lg truncate text-white dark:text-gray-100 hover:underline">
            {course.courseTitle}
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={
                    course.creator?.photoUrl ||
                    "https://github.com/shadcn.png"
                  }
                  alt={course.creator?.name}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-white/90 dark:text-gray-300">
                {course.creator?.name}
              </span>
            </div>

            <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
              {course.courseLevel}
            </Badge>
          </div>

          <div className="text-xl font-bold text-blue-400 dark:text-blue-300">
            ₹{course.coursePrice}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
