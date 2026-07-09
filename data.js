const GODS = [
{
    id: "chaos",
    name: "Chaos",
    title: "Oergod",
    domain: "Oorsprong van alles",
    description: "De leegte waaruit de wereld ontstond.",
    parents: [],
    level: 0,
    order: 1
},

{
    id: "tartarus",
    name: "Tartaros",
    title: "Oergod",
    domain: "Diepste onderwereld",
    description: "Oergod en personificatie van de diepste afgrond van de onderwereld, waar de Titanen werden opgesloten na hun nederlaag.",
    parents: ["chaos"],
    level: 1,
    order: -1
},

{
    id: "gaia",
    name: "Gaia",
    title: "Oergodin",
    domain: "Aarde",
    description: "De personificatie van de aarde.",
    parents: ["chaos"],
    level: 1,
    order: 1
},

{
    id: "uranus",
    name: "Uranus",
    title: "Oergod",
    domain: "Hemel",
    description: "De hemelgod en partner van Gaia.",
    parents: ["gaia"],
    level: 1,
    order: 2
},

{
    id: "pontus",
    name: "Pontus",
    title: "Oergod",
    domain: "Zee",
    description: "De oergod van de zee, geboren uit Gaia zonder vader.",
    parents: ["gaia"],
    level: 1,
    order: 3
},

{
    id: "nyx",
    name: "Nyx",
    title: "Oergodin",
    domain: "Nacht",
    description: "De oergodin van de nacht. Zelfs Zeus had ontzag voor haar.",
    parents: ["chaos"],
    level: 1,
    order: 4
},

{
    id: "erebus",
    name: "Erebus",
    title: "Oergod",
    domain: "Duisternis",
    description: "De personificatie van de diepe duisternis.",
    parents: ["chaos"],
    level: 1,
    order: 5
},

{
<<<<<<< HEAD
    id: "aether",
    name: "Aether",
    title: "Oergod",
    domain: "Bovenlucht en licht",
    description: "De personificatie van de heldere bovenlucht die de goden inademden, in tegenstelling tot de gewone lucht van de stervelingen.",
    parents: ["nyx", "erebus"],
    level: 1,
    order: 6
},

{
    id: "hemera",
    name: "Hemera",
    title: "Oergodin",
    domain: "Daglicht",
    description: "Godin en personificatie van de dag. Elke ochtend verliet zij de onderwereld terwijl haar moeder Nyx terugkeerde.",
    parents: ["nyx", "erebus"],
    level: 1,
    order: 7
},

{
=======
>>>>>>> branch 'main' of https://github.com/polewolf/TOP.git
    id: "nemesis",
    name: "Nemesis",
    title: "Godin",
    domain: "Wraak en gerechtigheid",
    description: "Godin die hoogmoed en overmoed bestrafte.",
    parents: ["nyx"],
    level: 2,
    order: 7
},

{
    id: "hypnos",
    name: "Hypnos",
    title: "God",
    domain: "Slaap",
    description: "God van de slaap. Hij kon zowel mensen als goden in slaap brengen.",
    parents: ["nyx","erebus"],
    level: 2,
    order: 8
},

{
    id: "thanatos",
    name: "Thanatos",
    title: "God",
    domain: "Vreedzame dood",
    description: "De personificatie van de vreedzame dood en tweelingbroer van Hypnos.",
    parents: ["nyx","erebus"],
    level: 2,
    order: 9
},

{
    id: "cronus",
    name: "Cronus",
    title: "Titaan",
    domain: "Tijd",
    description: "Leider van de Titanen.",
    parents: ["gaia","uranus"],
    level: 2,
    order: 1
},

{
    id: "rhea",
    name: "Rhea",
    title: "Titaan (vrouwelijk)",
    domain: "Moederschap",
    description: "Moeder van de Olympische goden.",
    parents: ["gaia","uranus"],
    level: 2,
    order: 2
},
{
    id: "crius",
    name: "Crius",
    title: "Titaan",
    domain: "Hemelse constellaties",
    description: "Een van de twaalf oorspronkelijke Titanen. Vader van Perses, Pallas en Astraeus.",
    parents: ["gaia", "uranus"],
    level: 2,
    order: 3
},

{
    id: "eurybia",
    name: "Eurybia",
    title: "Godin",
    domain: "Zee",
    description: "Dochter van Gaia en Pontus. Godin van de kracht van de zee.",
    parents: ["gaia", "pontus"],
    level: 2,
    order: 4
},

{
    id: "coeus",
    name: "Coeus",
    title: "Titaan",
    domain: "Intelligentie en de hemel",
    description: "Een van de oorspronkelijke Titanen en vader van Asteria en Leto.",
    parents: ["gaia", "uranus"],
    level: 2,
    order: 6
},

{
    id: "phoebe",
    name: "Phoebe",
    title: "Titaan (vrouwelijk)",
    domain: "Profetie",
    description: "Titaan van het intellect en de profetie. Grootmoeder van Apollo en Artemis.",
    parents: ["gaia", "uranus"],
    level: 2,
    order: 5
},

{
    id: "perses",
    name: "Perses",
    title: "Titaan",
    domain: "Vernietiging",
    description: "Een Titaan die vooral bekendstaat als de vader van Hecate.",
    parents: ["crius","eurybia"],
    //parents: [],
    level: 3,
    order: 1
},

{
    id: "asteria",
    name: "Asteria",
    title: "Titaan (vrouwelijk)",
    domain: "Sterren en nachtelijke voorspellingen",
    description: "Godin van de sterrenhemel en nachtelijke orakels.",
    parents: ["coeus","phoebe"],
    //parents: [],
    level: 3,
    order: 2
},

{
    id: "zeus",
    name: "Zeus",
    title: "Olympische god",
    domain: "Lucht en bliksem",
    description: "Koning van de goden.",
    parents: ["cronus","rhea"],
    level: 4,
    order: 1
},

{
    id: "poseidon",
    name: "Poseidon",
    title: "Olympische god",
    domain: "Zee",
    description: "Heerser van de zeeën.",
    parents: ["cronus","rhea"],
    level: 4,
    order: 2
},

{
    id: "hades",
    name: "Hades",
    title: "Olympische god",
    domain: "Onderwereld",
    description: "Heerser van de onderwereld.",
    parents: ["cronus","rhea"],
    level: 4,
    order: 3
},

{
    id: "hera",
    name: "Hera",
    title: "Olympische godin",
    domain: "Huwelijk",
    description: "Koningin van de goden.",
    parents: ["cronus","rhea"],
    level: 4,
    order: 5
},

{
    id: "demeter",
    name: "Demeter",
    title: "Olympische godin",
    domain: "Landbouw",
    description: "Godin van de oogst.",
    parents: ["cronus","rhea"],
    level: 4,
    order: 4
},

{
    id: "hestia",
    name: "Hestia",
    title: "Olympische godin",
    domain: "Haard",
    description: "Godin van huis en haard.",
    parents: ["cronus","rhea"],
    level: 4,
    order: 6
},

{
    id: "hecate",
    name: "Hecate",
    title: "Titanide",
    domain: "Magie, hekserij, kruispunten",
    description: "Godin van magie, de nacht, geesten en kruispunten. Ze hielp Demeter bij de zoektocht naar Persephone en bleef ook na de Titanenoorlog een gerespecteerde godin.",
    parents: ["perses","asteria"],
    level: 4,
    order: 8
},

{
    id: "leto",
    name: "Leto",
    title: "Godin",
    domain: "Moederschap, bescherer van jonge kinderen",
    description: "Godin van het moederschap en de beschermer van jonge kinderen. Ze kreeg met Zeus de tweeling Apollo en Artemis. Volgens de mythe werd ze door Hera achtervolgd tijdens haar zwangerschap, totdat ze op het eiland Delos haar kinderen kon baren.",
    parents: ["coeus", "phoebe"],
    level: 4,
    order: 9
},

{
    id: "athena",
    name: "Athena",
    title: "Olympische godin",
    domain: "Wijsheid",
    description: "Geboren uit het hoofd van Zeus.",
    parents: ["zeus"],
    level: 5,
    order: 1
},

{
    id: "aphrodite",
    name: "Aphrodite",
    title: "Olympische godin",
    domain: "Liefde, schoonheid en begeerte",
    description: "Godin van de liefde, schoonheid en begeerte. Volgens Hesiodus ontstond ze uit het zeeschuim nadat de geslachtsdelen van Uranus in zee waren geworpen. Ze is de echtgenote van Hephaestus en de moeder van onder andere Eros.",
    parents: ["uranus"],
    level: 4,
    order: 10
},

{
    id: "apollo",
    name: "Apollo",
    title: "Olympische god",
    domain: "Zon, muziek",
    description: "Tweelingbroer van Artemis.",
    parents: ["zeus", "leto"],
    level: 5,
    order: 2
},

{
    id: "artemis",
    name: "Artemis",
    title: "Olympische godin",
    domain: "Jacht",
    description: "Godin van de jacht.",
    parents: ["zeus", "leto"],
    level: 5,
    order: 3
},

{
    id: "ares",
    name: "Ares",
    title: "Olympische god",
    domain: "Oorlog",
    description: "God van oorlog.",
    parents: ["zeus","hera"],
    level: 5,
    order: 7
},

{
    id: "hephaestus",
    name: "Hephaestus",
    title: "Olympische god",
    domain: "Smeden",
    description: "God van vuur en smeden.",
    parents: ["hera"],
    level: 5,
    order: 8
},

{
    id: "hermes",
    name: "Hermes",
    title: "Olympische god",
    domain: "Boodschapper",
    description: "Boodschapper van de goden.",
    parents: ["zeus"],
    level: 5,
    order: 5
},

{
    id: "dionysus",
    name: "Dionysus",
    title: "Olympische god",
    domain: "Wijn",
    description: "God van wijn en feesten.",
    parents: ["zeus"],
    level: 5,
    order: 4
},

{
    id: "persephone",
    name: "Persephone",
    title: "Godin",
    domain: "Lente en onderwereld",
    description: "Dochter van Demeter.",
    parents: ["zeus","demeter"],
    level: 5,
    order: 6
},

{
    id: "pan",
    name: "Pan",
    title: "God",
    domain: "Natuur, herders en bossen",
    description: "God van de natuur, herders, bossen en wilde dieren. Hij wordt afgebeeld met de poten en horens van een geit en staat bekend om zijn panfluit.",
    parents: ["hermes"],
    level: 6,
    order: 2
},

{
    id: "hebe",
    name: "Hebe",
    title: "Godin",
    domain: "Jeugd",
    description: "Godin van de jeugd. Ze schonk de nectar en ambrozijn aan de Olympische goden en trouwde later met Herakles nadat hij een god was geworden.",
    parents: ["zeus", "hera"],
    level: 5,
    order: 7
},

{
    id: "eros",
    name: "Eros",
    title: "God",
    domain: "Liefde en verlangen",
    description: "God van de liefde, hartstocht en verlangen. Hij schiet met zijn magische pijlen zodat goden en mensen verliefd worden.",
    parents: ["aphrodite", "ares"],
    level: 6,
    order: 10
},

{
    id: "asclepius",
    name: "Asclepius",
    title: "God",
    domain: "Geneeskunde",
    description: "God van de geneeskunde en genezing. Hij was de zoon van Apollo en de sterfelijke Coronis.",
    parents: ["apollo"],
    level: 6,
    order: 1
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
