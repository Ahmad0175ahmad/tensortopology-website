import { describe, it, expect } from 'vitest';
import { aiGroups, networkGroups, supportPlans } from '../skills';
import { rackUnits } from '../rack';
import { projects, quickShop } from '../projects';
import { site, team } from '../site';

describe('AI skills', () => {
  it('has the four AI & Automation groups in order', () => {
    expect(aiGroups.map((g) => g.id)).toEqual([
      'ai-ml',
      'software',
      'automation-testing',
      'devops-deployment',
    ]);
  });

  it('includes every skill from the expertise document', () => {
    const names = aiGroups.flatMap((g) => g.skills.map((s) => s.name));
    for (const n of [
      'Agentic AI & AI Agents',
      'RAG (Retrieval-Augmented Generation)',
      'Multi-Agent Systems',
      'SQL Agents',
      'AI Sales Support Agents',
      'LLM & Model Integration',
      'Model Training & Fine-Tuning',
      'AI Pipelines',
      'Microsoft Azure AI',
      'AI Deployment',
      'Selenium',
      'API Testing',
      'GitHub Actions',
      'Cloud & Azure',
    ]) {
      expect(names).toContain(n);
    }
  });

  it('gives every skill a non-empty detail and every group the right track', () => {
    for (const g of aiGroups) {
      expect(g.track).toBe('ai');
      for (const s of g.skills) expect(s.detail.length).toBeGreaterThan(10);
    }
  });
});

describe('Networking skills', () => {
  it('has the 13 service groups and no cloud group', () => {
    expect(networkGroups).toHaveLength(13);
    expect(networkGroups.map((g) => g.id)).not.toContain('cloud-remote');
    for (const g of networkGroups) {
      expect(g.track).toBe('network');
      expect(g.skills.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('has no duplicate skills inside a group', () => {
    for (const g of networkGroups) {
      const names = g.skills.map((s) => s.name);
      expect(new Set(names).size).toBe(names.length);
    }
  });

  it('contains key services from the projects document', () => {
    const names = networkGroups.flatMap((g) => g.skills.map((s) => s.name));
    for (const n of [
      'MikroTik Router Configuration',
      'Site-to-Site VPN',
      'IP CCTV Installation',
      'Active Directory Deployment',
      'Fiber Termination',
      'UPS Installation',
    ]) {
      expect(names).toContain(n);
    }
  });

  it('has the three support plans', () => {
    expect(supportPlans.map((p) => p.name)).toEqual([
      'Basic Support',
      'Business Support',
      'Enterprise Support',
    ]);
  });
});

describe('rack units', () => {
  it('has 8 units and each points at a real group', () => {
    expect(rackUnits).toHaveLength(8);
    const ids = new Set(networkGroups.map((g) => g.id));
    for (const u of rackUnits) expect(ids.has(u.groupId)).toBe(true);
  });
});

describe('projects', () => {
  const ai = projects.filter((p) => p.track === 'ai');
  const net = projects.filter((p) => p.track === 'network');
  const allImages = projects.flatMap((p) => p.images);

  it('has the four AI projects in order', () => {
    expect(ai.map((p) => p.title)).toEqual([
      'Multi-Agent System',
      'RAG System',
      'SQL Agent',
      'WhatsApp Expense Tracker',
    ]);
  });

  it('has the four Quick Shop networking projects', () => {
    expect(net).toHaveLength(4);
    for (const p of net) expect(p.eyebrow).toMatch(/Quick Shop/);
  });

  it('gives every project at least one image with alt text, a size and a valid kind', () => {
    for (const p of projects) {
      expect(p.images.length).toBeGreaterThanOrEqual(1);
      expect(p.points.length).toBeGreaterThanOrEqual(2);
      expect(p.tech.length).toBeGreaterThanOrEqual(1);
    }
    for (const img of allImages) {
      expect(img.alt.length).toBeGreaterThan(20);
      expect(img.width).toBeGreaterThan(0);
      expect(img.height).toBeGreaterThan(0);
      expect(['screenshot', 'photo', 'illustration']).toContain(img.kind);
    }
  });

  it('uses screenshots for AI projects and local paths everywhere', () => {
    for (const p of ai) for (const i of p.images) expect(i.kind).toBe('screenshot');
    for (const p of ai)
      for (const i of p.images) expect(i.src.startsWith('/projects/ai/')).toBe(true);
    for (const p of net)
      for (const i of p.images) expect(i.src.startsWith('/projects/network/')).toBe(true);
  });

  it('puts "illustrative" in the file name of every illustration', () => {
    for (const i of allImages.filter((x) => x.kind === 'illustration')) {
      expect(i.src).toContain('illustrative');
    }
  });

  it('keeps at least one real photo in the networking projects', () => {
    expect(net.flatMap((p) => p.images).some((i) => i.kind === 'photo')).toBe(true);
  });

  it('keeps the Netflix disclaimer on the RAG project', () => {
    const rag = projects.find((p) => p.id === 'ai-rag')!;
    expect(rag.note).toMatch(/not affiliated with netflix/i);
  });

  it('has unique ids', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('Quick Shop numbers', () => {
  it('matches the project document', () => {
    const get = (label: string) => quickShop.stats.find((s) => s.label === label)?.value;
    expect(get('IP cameras')).toBe(16);
    expect(get('Wi-Fi cameras')).toBe(2);
    expect(get('PCs')).toBe(4);
    expect(get('IP printers')).toBe(2);
    expect(get('TP-Link Wi-Fi device')).toBe(1);
    expect(get('Biometric terminal')).toBe(1);
  });
});

describe('team and contact details', () => {
  const ahmed = team.find((p) => p.id === 'ahmed')!;
  const najam = team.find((p) => p.id === 'najam')!;

  it('has the two people with the right roles', () => {
    expect(team).toHaveLength(2);
    expect(ahmed.name).toBe('Muhammad Ahmed');
    expect(ahmed.role).toBe('AI Engineer');
    expect(najam.name).toBe('Najam');
    expect(najam.role).toBe('Networking Engineer');
  });

  it('has email, phone, WhatsApp and LinkedIn for both', () => {
    for (const p of team) {
      expect(p.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
      expect(p.phone.tel).toMatch(/^\+92\d{10}$/);
      expect(p.phone.whatsapp).toMatch(/^https:\/\/wa\.me\/92\d{10}$/);
      expect(p.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\//);
      expect(p.highlights).toHaveLength(3);
    }
  });

  it('uses the confirmed contact details', () => {
    expect(ahmed.email).toBe('tensortopology@gmail.com');
    expect(ahmed.phone.tel).toBe('+923075298122');
    expect(najam.email).toBe('najamdanialdanialmasih@gmail.com');
    expect(najam.phone.tel).toBe('+923495710923');
  });

  it('routes the contact emails by topic', () => {
    expect(site.contact.aiEmail).toBe(ahmed.email);
    expect(site.contact.networkEmail).toBe(najam.email);
    expect(site.name).toBe('TensorTopology');
  });
});

// Release gate. CI runs this on the release branch: CHECK_PLACEHOLDERS=1 npm test
describe.runIf(process.env.CHECK_PLACEHOLDERS === '1')('release gate', () => {
  it('has no TODO_CONFIRM left in any content', () => {
    const all = JSON.stringify({ site, team, aiGroups, networkGroups, projects, quickShop });
    expect(all).not.toContain('TODO_CONFIRM');
  });

  it('has no project still marked draft', () => {
    expect(projects.filter((p) => p.status === 'draft').map((p) => p.id)).toEqual([]);
  });
});
