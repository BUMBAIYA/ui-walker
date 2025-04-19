const SVG_NS = "http://www.w3.org/2000/svg" as const;

document.getElementById("click")?.addEventListener("click", () => {
  alert("click through highlight");
});

const app = document.body;

const generateHighlight = (
  x: number,
  y: number,
  width: number,
  height: number,
  padding: number
) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const _padding = Math.max(padding, 0);
  return `M0,0 H${windowWidth} V${windowHeight} H0 V0 Z M${x - _padding},${
    y - _padding
  } H${x + width + _padding} V${y + height + _padding} H${x - _padding} V${
    y - _padding
  } z`;
};

const createSvg = (
  x: number,
  y: number,
  width: number,
  height: number,
  padding: number
) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${windowWidth} ${windowHeight}`);

  svg.style.position = "fixed";
  svg.style.zIndex = "100000";
  svg.style.inset = "0";
  svg.style.fillRule = "evenodd";
  svg.style.clipRule = "evenodd";
  svg.style.pointerEvents = "none";

  svg.style.fill = "rgb(256,100,0)";
  svg.style.opacity = "0.7";

  const highlightPath = document.createElementNS(SVG_NS, "path");
  highlightPath.setAttribute(
    "d",
    generateHighlight(x, y, width, height, padding)
  );

  highlightPath.style.pointerEvents = "auto";
  highlightPath.style.cursor = "auto";
  svg.append(highlightPath);

  return svg;
};

const WIDTH = 300;
const HEIGHT = 300;

app.append(createSvg(window.innerWidth / 2 - WIDTH / 2, 150, WIDTH, HEIGHT, 5));
