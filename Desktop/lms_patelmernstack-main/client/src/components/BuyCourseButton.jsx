import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";  // Import Redux selector to get user ID
import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const BuyCourseButton = ({ courseId }) => {
  const userId = useSelector((state) => state.auth.user?._id); // Get logged-in user's ID

  const [createCheckoutSession, { data, isLoading, isSuccess, isError, error }] =
    useCreateCheckoutSessionMutation();

    const purchaseCourseHandler = async () => {
      console.log("🔹 Attempting to purchase course:", courseId);
    
      if (!courseId) {
        toast.error("Missing course ID!");
        return;
      }
    
      try {
        await createCheckoutSession(courseId);
        console.log("✅ API Call Sent");
      } catch (err) {
        console.error("❌ API Call Failed:", err);
      }
    };
    
    

  useEffect(() => {
    console.log("🔍 API Response Data:", data);
    console.log("⚡ isSuccess:", isSuccess, " | isError:", isError);

    if (isSuccess) {
      if (data?.url) {
        console.log("✅ Redirecting to Stripe URL:", data.url);
        window.location.href = data.url; // Redirect to Stripe checkout
      } else {
        toast.error("Invalid response from server.");
        console.error("❌ Server response does not contain a URL:", data);
      }
    } 

    if (isError) {
      toast.error(error?.data?.message || "Failed to create checkout session");
      console.error("❌ Purchase failed:", error);
    }
  }, [data, isSuccess, isError, error]);

  return (
    <Button
      disabled={isLoading}
      onClick={purchaseCourseHandler}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
  );
};

export default BuyCourseButton;
