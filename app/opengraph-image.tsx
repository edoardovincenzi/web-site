import { ImageResponse } from "next/og";

export const alt = "Edoardo Vincenzi — Senior Front-end Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #18181b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#ededed",
              letterSpacing: "-1px",
            }}
          >
            EV
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#3b82f6",
            }}
          >
            .
          </span>
        </div>
        <span
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: "-0.5px",
            marginBottom: 16,
          }}
        >
          Edoardo Vincenzi
        </span>
        <span
          style={{
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          Senior Front-end Developer
        </span>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 32,
          }}
        >
          {["React", "Next.js", "TypeScript"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 18,
                color: "#60a5fa",
                border: "1px solid rgba(37,99,235,0.3)",
                borderRadius: 9999,
                padding: "8px 20px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
