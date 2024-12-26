"use client";

import React, { useState, useEffect } from "react";
import '../styles/globals.css';
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaLinkedin,
  FaBriefcase,
} from "react-icons/fa";

export default function Home() {
  const [showProfile, setShowProfile] = useState(true); // State to toggle between profile photo and logo
  const [isFlipping, setIsFlipping] = useState(false); // State to handle the flipping effect

  useEffect(() => {
    // Timer logic to toggle every 7 seconds for profile and 3 seconds for logo
    const interval = setInterval(() => {
      setIsFlipping(true); // Start flipping effect
      setTimeout(() => {
        setShowProfile((prev) => !prev); // Toggle image after flip starts
        setIsFlipping(false); // End flipping effect
      }, 500); // Match the CSS transition duration
    }, showProfile ? 7000 : 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [showProfile]);

  const links = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      url: "https://wa.me/002389791877",
      aria: "Chat with me on WhatsApp",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      url: "mailto:thiagolopes344@gmail.com",
      aria: "Email Thiago Lopes",
    },
    {
      icon: <FaBriefcase />,
      title: "Portfolio Coming Soon",
      url: "#",
      aria: "Portfolio Coming Soon",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      aria: "Visit my LinkedIn profile",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      url: "https://instagram.com/thiagotheart",
      aria: "Follow me on Instagram",
    },
    {
      icon: <FaFacebook />,
      title: "Facebook",
      url: "https://facebook.com/thiagotheart",
      aria: "Follow me on Facebook",
    },
    {
      icon: <FaSpotify />,
      title: "Spotify",
      url: "https://open.spotify.com/user/21sww4kaqgwwz7w45qiwwfffi?si=8e84c7900d6c4c7c",
      aria: "Listen to my Spotify playlists",
    },
    {
      icon: <FaTwitter />,
      title: "X",
      url: "https://x.com/thiagotheart",
      aria: "Follow me on X",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      url: "https://github.com/thiagotheart",
      aria: "Visit my GitHub profile",
    },
    {
      icon: <FaYoutube />,
      title: "YouTube",
      url: "https://youtube.com/@thiagotheart",
      aria: "Watch my YouTube channel",
    },
  ];

  return (
    <div className="app-container">
      {/* Scrollable Content */}
      <div className="scrollable-container">
        <header className="header">
          <div className={`image-container ${isFlipping ? "flipping" : ""}`}>
            <Image
              src={showProfile ? "/profile.jpg" : "/logo.jpg"}
              alt={showProfile ? "Profile Photo" : "Logo"}
              width={100} // Reduced size by 20%
              height={100}
              className="profile-logo"
              priority
            />
          </div>
          <h1 className="title">Thiago Lopes</h1>
          <p className="phrase">Experience, Design, Explore!</p>
          <p className="description">
            🌍 Designer | 💻 IT Technician | 🐠 Scuba Diver | ⛵ Skipper | 🚀 Entrepreneur
          </p>
        </header>

        <main className="links-container">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label={link.aria}
            >
              <span className="icon">{link.icon}</span>
              {link.title}
              <span className="ellipsis">...</span>
            </a>
          ))}
        </main>
      </div>
    </div>
  );
}
