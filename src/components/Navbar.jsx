import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/education", label: "Education" },
  { to: "/publications", label: "Publications" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-base-300/60 bg-base-100/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          <span className="text-primary font-mono text-sm align-middle mr-2">
            &gt;_
          </span>
          {profile.shortName}
        </NavLink>

        <div className="hidden gap-1 sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-btn px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-base-content/70 hover:text-base-content"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="dropdown dropdown-end sm:hidden">
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
