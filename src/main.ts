const SVG_NS = "http://www.w3.org/2000/svg";

const app = document.body;

const config = {
  width: 400,
  height: 300,
};

const generateOverlayPath = (_config = config) => {
  return `M0,0 L${_config.width},0 L${_config.width},${_config.height} L0,${_config.height} L0,0 Z`;
};

const createSvg = (_config = config) => {
  const { width, height } = config;
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("width", `${width}`);
  svg.setAttribute("height", `${height}`);

  const stagePath = document.createElementNS(SVG_NS, "path");
  stagePath.setAttribute("d", generateOverlayPath(_config));
  stagePath.style.fill = "red";
  svg.append(stagePath);

  return svg;
};

app.append(createSvg(config));
