'use client';

import { useState } from 'react';
import { rackUnits } from '@/content/rack';
import { networkGroups } from '@/content/skills';

export function RackDiagram() {
  const [selectedUnit, setSelectedUnit] = useState(rackUnits[0]);
  const selectedGroup = networkGroups.find((g) => g.id === selectedUnit.groupId);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Rack visualization */}
      <div className="bg-bp-700/30 rounded-lg p-6 border border-fiber/20">
        <h3 className="text-xl font-heading font-bold text-fiber mb-6 text-center">
          Server Rack
        </h3>
        <div className="space-y-2">
          {rackUnits.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              className={`w-full text-left px-4 py-3 rounded border-2 transition-all font-mono text-sm flex items-center justify-between ${
                selectedUnit.id === unit.id
                  ? 'bg-fiber/20 border-fiber text-fiber font-bold'
                  : 'bg-bp-900/50 border-fiber/30 text-paper/70 hover:border-fiber/50'
              }`}
            >
              <span>{unit.label}</span>
              <div
                className={`w-2 h-2 rounded-full ${
                  selectedUnit.id === unit.id ? 'bg-link animate-pulse' : 'bg-link/40'
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Services panel */}
      <div
        role="region"
        aria-label="Rack details"
        aria-live="polite"
        className="bg-bp-700/50 rounded-lg p-6 border border-fiber/20"
      >
        <h4 className="text-2xl font-heading font-bold text-fiber mb-3">
          {selectedGroup?.title}
        </h4>
        <p className="text-paper/70 mb-6">{selectedGroup?.blurb}</p>
        <div className="flex flex-wrap gap-2">
          {selectedGroup?.skills.map((skill) => (
            <span
              key={skill.name}
              className="px-3 py-1.5 rounded-full text-sm bg-fiber/10 text-fiber border border-fiber/30"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
