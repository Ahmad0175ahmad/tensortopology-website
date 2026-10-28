export function TopologyArt() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      focusable="false"
    >
      {/* Grid background */}
      <defs>
        <pattern id="topology-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(169, 193, 255, 0.08)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#topology-grid)" />

      {/* Internet (top) */}
      <circle cx="200" cy="50" r="20" fill="none" stroke="#FFAE42" strokeWidth="2" />
      <text x="200" y="30" textAnchor="middle" className="text-[10px] fill-paper/60">
        Internet
      </text>

      {/* Line to Firewall */}
      <path
        d="M 200 70 L 200 100"
        stroke="#FFAE42"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Firewall */}
      <rect
        x="175"
        y="100"
        width="50"
        height="30"
        fill="none"
        stroke="#FFAE42"
        strokeWidth="2.5"
        rx="2"
      />
      <text x="200" y="148" textAnchor="middle" className="text-[10px] fill-paper/60">
        Firewall
      </text>

      {/* Line to Core Switch */}
      <path
        d="M 200 130 L 200 170"
        stroke="#FFAE42"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Core Switch */}
      <rect
        x="170"
        y="170"
        width="60"
        height="35"
        fill="none"
        stroke="#FFAE42"
        strokeWidth="2.5"
        rx="2"
      />
      <text x="200" y="222" textAnchor="middle" className="text-[10px] fill-paper/60">
        Core Switch
      </text>

      {/* Lines to endpoints */}
      <path
        d="M 180 205 L 80 250"
        stroke="#FFAE42"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 200 205 L 200 250"
        stroke="#FFAE42"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 220 205 L 320 250"
        stroke="#FFAE42"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Access Points (left) */}
      <circle cx="80" cy="265" r="14" fill="none" stroke="#FFAE42" strokeWidth="2" />
      <text x="80" y="290" textAnchor="middle" className="text-[9px] fill-paper/60">
        APs
      </text>

      {/* Cameras (center) */}
      <circle cx="200" cy="265" r="14" fill="none" stroke="#FFAE42" strokeWidth="2" />
      <text x="200" y="290" textAnchor="middle" className="text-[9px] fill-paper/60">
        Cameras
      </text>

      {/* Servers (right) */}
      <circle cx="320" cy="265" r="14" fill="none" stroke="#FFAE42" strokeWidth="2" />
      <text x="320" y="290" textAnchor="middle" className="text-[9px] fill-paper/60">
        Servers
      </text>
    </svg>
  );
}
