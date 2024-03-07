// Importing images
import lift850Icon from './stratagem-images/supply-backpacks/LIFT-850icon.webp';
import b1Icon from './stratagem-images/supply-backpacks/B-1icon.webp';
import axLas5Icon from './stratagem-images/supply-backpacks/AX-LAS-5icon.webp';
import sh20Icon from './stratagem-images/supply-backpacks/SH-20icon.webp';
import sh32Icon from './stratagem-images/supply-backpacks/SH-32icon.webp';
import axAr23Icon from './stratagem-images/supply-backpacks/AX-AR-23icon.webp';
import mg43Icon from './stratagem-images/supply-secondary/MG-43icon.webp';
import apw1Icon from './stratagem-images/supply-secondary/APW-1icon.webp';
import m105Icon from './stratagem-images/supply-secondary/M-105icon.webp';
import eat17Icon from './stratagem-images/supply-secondary/EAT-17icon.webp';
import gr8Icon from './stratagem-images/supply-secondary/GR-8icon.webp';
import flam40Icon from './stratagem-images/supply-secondary/FLAM-40icon.webp';
import ac8Icon from './stratagem-images/supply-secondary/AC-8icon.webp';
import rs422Icon from './stratagem-images/supply-secondary/RS-422icon.webp';
import faf14Icon from './stratagem-images/supply-secondary/FAF-14icon.webp';
import gl21Icon from './stratagem-images/supply-secondary/GL-21icon.webp';
import las98Icon from './stratagem-images/supply-secondary/LAS-98icon.webp';
import arc3Icon from './stratagem-images/supply-secondary/ARC-3icon.webp';
import reinforceIcon from './stratagem-images/mission/Reinforceicon.webp';
import sosIcon from './stratagem-images/mission/SOSicon.webp';
import resupplyIcon from './stratagem-images/mission/ResupplyIcon.webp';
import nux223Icon from './stratagem-images/mission/Strat_NUX-223_Hellbomb_mk1.webp';
import sssdDeliveryIcon from './stratagem-images/mission/DeliverSSSDicon.webp';
import seismicProbeIcon from './stratagem-images/mission/Seismic_probe_icon.webp';
import uploadDataIcon from './stratagem-images/mission/DeliverSSSDicon.webp'; // Duplicate?
import eagleRearmIcon from './stratagem-images/mission/HD2_Eagle_Rearm_Icon.webp';
import hmgTurretIcon from './stratagem-images/defensive/HMGTurreticon.webp';
import shieldGeneratorRelayIcon from './stratagem-images/defensive/Shieldrelayicon.webp';
import teslaTowerIcon from './stratagem-images/defensive/Teslaicon.webp';
import antiPersonnelMinefieldIcon from './stratagem-images/defensive/Minefieldicon.webp';
import incendiaryMinesIcon from './stratagem-images/defensive/Fireminefieldicon.webp';
import machineGunSentryIcon from './stratagem-images/defensive/MGsentryicon.webp';
import gatlingSentryIcon from './stratagem-images/defensive/Gatlingsentryicon.webp';
import mortarSentryIcon from './stratagem-images/defensive/Mortarsentryicon.webp';
import autocannonSentryIcon from './stratagem-images/defensive/Autocannoasentryicon.webp';
import rocketSentryIcon from './stratagem-images/defensive/Missilesentryicon.webp';
import emsMortarSentryIcon from './stratagem-images/defensive/EMSmortaricon.webp';
import orbitalGatlingBarrageIcon from './stratagem-images/oribtal-offensive/OrbitalGatlingicon.webp';
import orbitalAirburstStrikeIcon from './stratagem-images/oribtal-offensive/OrbitalAirbursticon.webp';
import orbital120MMHEBarrageIcon from './stratagem-images/oribtal-offensive/Orbital120icon.webp';
import orbital380MMHEBarrageIcon from './stratagem-images/oribtal-offensive/Orbital380icon.webp';
import orbitalWalkingBarrageIcon from './stratagem-images/oribtal-offensive/OrbitalWalkingicon.webp';
import orbitalLaserIcon from './stratagem-images/oribtal-offensive/OrbitalLasericon.webp';
import orbitalRailcannonStrikeIcon from './stratagem-images/oribtal-offensive/OrbitalRailcannonicon.webp';
import orbitalPrecisionStrikeIcon from './stratagem-images/oribtal-offensive/OrbitalPrecisionicon.webp';
import orbitalGasStrikeIcon from './stratagem-images/oribtal-offensive/OrbitalGasicon.webp';
import orbitalEMSStrikeIcon from './stratagem-images/oribtal-offensive/OrbitalEMSicon.webp';
import orbitalSmokeStrikeIcon from './stratagem-images/oribtal-offensive/OrbitalSmokeicon.webp';
import eagleStrafingRunIcon from './stratagem-images/offensive-eagle/EagleStrafingicon.webp';
import eagleAirstrikeIcon from './stratagem-images/offensive-eagle/EagleAirstrikeicon.webp';
import eagleClusterBombIcon from './stratagem-images/offensive-eagle/EagleClusterbombicon.webp';
import eagleNapalmAirstrikeIcon from './stratagem-images/offensive-eagle/EagleNapalmicon.webp';
import eagleSmokeStrikeIcon from './stratagem-images/offensive-eagle/EagleSmokeicon.webp';
import eagle110MMRocketPodsIcon from './stratagem-images/offensive-eagle/EagleRocketpodicon.webp';
import eagle500kgBombIcon from './stratagem-images/offensive-eagle/Eagle500icon.webp';

const stratagems = [
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'LIFT-850 Jump Pack',
    sequence: ['Down', 'Up', 'Up', 'Down', 'Up'],
    image: lift850Icon,
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'B-1 Supply Pack',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Up', 'Down'],
    image: b1Icon,
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'AX/LAS-5 "Guard Dog" Rover',
    sequence: ['Down', 'Up', 'Left', 'Up', 'Right', 'Right'],
    image: axLas5Icon,
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'SH-20 Ballistic Shield Backpack',
    sequence: ['Down', 'Left', 'Down', 'Down', 'Up', 'Left'],
    image: sh20Icon,
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'SH-32 Shield Generator Pack',
    sequence: ['Down', 'Up', 'Left', 'Right', 'Left', 'Right'],
    image: sh32Icon,
  },
  {
    type: 'Supply',
    subtype: 'Backpacks',
    name: 'AX/AR-23 "Guard Dog"',
    sequence: ['Down', 'Up', 'Left', 'Up', 'Right', 'Down'],
    image: axAr23Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'MG-43 Machine Gun',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Right'],
    image: mg43Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'APW-1 Anti-Materiel Rifle',
    sequence: ['Down', 'Left', 'Right', 'Up', 'Down'],
    image: apw1Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'M-105 Stalwart',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Up', 'Left'],
    image: m105Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'EAT-17 Expendable Anti-tank',
    sequence: ['Down', 'Down', 'Left', 'Up', 'Right'],
    image: eat17Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'GR-8 Recoilless Rifle',
    sequence: ['Down', 'Left', 'Right', 'Right', 'Left'],
    image: gr8Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'FLAM-40 Flamethrower',
    sequence: ['Down', 'Left', 'Right', 'Right', 'Left'],
    image: flam40Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'AC-8 Autocannon',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Up', 'Right'],
    image: ac8Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'RS-422 Railgun',
    sequence: ['Down', 'Right', 'Down', 'Up', 'Left', 'Right'],
    image: rs422Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'FAF-14 SPEAR Launcher',
    sequence: ['Down', 'Down', 'Up', 'Down', 'Down'],
    image: faf14Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'GL-21 Grenade Launcher',
    sequence: ['Down', 'Left', 'Up', 'Left', 'Down'],
    image: gl21Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'LAS-98 Laser Cannon',
    sequence: ['Down', 'Left', 'Down', 'Up', 'Left'],
    image: las98Icon,
  },
  {
    type: 'Supply',
    subtype: 'Secondary Weapons',
    name: 'ARC-3 Arc Thrower',
    sequence: ['Down', 'Right', 'Down', 'Up', 'Left', 'Left'],
    image: arc3Icon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Reinforce',
    sequence: ['Up', 'Down', 'Right', 'Left', 'Up'],
    image: reinforceIcon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'SOS Beacon',
    sequence: ['Up', 'Down', 'Left', 'Up'],
    image: sosIcon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Resupply',
    sequence: ['Down', 'Down', 'Up', 'Right'],
    image: resupplyIcon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'NUX-223 Hellbomb',
    sequence: ['Down', 'Up', 'Left', 'Down', 'Up', 'Right', 'Down', 'Up'],
    image: nux223Icon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'SSSD Delivery',
    sequence: ['Down', 'Down', 'Down', 'Up', 'Up'],
    image: sssdDeliveryIcon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Seismic Probe',
    sequence: ['Up', 'Up', 'Left', 'Right', 'Down', 'Down'],
    image: seismicProbeIcon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Upload Data',
    sequence: ['Down', 'Down', 'Up', 'Up', 'Up'],
    image: uploadDataIcon,
  },
  {
    type: 'Mission',
    subtype: '',
    name: 'Eagle Rearm',
    sequence: ['Up', 'Up', 'Left', 'Up', 'Right'],
    image: eagleRearmIcon,
  },
  // {
  //   type: 'Mission',
  //   subtype: '',
  //   name: 'Illumination Flare',
  //   sequence: ['Left', 'Left', 'Right', 'Right'],
  //   image: '',
  // },
  {
    type: 'Defensive',
    subtype: '',
    name: 'E/MG-101 HMG Emplacement',
    sequence: ['Down', 'Up', 'Left', 'Right', 'Right', 'Left'],
    image: hmgTurretIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'FX-12 Shield Generator Relay',
    sequence: ['Down', 'Down', 'Left', 'Right', 'Left', 'Right'],
    image: shieldGeneratorRelayIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/ARC-3 Tesla Tower',
    sequence: ['Down', 'Up', 'Right', 'Up', 'Left', 'Right'],
    image: teslaTowerIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'MD-6 Anti-Personnel Minefield',
    sequence: ['Down', 'Left', 'Up', 'Right'],
    image: antiPersonnelMinefieldIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'MD-I4 Incendiary Mines',
    sequence: ['Down', 'Left', 'Left', 'Down'],
    image: incendiaryMinesIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/MG-43 Machine Gun Sentry',
    sequence: ['Down', 'Up', 'Right', 'Right', 'Up'],
    image: machineGunSentryIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/G-16 Gatling Sentry',
    sequence: ['Down', 'Up', 'Right', 'Left'],
    image: gatlingSentryIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/M-12 Mortar Sentry',
    sequence: ['Down', 'Up', 'Right', 'Right', 'Down'],
    image: mortarSentryIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/AC-8 Autocannon Sentry',
    sequence: ['Down', 'Up', 'Right', 'Up', 'Left', 'Up'],
    image: autocannonSentryIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/MLS-4X Rocket Sentry',
    sequence: ['Down', 'Up', 'Right', 'Right', 'Left'],
    image: rocketSentryIcon,
  },
  {
    type: 'Defensive',
    subtype: '',
    name: 'A/M-23 EMS Mortar Sentry	',
    sequence: ['Down', 'Up', 'Right', 'Down', 'Right'],
    image: emsMortarSentryIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Gatling Barrage	',
    sequence: ['Right', 'Down', 'Left', 'Up', 'Up'],
    image: orbitalGatlingBarrageIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Airburst Strike',
    sequence: ['Right', 'Right', 'Right'],
    image: orbitalAirburstStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital 120MM HE Barrage',
    sequence: ['Right', 'Right', 'Down', 'Left', 'Right', 'Down'],
    image: orbital120MMHEBarrageIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital 380MM HE Barrage',
    sequence: ['Right', 'Down', 'Up', 'Up', 'Left', 'Down', 'Down'],
    image: orbital380MMHEBarrageIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Walking Barrage',
    sequence: ['Right', 'Down', 'Right', 'Down', 'Right', 'Down'],
    image: orbitalWalkingBarrageIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Laser',
    sequence: ['Right', 'Down', 'Up', 'Right', 'Down'],
    image: orbitalLaserIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Railcannon Strike',
    sequence: ['Right', 'Up', 'Down', 'Down', 'Right'],
    image: orbitalRailcannonStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Precision Strike',
    sequence: ['Right', 'Right', 'Up'],
    image: orbitalPrecisionStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Gas Strike',
    sequence: ['Right', 'Right', 'Down', 'Right'],
    image: orbitalGasStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital EMS Strike',
    sequence: ['Right', 'Right', 'Left', 'Down'],
    image: orbitalEMSStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Orbital',
    name: 'Orbital Smoke Strike',
    sequence: ['Right', 'Right', 'Down', 'Up'],
    image: orbitalSmokeStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Strafing Run',
    sequence: ['Up', 'Right', 'Right'],
    image: eagleStrafingRunIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Airstrike',
    sequence: ['Up', 'Right', 'Down', 'Right'],
    image: eagleAirstrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Cluster Bomb',
    sequence: ['Up', 'Right', 'Down', 'Down', 'Right'],
    image: eagleClusterBombIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Napalm Airstrike',
    sequence: ['Up', 'Right', 'Down', 'Up'],
    image: eagleNapalmAirstrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle Smoke Strike',
    sequence: ['Up', 'Right', 'Up', 'Down'],
    image: eagleSmokeStrikeIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle 110MM Rocket Pods',
    sequence: ['Up', 'Right', 'Up', 'Left'],
    image: eagle110MMRocketPodsIcon,
  },
  {
    type: 'Offensive',
    subtype: 'Eagle',
    name: 'Eagle 500kg Bomb',
    sequence: ['Up', 'Right', 'Down', 'Down', 'Down'],
    image: eagle500kgBombIcon,
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
