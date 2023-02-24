import React, { useEffect } from "react";
import { useRouter } from "next/router"; // hook for routing

export default function Home() {
  const router = useRouter(); //const because it will not change
  useEffect(() => {
    router.push("/admin/signIn"); //byDefault admin will move to signIn Page
  }, []);
  console.log("Working");
  return <>Welcome Admin</>;
}
