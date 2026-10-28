import { networkGroups } from '@/content/skills';

export function GroupAccordion() {
  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-heading font-bold text-fiber mb-6">
        Everything we install and support
      </h3>
      {networkGroups.map((group) => (
        <details key={group.id} className="bg-bp-700/30 rounded-lg border border-fiber/20">
          <summary className="px-6 py-4 cursor-pointer font-heading font-bold text-paper hover:text-fiber transition-colors">
            {group.title}
          </summary>
          <div className="px-6 pb-4 pt-2">
            <p className="text-paper/70 mb-4">{group.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 rounded-full text-sm bg-fiber/10 text-fiber border border-fiber/30"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
