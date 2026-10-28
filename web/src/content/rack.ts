export type RackUnit = {
  id: string;
  label: string;
  groupId: string; // references a networkGroups id from skills.ts
};

export const rackUnits: RackUnit[] = [
  { id: 'router-firewall', label: 'Router & firewall', groupId: 'firewall-security' },
  { id: 'core-switch', label: 'Core switch', groupId: 'network-infrastructure' },
  { id: 'patch-panel', label: 'Patch panel', groupId: 'fiber-physical' },
  { id: 'wifi-controller', label: 'Wi-Fi controller', groupId: 'wifi' },
  { id: 'server', label: 'Server', groupId: 'servers' },
  { id: 'nvr', label: 'NVR', groupId: 'cctv' },
  { id: 'ip-pbx', label: 'IP PBX', groupId: 'voip' },
  { id: 'ups', label: 'UPS', groupId: 'power-server-room' },
];
