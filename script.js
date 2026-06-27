// ======================================================
// script.js
// Deel 1 - Initialisatie en automatische layout
// ======================================================

const svg = document.getElementById("tree");
const nodesGroup = document.getElementById("nodes");
const connectionsGroup = document.getElementById("connections");

const info = {
    name: document.getElementById("info-name"),
    title: document.getElementById("info-title"),
    domain: document.getElementById("info-domain"),
    parents: document.getElementById("info-parents"),
    children: document.getElementById("info-children"),
    description: document.getElementById("info-description")
};

// Afmetingen van een vakje
const NODE_WIDTH = 170;
const NODE_HEIGHT = 60;

const HORIZONTAL_SPACING = 90;
const VERTICAL_SPACING = 150;

let scale = 1;
let offsetX = 500;
let offsetY = 250;

const positions = {};
const generationMap = {};


// ======================================================
// SVG groep voor pannen en zoomen
// ======================================================

const viewport = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
);

while (svg.firstChild)
    viewport.appendChild(svg.firstChild);

svg.appendChild(viewport);

const nodeLayer = viewport.querySelector("#nodes");
const lineLayer = viewport.querySelector("#connections");


// ======================================================
// Bereken generatie (laag)
// ======================================================

function generation(id)
{
    if(generationMap[id] !== undefined)
        return generationMap[id];

    const god = getGod(id);

    if(god.parents.length === 0)
    {
        generationMap[id] = 0;
        return 0;
    }

    let max = 0;

    for(const parent of god.parents)
    {
        max = Math.max(max, generation(parent)+1);
    }

    generationMap[id] = max;

    return max;
}

for(const god of GODS)
    generation(god.id);


// ======================================================
// Goden groeperen per generatie
// ======================================================

const levels = {};

for(const god of GODS)
{
    const g = generationMap[god.id];

    if(!levels[g])
        levels[g] = [];

    levels[g].push(god.id);
}


// Sorteer alfabetisch
for(const level in levels)
{
    levels[level].sort((a,b)=>
    getGod(a).name.localeCompare(getGod(b).name)
    );
}


// ======================================================
// Posities berekenen
// ======================================================

function computePositions()
{
    for(const level in levels)
    {
        const gods = levels[level];

        const totalWidth =
        gods.length * NODE_WIDTH +
        (gods.length-1) * HORIZONTAL_SPACING;

        let x = -totalWidth/2;

        const y =
        level *
        (NODE_HEIGHT + VERTICAL_SPACING);

        for(const id of gods)
        {
            positions[id] = {

                x,
                y

            };

            x += NODE_WIDTH + HORIZONTAL_SPACING;
        }
    }
}

computePositions();


// ======================================================
// Helpers
// ======================================================

function svgElement(name)
{
    return document.createElementNS(
        "http://www.w3.org/2000/svg",
        name
    );
}

function applyTransform()
{
    viewport.setAttribute(
        "transform",
        `translate(${offsetX},${offsetY}) scale(${scale})`
    );
}

applyTransform();


// ======================================================
// Informatiepaneel
// ======================================================

function showInfo(id)
{
    const god = getGod(id);

    info.name.textContent = god.name;
    info.title.textContent = god.title;
    info.domain.textContent = god.domain;
    info.description.textContent = god.description;

    const parents =
    god.parents
    .map(id=>getGod(id).name);

    const children =
    getChildren(id)
    .map(id=>getGod(id).name);

    info.parents.textContent =
    parents.length ?
    parents.join(", ") :
    "-";

    info.children.textContent =
    children.length ?
    children.join(", ") :
    "-";
}

// ======================================================
// Deel 2A - Verbindingen tekenen
// ======================================================

function clearConnections() {
    while (lineLayer.firstChild) {
        lineLayer.removeChild(lineLayer.firstChild);
    }
}

function nodeCenter(id) {
    const p = positions[id];

    return {
        x: p.x + NODE_WIDTH / 2,
        y: p.y + NODE_HEIGHT / 2
    };
}

function drawConnection(parentId, childId) {

    const parent = nodeCenter(parentId);
    const child = nodeCenter(childId);

    // begin- en eindpunten
    const startX = parent.x;
    const startY = parent.y + NODE_HEIGHT / 2;

    const endX = child.x;
    const endY = child.y - NODE_HEIGHT / 2;

    // middenpunt zodat de lijn mooi buigt
    const middleY = (startY + endY) / 2;

    const path = svgElement("path");

    path.setAttribute(
        "d",
        `
        M ${startX} ${startY}
        L ${startX} ${middleY}
        L ${endX} ${middleY}
        L ${endX} ${endY}
        `
    );

    path.setAttribute("class", "connection");
    path.dataset.parent = parentId;
    path.dataset.child = childId;

    lineLayer.appendChild(path);
}

function drawConnections() {

    clearConnections();

    for (const god of GODS) {

        if (god.parents.length === 0)
            continue;

        for (const parent of god.parents) {

            if (!positions[parent])
                continue;

            drawConnection(parent, god.id);
        }
    }
}


// ======================================================
// Verbindingen markeren
// ======================================================

function clearHighlightedConnections() {

    const lines =
    lineLayer.querySelectorAll(".connection");

    lines.forEach(line => {
        line.classList.remove("highlight");
    });

}

function highlightConnections(id) {

    clearHighlightedConnections();

    const lines =
    lineLayer.querySelectorAll(".connection");

    lines.forEach(line => {

        if (
            line.dataset.parent === id ||
            line.dataset.child === id
        ) {
            line.classList.add("highlight");
        }

    });

}

// ======================================================
// Deel 2B - Knopen (goden) tekenen
// ======================================================

let selectedNode = null;

function clearNodes() {
    while (nodeLayer.firstChild) {
        nodeLayer.removeChild(nodeLayer.firstChild);
    }
}

function createNode(id) {

    const god = getGod(id);
    const pos = positions[id];

    // Groep
    const group = svgElement("g");
    group.classList.add("node");
    group.dataset.id = id;

    group.setAttribute(
        "transform",
        `translate(${pos.x}, ${pos.y})`
    );

    // Achtergrond
    const rect = svgElement("rect");

    rect.setAttribute("width", NODE_WIDTH);
    rect.setAttribute("height", NODE_HEIGHT);
    rect.setAttribute("rx", 12);
    rect.setAttribute("ry", 12);

    group.appendChild(rect);

    // Naam
    const text = svgElement("text");

    text.setAttribute("x", NODE_WIDTH / 2);
    text.setAttribute("y", NODE_HEIGHT / 2 + 6);

    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");

    text.textContent = god.name;

    group.appendChild(text);

    // Klik
    group.addEventListener("click", event => {

        event.stopPropagation();

        selectNode(id);

    });

    nodeLayer.appendChild(group);
}

function drawNodes() {

    clearNodes();

    for (const god of GODS) {

        createNode(god.id);

    }

}


// ======================================================
// Selecteren
// ======================================================

function deselectAllNodes() {

    nodeLayer
    .querySelectorAll(".node")
    .forEach(node => {

        node.classList.remove("selected");

    });

}

function selectNode(id) {

    selectedNode = id;

    deselectAllNodes();

    const node =
    nodeLayer.querySelector(
        `[data-id="${id}"]`
    );

    if (node)
        node.classList.add("selected");

    showInfo(id);

    highlightConnections(id);

}


// ======================================================
// Lege ruimte aanklikken = deselecteren
// ======================================================

svg.addEventListener("click", () => {

    selectedNode = null;

    deselectAllNodes();

    clearHighlightedConnections();

});


// ======================================================
// Alles tekenen
// ======================================================

function render() {

    drawConnections();

    drawNodes();

}

render();

// ======================================================
// Deel 3 - Zoomen, slepen, zoeken en reset
// ======================================================

// -----------------------------
// Pannen (slepen)
// -----------------------------

let dragging = false;
let lastX = 0;
let lastY = 0;

svg.addEventListener("mousedown", (e) => {

    if (e.button !== 0)
        return;

    dragging = true;

    lastX = e.clientX;
    lastY = e.clientY;

    svg.classList.add("dragging");
});

window.addEventListener("mouseup", () => {

    dragging = false;
    svg.classList.remove("dragging");

});

window.addEventListener("mousemove", (e) => {

    if (!dragging)
        return;

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;

    lastX = e.clientX;
    lastY = e.clientY;

    offsetX += dx;
    offsetY += dy;

    applyTransform();

});


// -----------------------------
// Zoomen
// -----------------------------

svg.addEventListener("wheel", (e) => {

    e.preventDefault();

    const factor = 0.05;

    if (e.deltaY < 0)
        scale *= (1 + factor);
    else
        scale *= (1 - factor);

    scale = Math.max(0.25, Math.min(scale, 4));

    applyTransform();

}, { passive: false });


// -----------------------------
// Reset knop
// -----------------------------

document
.getElementById("resetView")
.addEventListener("click", () => {

    scale = 1;
    offsetX = 500;
    offsetY = 250;

    applyTransform();

});


// -----------------------------
// Zoekfunctie
// -----------------------------

const search =
document.getElementById("search");

search.addEventListener("input", () => {

    const value =
    search.value
    .trim()
    .toLowerCase();

    nodeLayer
    .querySelectorAll(".node")
    .forEach(node => {

        node.classList.remove("search-result");

    });

    if (value === "")
        return;

    GODS.forEach(god => {

        if (
            god.name
            .toLowerCase()
            .includes(value)
        ) {

            const node =
            nodeLayer.querySelector(
                `[data-id="${god.id}"]`
            );

            if(node)
                node.classList.add("search-result");

        }

    });

});



// -----------------------------
// Escape wist selectie
// -----------------------------

window.addEventListener("keydown", e => {

    if(e.key !== "Escape")
        return;

    deselectAllNodes();

    clearHighlightedConnections();

    selectedNode = null;

});


// -----------------------------
// Eerste transform toepassen
// -----------------------------

applyTransform();
