// @ts-nocheck
import { ProfilePageCard } from "@/components/Profiles/ProfilePageCard";
import { ProfileRequest } from "@/components/Request/Request";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";

const UserProfile: NextPage = () => {
  const router = useRouter();

  const user = router.query.data

  console.log(user)

  const { data } = useQuery(
    ["userData", user],
    () => ProfileRequest(user),

    { enabled: Boolean(user) }
  );

  console.log(data)

  return <>{data ? <ProfilePageCard data={data} /> : "...Loading"}</>;
};

export default UserProfile;
