export function AgentGraph() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      focusable="false"
    >
      {/* Grid background */}
      <defs>
        <pattern id="agent-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(169, 193, 255, 0.08)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#agent-grid)" />

      {/* User node (left) */}
      <circle cx="60" cy="150" r="20" fill="none" stroke="#FF5CA8" strokeWidth="2" />
      <text x="60" y="190" textAnchor="middle" className="text-[10px] fill-paper/60">
        User
      </text>

      {/* Dotted line to Router */}
      <path
        d="M 85 150 L 140 150"
        stroke="#FF5CA8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 4"
        fill="none"
      />

      {/* Router Agent (center) */}
      <circle cx="160" cy="150" r="22" fill="none" stroke="#FF5CA8" strokeWidth="2.5" />
      <text x="160" y="192" textAnchor="middle" className="text-[10px] fill-paper/60">
        Router
      </text>

      {/* Lines from Router to other agents */}
      <path
        d="M 180 145 L 220 100"
        stroke="#FF5CA8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 4"
        fill="none"
      />
      <path
        d="M 180 155 L 220 200"
        stroke="#FF5CA8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 4"
        fill="none"
      />

      {/* SQL Agent (top right) */}
      <circle cx="240" cy="90" r="18" fill="none" stroke="#FF5CA8" strokeWidth="2" />
      <text x="240" y="125" textAnchor="middle" className="text-[10px] fill-paper/60">
        SQL Agent
      </text>

      {/* RAG (bottom right) */}
      <circle cx="240" cy="210" r="18" fill="none" stroke="#FF5CA8" strokeWidth="2" />
      <text x="240" y="245" textAnchor="middle" className="text-[10px] fill-paper/60">
        RAG
      </text>

      {/* Lines to Tools */}
      <path
        d="M 260 95 L 310 80"
        stroke="#FF5CA8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 4"
        fill="none"
      />
      <path
        d="M 260 100 L 310 130"
        stroke="#FF5CA8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 4"
        fill="none"
      />

      {/* Tools (far right) */}
      <circle cx="330" cy="75" r="12" fill="none" stroke="#FF5CA8" strokeWidth="1.5" />
      <circle cx="330" cy="135" r="12" fill="none" stroke="#FF5CA8" strokeWidth="1.5" />
      <text x="330" y="165" textAnchor="middle" className="text-[9px] fill-paper/60">
        Tools
      </text>
    </svg>
  );
}
