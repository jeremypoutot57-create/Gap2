"use client";
import { useState } from "react";
import { ev } from "./mesure";

const LIB = process.env.NEXT_PUBLIC_BUNNY_LIBRARY || "602292";
const VID = process.env.NEXT_PUBLIC_BUNNY_VIDEO || "71dcc404-c0ee-4899-9cc6-53b72c7ff2d7";

export default function Video() {
  const [lance, setLance] = useState(false);

  if (lance) {
    return (
      <div className="piece reveal vu">
        <iframe
          src={`https://iframe.mediadelivery.net/embed/${LIB}/${VID}?autoplay=true&preload=true`}
          title="Cap. — ce que nous regardons dans un dossier"
          loading="lazy"
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="piece reveal">
      <div className="voile" />
      <button
        className="play"
        type="button"
        onClick={() => {
          ev("video_lecture");
          setLance(true);
        }}
      >
        <span className="rond">
          <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
            <path d="M19 11 0 22V0z" fill="#E85D8A" />
          </svg>
        </span>
        <span className="lbl">Ce que nous regardons dans un dossier</span>
      </button>
    </div>
  );
}
