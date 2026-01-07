import React from "react";
import { animeLocations } from "../../data";

const AnimeTab = () => {
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", margin: "0 0 16px 0", fontSize: "16px" }}>
        🎌 Anime & Gaming Pilgrimage Guide
      </h3>

      {/* Enhanced grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {animeLocations.map((anime, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "12px",
              overflow: "hidden",
              border: `1px solid ${anime.color || "#f59e0b"}40`,
            }}
          >
            {/* Image header */}
            <div style={{ position: "relative" }}>
              <img
                src={anime.image}
                alt={anime.anime}
                loading="lazy"
                style={{ width: "100%", height: "140px", objectFit: "cover" }}
                onError={(e) => {
                  // optional: fallback if image URL breaks
                  e.currentTarget.style.display = "none";
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                  padding: "20px 12px 10px",
                }}
              >
                <div style={{ fontSize: "16px", fontWeight: 600, color: "white" }}>
                  {anime.anime}
                </div>
                <div style={{ fontSize: "11px", color: "#cbd5e1" }}>{anime.city}</div>
              </div>
            </div>

            {/* Locations tags */}
            <div style={{ padding: "12px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {anime.locations.map((loc, j) => (
                  <div
                    key={j}
                    style={{
                      background: `${anime.color || "#f59e0b"}20`,
                      border: `1px solid ${anime.color || "#f59e0b"}40`,
                      padding: "5px 10px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      color: "#fde68a",
                    }}
                  >
                    📍 {loc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nintendo World Callout */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(234, 88, 12, 0.2) 100%)",
          border: "2px solid rgba(239, 68, 68, 0.5)",
          borderRadius: "12px",
          padding: "16px",
          marginTop: "20px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=240&h=160&fit=crop"
          alt="Nintendo"
          loading="lazy"
          style={{
            borderRadius: "8px",
            width: "120px",
            height: "80px",
            objectFit: "cover",
          }}
        />
        <div style={{ flex: 1, minWidth: "200px" }}>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#fca5a5", marginBottom: "4px" }}>
            🎮 Super Nintendo World - MUST DO!
          </div>
          <div style={{ fontSize: "12px", color: "#fed7aa", lineHeight: "1.5" }}>
            Mario Kart ride, Yoshi&apos;s Adventure, and NEW Donkey Kong area at Universal Studios
            Japan, Osaka.
            <strong style={{ color: "#fca5a5" }}> Book USJ 1-2 months ahead!</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeTab;
