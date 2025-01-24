import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useRole from "../../Hooks/useRole";
import LoadingSpinner from "../../Components/SharedComponents/Spinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MemberProfile from "../Members/MemberProfile";
import AdminProfile from "../Admin/AdminProfile";
import UserProfile from "../Users/UserProfile";

const ProfilePage = () => {
  const { user, loading: userLoading } = useContext(AuthContext);
  const [role, roleLoading] = useRole();
  const axiosSecure = useAxiosSecure();

  const {
    data: acceptedItem = [],
    isLoading: acceptedItemLoading,
  } = useQuery({
    queryKey: ["acceptedItems", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const { data } = await axiosSecure.get(`/accepted-request/${user.email}`);
      return data;
    },
    enabled: !!user?.email, // Ensure the query only runs when user email is available
  });

  // Update document title based on the role
  useEffect(() => {
    if (!role || roleLoading) return;
    document.title = `Dashboard - ${role.charAt(0).toUpperCase() + role.slice(1)} Profile | AptEase`;
  }, [role, roleLoading]);

  // Loading states
  if (userLoading || roleLoading || acceptedItemLoading) {
    return <LoadingSpinner />;
  }

  // Render the appropriate profile component based on the role
  if (role === "admin") {
    return <AdminProfile user={user} role={role} />;
  } else if (role === "member") {
    return <MemberProfile user={user} role={role} acceptedItem={acceptedItem} />;
  } else {
    return <UserProfile user={user} role={role} />;
  }
};

export default ProfilePage;
