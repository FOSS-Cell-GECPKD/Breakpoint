import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [sidebarClosing, setSidebarClosing] = useState<boolean>(false);
  const location = useLocation();

  const linkToMainWebsite =
    "https://foss-cell-gecpkd.github.io/FOSS_GECPKD_Website/";

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Handle sidebar toggling with animation
  const toggleSidebar = (): void => {
    if (sidebarOpen) {
      setSidebarClosing(true);

      setTimeout(() => {
        setSidebarOpen(false);
        setSidebarClosing(false);
      }, 300); // This should match your animation duration
    } else {
      setSidebarOpen(true);
    }
  };
  return (
    <>
      {/* Mobile Header */}
      {isMobile && (
        <div className="flex justify-between items-center p-2.5">
          <div
            className="flex items-center ml-2.5"
            onClick={() => window.open(linkToMainWebsite, "_blank")}
          >
            <img
              src="/Breakpoint/foss-icon-black.svg"
              alt="FOSS Club Logo"
              className="h-10 mr-2.5"
            />
            <div className="flex flex-col justify-center">
              <h1 className="m-0 text-base font-bold">FOSS Club</h1>
              <p className="m-0 text-xs opacity-80">GEC, Palakkad</p>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="border-none bg-transparent cursor-pointer mt-2.5"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="21"
              viewBox="0 0 28 21"
              fill="none"
            >
              <path
                d="M0.263184 2.23792H27.3803M0.263184 10.4699H27.3803M0.263184 18.2177H27.3803"
                stroke="#787878"
                strokeWidth="3.87388"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <nav
          className="flex justify-between items-center px-16 pt-16 w-full max-w-full mx-auto relative z-10"
          onClick={() => window.open(linkToMainWebsite, "_blank")}
        >
          <div className="flex items-center">
            <img
              src="/Breakpoint/foss-icon-black.svg"
              alt="FOSS Club Logo"
              className="w-12 h-12 mr-2.5"
            />
            <div>
              <h1 className="m-0 text-lg font-bold">FOSS Club</h1>
              <p className="m-0 text-sm opacity-80">GEC, Palakkad</p>
            </div>
          </div>
          <div className="flex gap-8 font-['Poppins']">
            <a
              href={linkToMainWebsite}
              className="text-black no-underline text-base opacity-80 transition-all hover:opacity-100 hover:text-[#0c81f6] font-['Poppins']"
            >
              Home
            </a>
            <Link
              to="/"
              className={`text-black no-underline text-base opacity-80 transition-all hover:opacity-100 hover:text-[#0c81f6] font-['Poppins'] ${
                location.pathname === "/"
                  ? ' opacity-100 relative after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:rounded-3xl after:h-[3px] after:bg-[#0c81f6]'
                  : ""
              }`}
            >
              Breakpoint
            </Link>
            {/* Commented out links */}
            {/*
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>Team</Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
            */}
          </div>
        </nav>
      )}

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-opacity-60 bg-white backdrop-blur-md flex flex-col p-5 z-50 ${
            sidebarClosing ? "animate-slideOutRight" : "animate-slideInRight"
          }`}
          style={{
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "-5px 0 15px rgba(0, 0, 0, 0.1)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <button
            onClick={toggleSidebar}
            className="bg-transparent border-0 text-black text-xl cursor-pointer self-end mb-5 opacity-80 transition-opacity hover:opacity-100"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            ✖
          </button>
          <a
            href={linkToMainWebsite}
            className="py-3 px-4 text-black no-underline block text-lg mb-1 rounded-lg transition-all hover:bg-[rgba(12,129,246,0.8)] hover:text-black hover:translate-x-[-5px]"
          >
            Home
          </a>
          <Link
            to="/"
            className="py-3 px-4 text-black no-underline block text-lg mb-1 rounded-lg transition-all hover:bg-[rgba(12,129,246,0.8)] hover:text-black hover:translate-x-[-5px]"
            onClick={toggleSidebar}
          >
            Breakpoint
          </Link>
          {/* Commented out links */}
          {/*
          <Link to="/about" className="nav-link" onClick={toggleSidebar}>About</Link>
          <Link to="/team" className="nav-link" onClick={toggleSidebar}>Team</Link>
          <Link to="/gallery" className="nav-link" onClick={toggleSidebar}>Gallery</Link>
          */}
        </div>
      )}
    </>
  );
};

export default Header;
