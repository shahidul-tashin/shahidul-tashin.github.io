import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/education", label: "Education" },
  { to: "/publications", label: "Publications" },
  { to: "/travel", label: "Travel" },
  { to: "/resources", label: "Resources" },
  { to: "/writings", label: "Writings" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur">
      <div className="flex justify-end max-w-full py-5 items-center sm:px-6">
        <NavLink
          to="/"
          className="font-display text-3xl text-emerald-900 mr-5 font-bold tracking-tight"
        >
          <span className="text-primary font-mono text-sm align-middle mr-5">
            
          </span>
          {profile.shortName}
        </NavLink>

        <div className="hidden gap-0.5 lg:flex">
          {links.map((link) => {
            const isActive =
              link.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="relative rounded-btn px-2.5 py-2 font-mono text-[0.7rem] uppercase tracking-wide"
              >
                <span
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-base-content/70 hover:text-base-content"
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 bottom-0.5 h-[2px] rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-50 mt-3 w-44 rounded-box bg-base-200 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === "/"}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
