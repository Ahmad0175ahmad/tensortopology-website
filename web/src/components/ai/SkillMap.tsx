'use client';

import { useState, useEffect, useRef } from 'react';
import { aiGroups } from '@/content/skills';

export function SkillMap() {
  const [selectedSkill, setSelectedSkill] = useState(aiGroups[0].skills[0]);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  // When a skill is clicked, find which group it belongs to
  const handleSkillClick = (skill: typeof selectedSkill, groupIndex: number) => {
    setSelectedSkill(skill);
    setSelectedGroupIndex(groupIndex);
  };

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-[2fr,1fr] gap-8 items-start">
        {/* Left side - Skills organized by group */}
        <div className="space-y-16">
          {aiGroups.map((group, groupIndex) => (
            <div
              key={group.id}
              ref={(el) => {
                groupRefs.current[groupIndex] = el;
              }}
              className="space-y-4 scroll-mt-32"
              id={`group-${group.id}`}
            >
              <div>
                <h3 className="text-2xl font-heading font-bold text-neuron mb-2 flex items-center gap-3">
                  <span className="w-2 h-2 bg-neuron rounded-full animate-pulse" />
                  {group.title}
                </h3>
                <p className="text-paper/70 text-sm">{group.blurb}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <button
                    key={skill.name}
                    onClick={() => handleSkillClick(skill, groupIndex)}
                    aria-pressed={selectedSkill.name === skill.name}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedSkill.name === skill.name
                        ? 'bg-neuron text-bp-900 font-semibold shadow-lg shadow-neuron/30 scale-105'
                        : 'bg-neuron/10 text-neuron border border-neuron/30 hover:bg-neuron/20 hover:border-neuron/50 hover:scale-105'
                    }`}
                  >
                    {skill.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Detail panel that moves to the clicked skill's group - Desktop only */}
        <div className="hidden lg:block">
          <div
            className="sticky transition-all duration-500 ease-out"
            style={{ top: `${96 + selectedGroupIndex * 320}px` }}
          >
            <div
              role="region"
              aria-label="Skill details"
              aria-live="polite"
              className="relative p-6 bg-gradient-to-br from-neuron/10 to-neuron/5 rounded-xl border border-neuron/30 shadow-xl backdrop-blur-sm overflow-hidden group min-h-[250px]"
            >
              {/* Animated glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neuron/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-neuron/10 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-1 h-16 bg-gradient-to-b from-neuron to-neuron/30 rounded-full flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="text-xs text-neuron/70 font-medium mb-1 uppercase tracking-wide">
                      {aiGroups[selectedGroupIndex]?.title || 'Details'}
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-neuron leading-tight">
                      {selectedSkill.name}
                    </h4>
                  </div>
                </div>
                <p className="text-paper/90 leading-relaxed">{selectedSkill.detail}</p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-neuron/20 rounded-bl-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Show detail below all skills */}
      <div className="lg:hidden mt-8">
        <div
          role="region"
          aria-label="Skill details"
          aria-live="polite"
          className="relative p-6 bg-gradient-to-br from-neuron/10 to-neuron/5 rounded-xl border border-neuron/30 shadow-xl backdrop-blur-sm overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-12 bg-gradient-to-b from-neuron to-neuron/30 rounded-full" />
            <div>
              <div className="text-xs text-neuron/70 font-medium uppercase tracking-wide">
                {aiGroups[selectedGroupIndex]?.title}
              </div>
              <h4 className="text-xl font-heading font-bold text-neuron">{selectedSkill.name}</h4>
            </div>
          </div>
          <p className="text-paper/90 leading-relaxed text-sm">{selectedSkill.detail}</p>
        </div>
      </div>
    </div>
  );
}
