// src/components/itinerary/AnimeTab.jsx
import React from "react";
import { animeLocations } from "../../data";

const AnimeTab = () => {
  return (
    <div>
      <h3 style={{ color: "#f1f5f9", margin: "0 0 16px 0", fontSize: "16px" }}>
        🎌 Anime & Gaming Pilgrimage Guide
      </h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px",
      }}>
        {animeLocations.map((anime, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.05)",
            borderRadius: "12px",
            overflow: "hidden",
            border: `1px solid ${anime.color || "#f59e0b"}40`,
          }}>
            <div style={{ position: "relative", height: "160px" }}>
              <img
                src={anime.image}
                alt={anime.anime}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                padding: "16px 12px 10px",
              }}>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "white" }}>{anime.anime}</div>
                <div style={{ fontSize: "11px", color: "#cbd5e1" }}>{anime.city}</div>
              </div>
            </div>

            <div style={{ padding: "12px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {anime.locations.map((loc, j) => (
                <div key={j} style={{
                  background: `${anime.color || "#f59e0b"}20`,
                  border: `1px solid ${anime.color || "#f59e0b"}40`,
                  padding: "5px 10px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  color: "#fde68a",
                }}>
                  📍 {loc}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeTab;
