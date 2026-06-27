const GODS = [
{
    id: "chaos",
    name: "Chaos",
    title: "Oergod",
    domain: "Oorsprong van alles",
    description: "De leegte waaruit de wereld ontstond.",
    parents: []
},

{
    id: "nyx",
    name: "Nyx",
    title: "Oergodin",
    domain: "Nacht",
    description: "De personificatie van de nacht.",
    parents: ["chaos"]
},

{
    id: "gaia",
    name: "Gaia",
    title: "Oergodin",
    domain: "Aarde",
    description: "De personificatie van de aarde.",
    parents: ["chaos"]
},

{
    id: "uranus",
    name: "Uranus",
    title: "Oergod",
    domain: "Hemel",
    description: "De hemelgod en partner van Gaia.",
    parents: ["gaia"]
},

{
    id: "cronus",
    name: "Cronus",
    title: "Titaan",
    domain: "Tijd",
    description: "Leider van de Titanen.",
    parents: ["gaia","uranus"]
},

{
    id: "rhea",
    name: "Rhea",
    title: "Titanide",
    domain: "Moederschap",
    description: "Moeder van de Olympische goden.",
    parents: ["gaia","uranus"]
},

{
    id: "perses",
    name: "Perses",
    title: "Titaan",
    domain: "Vernietiging",
    description: "Een Titaan die vooral bekendstaat als de vader van Hecate.",
    parents: ["crius","eurybia"]
},

{
    id: "asteria",
    name: "Asteria",
    title: "Titaan(Vrouwelijk)",
    domain: "Sterren en nachtelijke voorspellingen",
    description: "Godin van de sterrenhemel en nachtelijke orakels.",
    parents: ["coeus","phoebe"]
},

{
    id: "zeus",
    name: "Zeus",
    title: "Olympische god",
    domain: "Lucht en bliksem",
    description: "Koning van de goden.",
    parents: ["cronus","rhea"]
},

{
    id: "poseidon",
    name: "Poseidon",
    title: "Olympische god",
    domain: "Zee",
    description: "Heerser van de zeeën.",
    parents: ["cronus","rhea"]
},

{
    id: "hades",
    name: "Hades",
    title: "Olympische god",
    domain: "Onderwereld",
    description: "Heerser van de onderwereld.",
    parents: ["cronus","rhea"]
},

{
    id: "hera",
    name: "Hera",
    title: "Olympische godin",
    domain: "Huwelijk",
    description: "Koningin van de goden.",
    parents: ["cronus","rhea"]
},

{
    id: "demeter",
    name: "Demeter",
    title: "Olympische godin",
    domain: "Landbouw",
    description: "Godin van de oogst.",
    parents: ["cronus","rhea"]
},

{
    id: "hestia",
    name: "Hestia",
    title: "Olympische godin",
    domain: "Haard",
    description: "Godin van huis en haard.",
    parents: ["cronus","rhea"]
},

{
    id: "athena",
    name: "Athena",
    title: "Olympische godin",
    domain: "Wijsheid",
    description: "Geboren uit het hoofd van Zeus.",
    parents: ["zeus"]
},

{
    id: "apollo",
    name: "Apollo",
    title: "Olympische god",
    domain: "Zon, muziek",
    description: "Tweelingbroer van Artemis.",
    parents: ["zeus"]
},

{
    id: "artemis",
    name: "Artemis",
    title: "Olympische godin",
    domain: "Jacht",
    description: "Godin van de jacht.",
    parents: ["zeus"]
},

{
    id: "ares",
    name: "Ares",
    title: "Olympische god",
    domain: "Oorlog",
    description: "God van oorlog.",
    parents: ["zeus","hera"]
},

{
    id: "hephaestus",
    name: "Hephaestus",
    title: "Olympische god",
    domain: "Smeden",
    description: "God van vuur en smeden.",
    parents: ["hera"]
},

{
    id: "hermes",
    name: "Hermes",
    title: "Olympische god",
    domain: "Boodschapper",
    description: "Boodschapper van de goden.",
    parents: ["zeus"]
},

{
    id: "dionysus",
    name: "Dionysus",
    title: "Olympische god",
    domain: "Wijn",
    description: "God van wijn en feesten.",
    parents: ["zeus"]
},

{
    id: "persephone",
    name: "Persephone",
    title: "Godin",
    domain: "Lente en onderwereld",
    description: "Dochter van Demeter. Gestolen door Hades.",
    parents: ["zeus","demeter"]
}
];


const godsById = {};
const childrenMap = {};

for (const god of GODS) {

    godsById[god.id] = god;
    childrenMap[god.id] = [];

}

for (const god of GODS) {

    for (const parent of god.parents) {

        if (childrenMap[parent]) {
            childrenMap[parent].push(god.id);
        }

    }

}

function getGod(id) {
    return godsById[id];
}

function getChildren(id) {
    return childrenMap[id] || [];
}

function getParents(id) {
    return godsById[id].parents;
}
