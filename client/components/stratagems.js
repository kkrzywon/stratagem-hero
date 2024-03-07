const stratagems = [
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'LIFT-850 Jump Pack',
    sequence: ['Down', 'Up', 'Up', 'Down', 'Up'],
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'B-1 Supply Pack',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Up', 'Down'],
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'AX/LAS-5 "Guard Dog" Rover',
    sequence: ['Down', 'Up', 'Left', 'Up', 'Right', 'Right'],
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'SH-20 Ballistic Shield Backpack',
    sequence: ['Down', 'Left', 'Down', 'Down', 'Up', 'Left'],
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'SH-32 Shield Generator Pack',
    sequence: ['Down', 'Up', 'Left', 'Right', 'Left', 'Right'],
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'AX/AR-23 "Guard Dog"',
    sequence: ['Down', 'Up', 'Left', 'Up', 'Right', 'Down'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'MG-43 Machine Gun',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Right'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'APW-1 Anti-Materiel Rifle',
    sequence: ['Down', 'Left', 'Right', 'Up', 'Down'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'M-105 Stalwart',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Up', 'Left'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'EAT-17 Expendable Anti-tank',
    sequence: ['Down', 'Down', 'Left', 'Up', 'Right'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'GR-8 Recoilless Rifle',
    sequence: ['Down', 'Left', 'Right', 'Right', 'Left'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'FLAM-40 Flamethrower',
    sequence: ['Down', 'Left', 'Right', 'Right', 'Left'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'AC-8 Autocannon',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Up', 'Right'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'RS-422 Railgun',
    sequence: ['Down', 'Right', 'Down', 'Up', 'Left', 'Right'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'FAF-14 SPEAR Launcher',
    sequence: ['Down', 'Down', 'Up', 'Down', 'Down'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'GL-21 Grenade Launcher',
    sequence: ['Down', 'Left', 'Up', 'Left', 'Down'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'LAS-98 Laser Cannon',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Left'],
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'ARC-3 Arc Thrower',
    sequence: ['Down', 'Right', 'Down', 'Up', 'Left', 'Left'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Reinforce',
    sequence: ['Up', 'Down', 'Right', 'Left', 'Up'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'SOS Beacon',
    sequence: ['Up', 'Down', 'Left', 'Up'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Resupply',
    sequence: ['Down', 'Down', 'Up', 'Right'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'NUX-223 Hellbomb',
    sequence: ['Down', 'Up', 'Left', 'Down', 'Up', 'Right', 'Down', 'Up'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'SSSD Delivery',
    sequence: ['Down', 'Down', 'Down', 'Up', 'Up'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Seismic Probe',
    sequence: ['Up', 'Up', 'Left', 'Right', 'Down', 'Down'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Upload Data',
    sequence: ['Down', 'Down', 'Up', 'Up', 'Up'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Eagle Rearm',
    sequence: ['Up', 'Up', 'Left', 'Up', 'Right'],
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Illumination Flare',
    sequence: ['Left', 'Left', 'Right', 'Right'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'E/MG-101 HMG Emplacement',
    sequence: ['Down', 'Up', 'Left', 'Right', 'Right', 'Left'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'FX-12 Shield Generator Relay',
    sequence: ['Down', 'Down', 'Left', 'Right', 'Left', 'Right'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/ARC-3 Tesla Tower',
    sequence: ['Down', 'Up', 'Right', 'Up', 'Left', 'Right'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'MD-6 Anti-Personnel Minefield',
    sequence: ['Down', 'Left', 'Up', 'Right'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'MD-I4 Incendiary Mines',
    sequence: ['Down', 'Left', 'Left', 'Down'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/MG-43 Machine Gun Sentry',
    sequence: ['Down', 'Up', 'Right', 'Right', 'Up'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/G-16 Gatling Sentry',
    sequence: ['Down', 'Up', 'Right', 'Left'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/M-12 Mortar Sentry',
    sequence: ['Down', 'Up', 'Right', 'Right', 'Down'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/AC-8 Autocannon Sentry',
    sequence: ['Down', 'Up', 'Right', 'Up', 'Left', 'Up'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/MLS-4X Rocket Sentry',
    sequence: ['Down', 'Up', 'Right', 'Right', 'Left'],
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/M-23 EMS Mortar Sentry	',
    sequence: ['Down', 'Up', 'Right', 'Down', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Gatling Barrage	',
    sequence: ['Right', 'Down', 'Left', 'Up', 'Up'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Airburst Strike',
    sequence: ['Right', 'Right', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital 120MM HE Barrage',
    sequence: ['Right', 'Right', 'Down', 'Left', 'Right', 'Down'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital 380MM HE Barrage',
    sequence: ['Right', 'Down', 'Up', 'Up', 'Left', 'Down', 'Down'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Walking Barrage',
    sequence: ['Right', 'Down', 'Right', 'Down', 'Right', 'Down'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Laser',
    sequence: ['Right', 'Down', 'Up', 'Right', 'Down'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Railcannon Strike',
    sequence: ['Right', 'Up', 'Down', 'Down', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Precision Strike',
    sequence: ['Right', 'Right', 'Up'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Gas Strike',
    sequence: ['Right', 'Right', 'Down', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital EMS Strike',
    sequence: ['Right', 'Right', 'Left', 'Down'],
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Smoke Strike',
    sequence: ['Right', 'Right', 'Down', 'Up'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Strafing Run',
    sequence: ['Up', 'Right', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Airstrike',
    sequence: ['Up', 'Right', 'Down', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Cluster Bomb',
    sequence: ['Up', 'Right', 'Down', 'Down', 'Right'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Napalm Airstrike',
    sequence: ['Up', 'Right', 'Down', 'Up'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Smoke Strike',
    sequence: ['Up', 'Right', 'Up', 'Down'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle 110MM Rocket Pods',
    sequence: ['Up', 'Right', 'Up', 'Left'],
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle 500kg Bomb',
    sequence: ['Up', 'Right', 'Down', 'Down', 'Down'],
  },
  // {
  //   type: '',
  //   subtype: '',
  //   name: '',
  //   sequence: ['', '', '', '', '', '', '', '', '', ''],
  // },
  // {
  //   type: '',
  //   subtype: '',
  //   name: '',
  //   sequence: ['', '', '', '', '', '', '', '', '', ''],
  // },
];

export default stratagems;