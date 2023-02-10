import React, { useEffect } from "react";
import { useRouter } from "next/router"; // hook for routing
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter(); //const because it will not change
  useEffect(() => {
    router.push("/admin/signIn"); //byDefault admin will move to signIn Page
  }, [router]);
  return <>Welcome Admin</>;
}
