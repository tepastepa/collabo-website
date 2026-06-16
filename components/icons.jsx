// Лёгкий набор линейных иконок (inline SVG, без зависимостей).
// Единая толщина штриха 1.5, наследуют currentColor.
const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Phone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c0-.6.4-1 1-1h2.3c.5 0 .9.3 1 .8l.8 3c.1.4 0 .8-.3 1l-1.4 1.3a13 13 0 0 0 5.5 5.5l1.3-1.4c.3-.3.7-.4 1-.3l3 .8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1A15 15 0 0 1 4 5Z" />
    </svg>
  );
}

export function Mail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Pin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

export function Spark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v6m0 6v6m-9-9h6m6 0h6M6 6l4 4m4 4 4 4m0-12-4 4m-4 4-4 4" />
    </svg>
  );
}

export function Clock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Device(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="13" height="11" rx="1.5" />
      <rect x="17" y="8" width="4" height="12" rx="1" />
      <path d="M7 19h6" />
    </svg>
  );
}

export function Layers(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

// Сопоставление имени строки → компонент (для данных в content.js)
export const Icons = {
  arrow: ArrowRight,
  arrowUpRight: ArrowUpRight,
  phone: Phone,
  mail: Mail,
  pin: Pin,
  check: Check,
  spark: Spark,
  clock: Clock,
  device: Device,
  layers: Layers,
};
