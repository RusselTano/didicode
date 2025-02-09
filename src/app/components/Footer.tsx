"use client"; // Obligatoire pour Next.js 13+ (rendu côté client)
import { useState, useEffect } from "react";
import { ArrowBigUpDash } from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full mb-6">
      <p>&copy; 2025 Dylane Tano. Tout droit resevee</p>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-2 text-slate-800 rounded dark:text-white bg-secondary-100  dark:bg-primary-800"
        >
          <ArrowBigUpDash />
        </button>
      )}
    </footer>
  );
}
