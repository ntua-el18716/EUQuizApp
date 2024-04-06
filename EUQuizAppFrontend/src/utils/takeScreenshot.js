import html2canvas from "html2canvas";

export const takeScreenshot = () => {
  // const element = document.getElementById("candidate");
  const element = document.getElementById("print");

  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet?.insertRule(
    "body > div:last-child img { display: inline-block; }",
  );

  if (!element) return;
  html2canvas(element, {
    // scale: 2,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  }).then((canvas) => {
    style.remove();
    let image = canvas.toDataURL("image/jpeg");
    const a = document.createElement("a");
    a.href = image;
    a.download = "Capture.jpeg";
    a.click();
  });
};
