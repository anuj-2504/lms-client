import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

const USER_API = `${import.meta.env.VITE_BACKEND_URL}/api/v1/user`;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "register",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    const message = error?.error?.data?.message || "Registration failed.";
                    console.error("❌ Register Error:", message);
                }
            }
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "login",
                method: "POST",
                body: inputData
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(userLoggedIn({ 
                        user: result.data.user 
                    }));
                } catch (error) {
                    const message = error?.error?.data?.message || "Login failed. Please try again.";
                    console.error("❌ Login Error:", message);
                }
            }
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: "logout",
                method: "GET"
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                    dispatch(userLoggedOut());
                } catch (error) {
                    const message = error?.error?.data?.message || "Logout failed.";
                    console.error("❌ Logout Error:", message);
                }
            }
        }),
        loadUser: builder.query({
            query: () => ({
                url: "profile",
                method: "GET"
            }),
            async onQueryStarted(_, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result.data?.user) {
                        dispatch(userLoggedIn({ 
                            user: result.data.user 
                        }));
                    }
                } catch (error) {
                    const message = error?.error?.data?.message || "Failed to load user.";
                    console.error("❌ Load User Error:", message);
                }
            }
        }),
        updateUser: builder.mutation({
            query: (formData) => ({
                url: "profile/update",
                method: "PUT",
                body: formData,
                credentials: "include"
            }),
            async onQueryStarted(_, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    const message = error?.error?.data?.message || "Profile update failed.";
                    console.error("❌ Update Profile Error:", message);
                }
            }
        })
    })
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useLoadUserQuery,
    useUpdateUserMutation
} = authApi;
