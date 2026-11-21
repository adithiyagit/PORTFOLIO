/**
 * ADITHIYA B VINU - PORTFOLIO INTERACTION ENGINE
 * Theme switching (Porcelain Light / Midnight Navy),
 * 1-click clipboard utility, and smooth navigation.
 */

(function () {
  "use strict";

  // --- 1. Theme Switcher ---
  const THEME_KEY = "abv_portfolio_theme";
  const themeBtn = document.getElementById("theme-btn");
  const sunIcon = document.getElementById("theme-sun");
  const moonIcon = document.getElementById("theme-moon");

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);

    if (sunIcon && moonIcon) {
      if (theme === "dark") {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
        themeBtn.setAttribute("aria-label", "Switch to light theme");
      } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        themeBtn.setAttribute("aria-label", "Switch to dark theme");
      }
    }
  }

  applyTheme(getSavedTheme());

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
    });
  }

  // --- 2. 1-Click Clipboard Copy ---
  const copyBtns = document.querySelectorAll("[data-copy-text]");
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = "block";

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.style.display = "none";
    }, 2400);
  }

  copyBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const textToCopy = this.getAttribute("data-copy-text");
      if (!textToCopy) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(function () {
          showToast("Copied: " + textToCopy);
        }).catch(function () {
          fallbackCopy(textToCopy);
        });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand("copy");
      showToast("Copied: " + text);
    } catch (e) {
      showToast(text);
    }
    document.body.removeChild(el);
  }
})();
