(function () {
  "use strict";

  function initWeb3Forms() {
    var form = document.getElementById("zk-contact-form");
    if (!form) return;

    var result = document.getElementById("form-result");
    var submitBtn = document.getElementById("submit");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      var formData = new FormData(form);
      var payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        botcheck: formData.get("botcheck") ? true : false,
      };

      if (!payload.name || !payload.email || !payload.message) {
        showResult("Please fill in all required fields.", "error");
        return;
      }

      setLoading(true);
      showResult("Sending message…", "pending");

      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          return response.json().then(function (json) {
            return { ok: response.ok, status: response.status, json: json };
          });
        })
        .then(function (res) {
          if (res.ok && res.json && res.json.success !== false) {
            showResult(
              res.json.message || "Thanks — your message was sent successfully.",
              "success"
            );
            form.reset();
          } else {
            showResult(
              (res.json && res.json.message) || "Something went wrong. Please try again.",
              "error"
            );
          }
        })
        .catch(function () {
          showResult("Network error. Please check your connection and try again.", "error");
        })
        .finally(function () {
          setLoading(false);
        });
    });

    function setLoading(isLoading) {
      if (!submitBtn) return;
      submitBtn.disabled = !!isLoading;
      submitBtn.classList.toggle("is-loading", !!isLoading);
      var label = submitBtn.querySelector(".zk-btn-label");
      if (label) {
        label.textContent = isLoading ? "Sending…" : "Send Message";
      }
    }

    function showResult(text, type) {
      if (!result) return;
      result.textContent = text;
      result.className = "form-result is-" + type;
      result.style.display = "block";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWeb3Forms);
  } else {
    initWeb3Forms();
  }
})();
