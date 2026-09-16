(function () {
  let input = document.getElementById("msg_input");
  let icon_send = document.getElementById("icon_send");
  let msgs_send = document.querySelector(".msgs_send");

  // Scrolls the page to the bottom so the new message is visible
  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  icon_send.onclick = function () {
    if (input.value != "") {
      // The message text is plain text (no HTML), so it is set with textContent
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.className = "name";
      span.textContent = "you";
      const p = document.createElement("p");
      p.className = "msg";
      p.textContent = input.value;
      div.appendChild(span);
      div.appendChild(p);
      msgs_send.appendChild(div);
      input.value = "";
      scrollToBottom();
    }
  };
})();
