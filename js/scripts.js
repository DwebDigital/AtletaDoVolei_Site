const Moving = document.getElementById("moving");
document.onmousemove = ev => {
  const positionX = (window.innerWidth / -10 - ev.x) / -80;
  const positionY = -ev.y / 90;
  Moving.style.transform = `translate(${positionX}px, ${positionY}px)`;
};
