export const getDate = () => {
  let d = new Date();
  let m = ("0" + (d.getUTCMonth() + 1)).slice(-2);
  let t = (d.getDate() < 10 ? "0" : "") + d.getDate();
  let y = d.getUTCFullYear();

  return `${y}${m}${t}`;
};
