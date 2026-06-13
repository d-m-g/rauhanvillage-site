"use client";

import L from "leaflet";
import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapMarkerEditor.module.css";

const COORD_DECIMALS = 5;

function createNumberIcon(number, dragging = false) {
  return L.divIcon({
    className: styles.markerWrap,
    html: `<span class="${styles.markerBadge}${dragging ? ` ${styles.markerBadgeDragging}` : ""}">${number}</span>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

function FitBoundsOnce({ positions }) {
  const map = useMap();
  const fittedRef = useRef(false);

  useEffect(() => {
    if (fittedRef.current || positions.length === 0) {
      return;
    }
    fittedRef.current = true;
    const bounds = L.latLngBounds(positions);
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, positions]);

  return null;
}

function round(value) {
  return Number(value.toFixed(COORD_DECIMALS));
}

export default function MapMarkerEditor({ initialMarkers }) {
  const [markers, setMarkers] = useState(initialMarkers);
  const [copied, setCopied] = useState(false);

  const positions = useMemo(() => markers.map((m) => [m.lat, m.lng]), [markers]);

  const handleDragEnd = (number, event) => {
    const { lat, lng } = event.target.getLatLng();
    setMarkers((prev) =>
      prev.map((m) => (m.number === number ? { ...m, lat: round(lat), lng: round(lng) } : m)),
    );
  };

  const handleReset = () => {
    setMarkers(initialMarkers);
    setCopied(false);
  };

  const handleCopy = async () => {
    const text = markers
      .map(
        (m) =>
          `// ${m.number}. ${m.title}\nlat: ${m.lat},\nlng: ${m.lng},`,
      )
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Clipboard copy failed", error);
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.mapShell}>
        <MapContainer className={styles.map} center={[61.1964, 28.685]} zoom={15} scrollWheelZoom>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBoundsOnce positions={positions} />
          {markers.map((marker) => (
            <Marker
              draggable
              eventHandlers={{
                dragend: (event) => handleDragEnd(marker.number, event),
              }}
              icon={createNumberIcon(marker.number)}
              key={marker.number}
              position={[marker.lat, marker.lng]}
              title={`${marker.number}. ${marker.title}`}
            />
          ))}
        </MapContainer>
      </div>
      <aside className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2 className={styles.panelTitle}>Marker coordinates</h2>
          <div className={styles.panelActions}>
            <button className={styles.secondaryButton} onClick={handleReset} type="button">
              Reset
            </button>
            <button className={styles.primaryButton} onClick={handleCopy} type="button">
              {copied ? "Copied" : "Copy as code"}
            </button>
          </div>
        </div>
        <p className={styles.panelHint}>
          Drag any marker on the map. Coordinates update live below — copy the snippet and paste into
          <code className={styles.inlineCode}>src/lib/content.js</code>.
        </p>
        <ol className={styles.list}>
          {markers.map((marker) => {
            const original = initialMarkers.find((m) => m.number === marker.number);
            const changed =
              original && (original.lat !== marker.lat || original.lng !== marker.lng);
            return (
              <li className={styles.listItem} key={marker.number}>
                <div className={styles.listMain}>
                  <span className={styles.listNumber}>{marker.number}.</span>
                  <span className={styles.listTitle}>{marker.title}</span>
                  {changed ? <span className={styles.changedBadge}>Edited</span> : null}
                </div>
                <code className={styles.listCoords}>
                  lat: {marker.lat}, lng: {marker.lng}
                </code>
              </li>
            );
          })}
        </ol>
      </aside>
    </div>
  );
}
