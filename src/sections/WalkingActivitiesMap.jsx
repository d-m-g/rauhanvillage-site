"use client";

import L from "leaflet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./WalkingActivitiesMap.module.css";

const COORD_PRECISION = 5;
const PANEL_HIDE_DELAY_MS = 140;

function coordKey(lat, lng) {
  return `${lat.toFixed(COORD_PRECISION)},${lng.toFixed(COORD_PRECISION)}`;
}

function groupMarkers(activities) {
  const entries = activities
    .map((item, index) => ({ item, number: index + 1 }))
    .filter(({ item }) => item.lat != null && item.lng != null);

  const groups = new Map();
  for (const entry of entries) {
    const key = coordKey(entry.item.lat, entry.item.lng);
    if (!groups.has(key)) {
      groups.set(key, {
        lat: entry.item.lat,
        lng: entry.item.lng,
        entries: [],
      });
    }
    groups.get(key).entries.push(entry);
  }

  return Array.from(groups.values()).map((group, index) => ({
    id: `marker-group-${index}`,
    position: [group.lat, group.lng],
    entries: group.entries,
    isGroup: group.entries.length > 1,
  }));
}

function createNumberIcon(number) {
  return L.divIcon({
    className: styles.markerWrap,
    html: `<span class="${styles.markerBadge}">${number}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function createGroupIcon(count) {
  return L.divIcon({
    className: styles.markerWrap,
    html: `<span class="${styles.markerBadge} ${styles.markerBadgeGroup}"><svg class="${styles.markerBadgeIcon}" viewBox="0 0 16 16" aria-hidden="true"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span class="${styles.markerBadgeCount}">${count}</span></span>`,
    iconSize: [44, 34],
    iconAnchor: [22, 17],
  });
}

function scrollToActivityCard(cardId) {
  const card = document.getElementById(cardId);
  if (!card) {
    return;
  }

  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.setAttribute("data-highlighted", "true");
  window.setTimeout(() => {
    card.removeAttribute("data-highlighted");
  }, 1800);
}

function HoverPanel({ entries, getActivityCardId, onKeepOpen, onNavigate, onRequestClose, x, y }) {
  return (
    <div
      className={styles.hoverPanel}
      onMouseEnter={onKeepOpen}
      onMouseLeave={onRequestClose}
      style={{ left: x, top: y }}
    >
      <div aria-hidden="true" className={styles.hoverPanelBridge} />
      <div className={styles.hoverPanelBody}>
        {entries.map((entry) => (
          <button
            className={styles.previewItem}
            key={entry.number}
            onClick={() => onNavigate(getActivityCardId(entry.number - 1))}
            type="button"
          >
            <span className={styles.previewTitle}>
              <span className={styles.previewNumber}>{entry.number}.</span>
              {entry.item.title}
            </span>
            <span className={styles.previewDistance}>{entry.item.distance}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function MapMarkers({ getActivityCardId, groups, panel, setPanel, panelTimersRef }) {
  const map = useMap();

  const clearHideTimer = useCallback(() => {
    if (panelTimersRef.current.hide) {
      window.clearTimeout(panelTimersRef.current.hide);
      panelTimersRef.current.hide = null;
    }
  }, [panelTimersRef]);

  const updatePanel = useCallback(
    (groupId) => {
      const group = groups.find((item) => item.id === groupId);
      if (!group) {
        setPanel(null);
        return;
      }

      const point = map.latLngToContainerPoint(group.position);
      setPanel({
        entries: group.entries,
        groupId: group.id,
        x: point.x,
        y: point.y,
      });
    },
    [groups, map, setPanel],
  );

  const openPanel = useCallback(
    (groupId) => {
      clearHideTimer();
      updatePanel(groupId);
    },
    [clearHideTimer, updatePanel],
  );

  const scheduleClose = useCallback(() => {
    clearHideTimer();
    panelTimersRef.current.hide = window.setTimeout(() => setPanel(null), PANEL_HIDE_DELAY_MS);
  }, [clearHideTimer, panelTimersRef, setPanel]);

  const handleNavigate = useCallback(
    (cardId) => {
      clearHideTimer();
      setPanel(null);
      scrollToActivityCard(cardId);
    },
    [clearHideTimer, setPanel],
  );

  useEffect(() => {
    if (!panel) {
      return undefined;
    }

    const syncPosition = () => updatePanel(panel.groupId);
    const closePanel = () => {
      clearHideTimer();
      setPanel(null);
    };
    map.on("move", syncPosition);
    map.on("zoom", syncPosition);
    map.on("resize", syncPosition);
    map.on("click", closePanel);
    map.on("dragstart", closePanel);

    return () => {
      map.off("move", syncPosition);
      map.off("zoom", syncPosition);
      map.off("resize", syncPosition);
      map.off("click", closePanel);
      map.off("dragstart", closePanel);
    };
  }, [clearHideTimer, map, panel, setPanel, updatePanel]);

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  return (
    <>
      {groups.map((group) => (
        <Marker
          eventHandlers={{
            click: () => {
              if (!group.isGroup) {
                handleNavigate(getActivityCardId(group.entries[0].number - 1));
                return;
              }
              openPanel(group.id);
            },
            mouseout: scheduleClose,
            mouseover: () => openPanel(group.id),
          }}
          icon={
            group.isGroup
              ? createGroupIcon(group.entries.length)
              : createNumberIcon(group.entries[0].number)
          }
          key={group.id}
          position={group.position}
        />
      ))}
    </>
  );
}

export default function WalkingActivitiesMap({
  activities,
  getActivityCardId = (index) => `walking-activity-${index + 1}`,
}) {
  const markerGroups = useMemo(() => groupMarkers(activities), [activities]);
  const [panel, setPanel] = useState(null);
  const panelTimersRef = useRef({ hide: null });

  const clearHideTimer = useCallback(() => {
    if (panelTimersRef.current.hide) {
      window.clearTimeout(panelTimersRef.current.hide);
      panelTimersRef.current.hide = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearHideTimer();
    panelTimersRef.current.hide = window.setTimeout(() => setPanel(null), PANEL_HIDE_DELAY_MS);
  }, [clearHideTimer]);

  const handleNavigate = useCallback(
    (cardId) => {
      clearHideTimer();
      setPanel(null);
      scrollToActivityCard(cardId);
    },
    [clearHideTimer],
  );

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  const bounds = useMemo(() => {
    if (markerGroups.length === 0) {
      return null;
    }
    return L.latLngBounds(markerGroups.map((group) => group.position));
  }, [markerGroups]);

  if (markerGroups.length === 0) {
    return null;
  }

  const hidePanelImmediately = useCallback(() => {
    clearHideTimer();
    setPanel(null);
  }, [clearHideTimer]);

  return (
    <div className={styles.mapShell}>
      <div className={styles.mapWrap} onMouseLeave={hidePanelImmediately}>
        <MapContainer
          bounds={bounds}
          boundsOptions={{ padding: [36, 36] }}
          className={styles.map}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapMarkers
            getActivityCardId={getActivityCardId}
            groups={markerGroups}
            panel={panel}
            panelTimersRef={panelTimersRef}
            setPanel={setPanel}
          />
        </MapContainer>
        {panel ? (
          <HoverPanel
            entries={panel.entries}
            getActivityCardId={getActivityCardId}
            onKeepOpen={clearHideTimer}
            onNavigate={handleNavigate}
            onRequestClose={scheduleClose}
            x={panel.x}
            y={panel.y}
          />
        ) : null}
      </div>
      <p className={styles.caption}>
        Hover a marker for name and distance. Click to jump to the activity card.
        Map data &copy; OpenStreetMap contributors.
      </p>
    </div>
  );
}
