import React from "react";

/**
 * Minimal default runnable UI to verify the frontend container starts successfully.
 */
export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.h1}>Harmony Music Player</h1>
        <p style={styles.p}>
          React frontend is running. Next steps: connect to FastAPI backend and
          Supabase.
        </p>
        <p style={styles.meta}>
          Tip: update <code>VITE_API_BASE_URL</code> in <code>.env</code> to
          point to your backend.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "#0b1220",
    color: "#f9fafb",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'"
  },
  card: {
    width: "min(720px, 92vw)",
    borderRadius: 16,
    padding: 24,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)"
  },
  h1: {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: -0.4
  },
  p: { marginTop: 10, marginBottom: 10, opacity: 0.92, lineHeight: 1.5 },
  meta: { margin: 0, opacity: 0.75, fontSize: 14 }
};
