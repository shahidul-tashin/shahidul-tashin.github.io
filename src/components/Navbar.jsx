import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/research", label: "Research" },
  { to: "/education", label: "Education" },
  { to: "/publications", label: "Publications" },
  { to: "/travel", label: "Travel" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-base-300/60 bg-base-100/80 backdrop-blur">
      <div className="flex items-center justify-between max-w-5xl px-4 py-3 mx-auto sm:px-6">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight font-display"
        >
          <span className="mr-2 font-mono text-sm align-middle text-primary">
            &gt;_
          </span>
          {profile.shortName}
        </NavLink>

        <div className="hidden gap-0.5 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-btn px-2.5 py-2 font-mono text-[0.7rem] uppercase tracking-wide transition-colors ${
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
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              className="z-50 p-2 mt-3 shadow menu dropdown-content menu-sm w-44 rounded-box bg-base-200"
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
