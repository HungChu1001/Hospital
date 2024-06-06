import Link from "next/link";
import Image from "next/image";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"></nav>
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
}
