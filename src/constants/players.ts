import { IPlayersImages, IPlayersState } from "utils/types/players";

import { DEFAULT_RESET_SECTION } from "./sections";

export const DEFAULT_PLAYERS_STATE: IPlayersState = {
  banana: {
    name: "Noah Anderson",
    color: "banana",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  black: {
    name: "Ahaan Bahl",
    color: "black",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  blue: {
    name: "Lucas Bell",
    color: "blue",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  brown: {
    name: "Kayleb Dharssi",
    color: "brown",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  coral: {
    name: "Toby Eng",
    color: "coral",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  cyan: {
    name: "Hadyn Eng",
    color: "cyan",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  gray: {
    name: "Aryan Hajee",
    color: "gray",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  green: {
    name: "Matthew Komor",
    color: "green",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  lime: {
    name: "Enzo Lau",
    color: "lime",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  maroon: {
    name: "Alex Li",
    color: "maroon",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  orange: {
    name: "Ryo Mastrofini",
    color: "orange",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  pink: {
    name: "Felipe Ramirez",
    color: "pink",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  purple: {
    name: "Noah Rana",
    color: "purple",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  red: {
    name: "Isaac Tan",
    color: "red",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  rose: {
    name: "Anand Thambinayagam",
    color: "rose",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  tan: {
    name: "Amay Vij",
    color: "tan",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  white: {
    name: "Jayden Vijitharan",
    color: "white",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
  yellow: {
    name: "Parco Wong",
    color: "yellow",
    section: DEFAULT_RESET_SECTION,
    usedEmergencyButton: false,
  },
};

export const PLAYER_IMAGE: IPlayersImages = {
  black: {
    alive: {
      x: 0,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 0,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  blue: {
    alive: {
      x: 148,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 124,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  brown: {
    alive: {
      x: 296,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 248,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  cyan: {
    alive: {
      x: 444,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 372,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  green: {
    alive: {
      x: 592,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 496,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  lime: {
    alive: {
      x: 740,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 620,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  orange: {
    alive: {
      x: 888,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 744,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  pink: {
    alive: {
      x: 1036,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 868,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  purple: {
    alive: {
      x: 1184,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 992,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  red: {
    alive: {
      x: 1332,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1116,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  white: {
    alive: {
      x: 1480,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1240,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  yellow: {
    alive: {
      x: 1628,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1364,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  banana: {
    alive: {
      x: 1776,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1488,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  coral: {
    alive: {
      x: 1924,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1612,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  gray: {
    alive: {
      x: 2072,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1736,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  maroon: {
    alive: {
      x: 2220,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1860,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  rose: {
    alive: {
      x: 2368,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 1984,
      y: 198,
      w: 124,
      h: 117,
    },
  },
  tan: {
    alive: {
      x: 2516,
      y: 0,
      w: 148,
      h: 198,
    },
    dead: {
      x: 2108,
      y: 198,
      w: 124,
      h: 117,
    },
  },
};
