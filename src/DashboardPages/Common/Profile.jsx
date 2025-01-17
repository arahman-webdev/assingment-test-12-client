import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useRole from "../../Hooks/useRole";
import LoadingSpinenr from "../../Components/SharedComponents/Spinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MemberProfile from "../Members/memberProfile";
import AdminProfile from "../Admin/AdminProfile";
import UserProfile from "../Users/UserProfile";

const ProfilePage = ({item}) => {
  const { user, loading } = useContext(AuthContext);
  const [role,isLoading] = useRole()
  const axiosSecure = useAxiosSecure();

  const { data: acceptedItems = [] } = useQuery({
    queryKey: ["acceptedItems"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/accepted-request");
      return data;
    },
  });

  console.log(acceptedItems)
  console.log(item)

if(isLoading || loading) return <LoadingSpinenr></LoadingSpinenr>
  






if (role === "admin") {
  return <AdminProfile user={user} role={role} loading={loading} />;
} else if (role === "member") {
  return <MemberProfile user={user} role={role} loading={loading}/>;
} else {
  return <UserProfile user={user} role={role} loading={loading}/>;
}
};

export default ProfilePage;
