export const GetTagClasses = (tagName: string) => {
  let colors = "bg-red-400 text-white";

  switch (tagName.toUpperCase()) {
    case "JS":
    case "JAVASCRIPT":
      colors = "text-white bg-yellow-400";
      break;
    case "NODE":
    case "NODEJS":
    case "NODE.JS":
      colors = "text-white bg-green-600";
      break;
    case "ASTRO":
      colors = "text-white bg-orange-400";
      break;
    case "TS":
    case "TYPESCRIPT":
      colors = "text-white bg-blue-400";
      break;
    case "REACT":
      colors = "text-white bg-cyan-400";
      break;
  }

  return `text-xs inline-block mr-2 py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold rounded ${colors}`;
};
