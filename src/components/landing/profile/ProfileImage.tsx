"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function ProfileImage() {
  const { theme } = useTheme();

  const profileUrl =
    theme === "dark" ? "/profile/casual.JPG" : "/profile/formal.JPG";

  return <Image src={profileUrl} alt="profile" width={100} height={100} />;
}
