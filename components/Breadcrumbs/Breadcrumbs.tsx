import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

const Breadcrumbs = () => {
  const pathname = usePathname();
  if (!pathname) return null;

  const pathSegments = pathname
    .split("/")
    .filter((segments) => segments.length > 0);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { href, label };
  });

  return (
    <nav className="py-6 flex items-center gap-2 text-[1.25rem] text-darkgray font-medium">
      <Link className="flex items-center gap-2 text-primary hover:text-blue-800 hover:font-bold transition-all" href="/">
        <FaHome />
        Home
      </Link>
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <span> / </span>
          {index < breadcrumbs.length - 1 ? (
            <Link href={breadcrumb.href} className="text-primary hover:text-blue-800 hover:font-bold transition-all">
              {breadcrumb.label}
            </Link>
          ) : (
            <span className="text-red">{breadcrumb.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
