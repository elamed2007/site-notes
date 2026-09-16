(function () {
  let input_autre = document.getElementById("input_autre");
  let check_autre = document.getElementById("autre");

  check_autre.addEventListener("change", function () {
    if (this.checked) input_autre.style.display = "block";
    else input_autre.style.display = "none";
  });
})();
