/* Hendrickson Law — site interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a real link is tapped (not the dropdown parent)
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (a.getAttribute("href") && a.getAttribute("href") !== "#") {
          nav.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Current year in footer
  var yr = document.getElementById("year");
  if (yr) { yr.textContent = new Date().getFullYear(); }

  // Contact form (Web3Forms). Activates once a real access key is set.
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    form.addEventListener("submit", function (e) {
      var keyField = form.querySelector('input[name="access_key"]');
      var key = keyField ? keyField.value : "";

      // Not yet configured: fall back to a mailto so no message is ever lost.
      if (!key || key.indexOf("YOUR_") === 0) {
        e.preventDefault();
        var name = (form.querySelector('[name="name"]') || {}).value || "";
        var email = (form.querySelector('[name="email"]') || {}).value || "";
        var phone = (form.querySelector('[name="phone"]') || {}).value || "";
        var area = (form.querySelector('[name="practice_area"]') || {}).value || "";
        var msg = (form.querySelector('[name="message"]') || {}).value || "";
        var body = encodeURIComponent(
          "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone +
          "\nPractice area: " + area + "\n\n" + msg
        );
        window.location.href = "mailto:steven@hendricksonlawok.com?subject=" +
          encodeURIComponent("Website inquiry from " + name) + "&body=" + body;
        return;
      }

      // Configured: AJAX submit to Web3Forms
      e.preventDefault();
      var data = new FormData(form);
      if (status) { status.className = "form-status show"; status.textContent = "Sending…"; }
      fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
        .then(function (r) { return r.json(); })
        .then(function (json) {
          if (json.success) {
            form.reset();
            if (status) { status.className = "form-status show ok"; status.textContent = "Thank you — your message has been sent. We will be in touch shortly."; }
          } else {
            throw new Error(json.message || "Submit failed");
          }
        })
        .catch(function () {
          if (status) { status.className = "form-status show err"; status.textContent = "Sorry — something went wrong. Please call (405) 722-8042 or email steven@hendricksonlawok.com."; }
        });
    });
  }
})();
