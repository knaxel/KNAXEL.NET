import React, {
  Component
} from 'react';

export default function effect_perspective() {
  let constrain = 50;
  let mouseOverContainer = document.getElementById("perspective-container");
  let exs = document.getElementsByClassName("perspective");
  let fexs = document.getElementsByClassName("perspective-far");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;
    return "perspective(" + el.offsetWidth + "px) " +
      "translateZ(10px)" +
      "   rotateX(" + calcX + "deg) " +
      "   rotateY(" + calcY + "deg) ";
  };

  function transformsFar(x, y, el) {


    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;
    return "perspective(" + el.offsetWidth + "px) " +
      "   rotateX(" + calcX + "deg) " +
      "   rotateY(" + calcY + "deg) " +
      "   translateZ(" + -250 + "px)" /*Math.abs(x - box.x - (box.width/2))+"px)"*/+
      "   translateX(" + -(x - 1.1 * box.x - (box.width / 2)) / 8 + "px)" +
      "   translateY(" + -((y - 1.1 * box.y - (box.height / 2)) / 15 - 50) + "px)";
  }


  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  } else {
    mouseOverContainer.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      Array.from(exs).forEach(function(ex) {
        let position = xy.concat([ex]);
        window.requestAnimationFrame(function() {
          ex.style.transform = transforms.apply(null, position);
          ex.style.webkitTransform = transforms.apply(null, position);
        });

      });
      Array.from(fexs).forEach(function(ex) {
        let position = xy.concat([ex]);
        window.requestAnimationFrame(function() {
          ex.style.transform = transformsFar.apply(null, position);
          ex.style.webkitTransform = transformsFar.apply(null, position);
        });

      });
    };
  }
}