const GODS = [
{
    id: "chaos",
    name: "Chaos",
    title: "Oergod",
    domain: "Oorsprong van alles",
    description: "De leegte waaruit de wereld ontstond.",
    parents: [],
    level: 0
},

{
    id: "gaia",
    name: "Gaia",
    title: "Oergodin",
    domain: "Aarde",
    description: "De personificatie van de aarde.",
    parents: ["chaos"],
    level: 1
},
{
    id: "uranus",
    name: "Uranus",
    title: "Oergod",
    domain: "Hemel",
    description: "De hemelgod en partner van Gaia.",
    parents: ["gaia"],
    level: 1
},

{
    id: "nyx",
    name: "Nyx",
    title: "Oergodin",
    domain: "Nacht",
    description: "De oergodin van de nacht. Zelfs Zeus had ontzag voor haar.",
    parents: ["chaos"],
    level: 1
},

{
    id: "erebus",
    name: "Erebus",
    title: "Oergod",
    domain: "Duisternis",
    description: "De personificatie van de diepe duisternis.",
    parents: ["chaos"],
    level: 1
},

{
    id: "hypnos",
    name: "Hypnos",
    title: "God",
    domain: "Slaap",
    description: "God van de slaap. Hij kon zowel mensen als goden in slaap brengen.",
    parents: ["nyx","erebus"],
    level: 2
},

{
    id: "thanatos",
    name: "Thanatos",
    title: "God",
    domain: "Vreedzame dood",
    description: "De personificatie van de vreedzame dood en tweelingbroer van Hypnos.",
    parents: ["nyx","erebus"],
    level: 2
},

{
    id: "cronus",
    name: "Cronus",
    title: "Titaan",
    domain: "Tijd",
    description: "Leider van de Titanen.",
    parents: ["gaia","uranus"],
    level: 2
},

{
    id: "rhea",
    name: "Rhea",
    title: "Titaan (vrouwelijk)",
    domain: "Moederschap",
    description: "Moeder van de Olympische goden.",
    parents: ["gaia","uranus"],
    level: 2
},

{
    id: "zeus",
    name: "Zeus",
    title: "Olympische god",
    domain: "Lucht en bliksem",
    description: "Koning van de goden.",
    parents: ["cronus","rhea"],
    level: 3
},

{
    id: "poseidon",
    name: "Poseidon",
    title: "Olympische god",
    domain: "Zee",
    description: "Heerser van de zeeën.",
    parents: ["cronus","rhea"],
    level: 3
},

{
    id: "hades",
    name: "Hades",
    title: "Olympische god",
    domain: "Onderwereld",
    description: "Heerser van de onderwereld.",
    parents: ["cronus","rhea"],
    level: 3
},

{
    id: "hera",
    name: "Hera",
    title: "Olympische godin",
    domain: "Huwelijk",
    description: "Koningin van de goden.",
    parents: ["cronus","rhea"],
    level: 3
},

{
    id: "demeter",
    name: "Olympische godin",
    title: "Olympische godin",
    domain: "Landbouw",
    description: "Godin van de oogst.",
    parents: ["cronus","rhea"],
    level: 3
},

{
    id: "hestia",
    name: "Hestia",
    title: "Olympische godin",
    domain: "Haard",
    description: "Godin van huis en haard.",
    parents: ["cronus","rhea"],
    level: 3
},

{
    id: "athena",
    name: "Athena",
    title: "Olympische godin",
    domain: "Wijsheid",
    description: "Geboren uit het hoofd van Zeus.",
    parents: ["zeus"],
    level: 4
},

{
    id: "apollo",
    name: "Apollo",
    title: "Olympische god",
    domain: "Zon, muziek",
    description: "Tweelingbroer van Artemis.",
    parents: ["zeus"],
    level: 4
},

{
    id: "artemis",
    name: "Artemis",
    title: "Olympische godin",
    domain: "Jacht",
    description: "Godin van de jacht.",
    parents: ["zeus"],
    level: 3
},

{
    id: "ares",
    name: "Ares",
    title: "Olympische god",
    domain: "Oorlog",
    description: "God van oorlog.",
    parents: ["zeus","hera"],
    level: 4
},

{
    id: "hephaestus",
    name: "Hephaestus",
    title: "Olympische god",
    domain: "Smeden",
    description: "God van vuur en smeden.",
    parents: ["hera"],
    level: 4
},

{
    id: "hermes",
    name: "Hermes",
    title: "Olympische god",
    domain: "Boodschapper",
    description: "Boodschapper van de goden.",
    parents: ["zeus"],
    level: 4
},

{
    id: "dionysus",
    name: "Dionysus",
    title: "Olympische god",
    domain: "Wijn",
    description: "God van wijn en feesten.",
    parents: ["zeus"],
    level: 4
},

{
    id: "persephone",
    name: "Persephone",
    title: "Godin",
    domain: "Lente en onderwereld",
    description: "Dochter van Demeter.",
    parents: ["zeus","demeter"],
    level: 4
},

];



/* -------------------------------------------------
 *  Indexen maken
 - *------------------------------------------------ */

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



/* -------------------------------------------------
 *  Hulpfuncties
 - *------------------------------------------------ */

function getGod(id) {
    return godsById[id];
}

function getChildren(id) {
    return childrenMap[id] || [];
}

function getParents(id) {
    return godsById[id].parents;
}
