import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_API_URL } from "../constants";
const COURSE_PURCHASE_API = "https://lms-server-y383.onrender.com/api/v1/purchase";

export const purchaseApi = createApi({
  reducerPath: "purchaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: COURSE_PURCHASE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createCheckoutSession: builder.mutation({
      query: (courseId) => {
        if (!courseId || typeof courseId !== "string") {
          console.error("Invalid courseId format:", courseId);
          throw new Error("Invalid courseId format");
        }
        return {
          url: "/checkout/create-checkout-session",
          method: "POST",
          body: { courseId },
        };
      },
    }),
    
    getCourseDetailWithStatus: builder.query({
      query: (courseId) => {
        if (!courseId || typeof courseId !== "string") {
          console.error("Invalid courseId format:", courseId);
          throw new Error("Invalid courseId format");
        }
        return {
          url: `/course/${courseId}/detail-with-status`,
          method: "GET",
        };
      },
    }),
    getPurchasedCourses: builder.query({
      query: () => ({
        url: `/`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCheckoutSessionMutation,
  useGetCourseDetailWithStatusQuery,
  useGetPurchasedCoursesQuery,
} = purchaseApi;

