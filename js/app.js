/**
 * ADITHIYA B VINU - PORTFOLIO APPLICATION ENGINE
 * Handles theme switching, mobile drawer navigation, smooth scrollspy,
 * case study tab switching, interactive artifact modal viewer, and clipboard utilities.
 */

(function () {
  "use strict";

  // --- 1. Theme Switcher (Corporate Light by default, Dark toggle) ---
  const THEME_STORAGE_KEY = "abv_portfolio_theme";
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIconSun = document.getElementById("theme-icon-sun");
  const themeIconMoon = document.getElementById("theme-icon-moon");

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Default to 'light' mode as confirmed by user during planning
    return "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (themeIconSun && themeIconMoon) {
      if (theme === "dark") {
        themeIconSun.style.display = "block";
        themeIconMoon.style.display = "none";
        themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
      } else {
        themeIconSun.style.display = "none";
        themeIconMoon.style.display = "block";
        themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
      }
    }
  }

  // Initialize theme
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      applyTheme(newTheme);
    });
  }

  // --- 2. Mobile Navigation Drawer ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", function () {
      const isOpen = mobileNav.classList.contains("open");
      if (isOpen) {
        mobileNav.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.classList.add("open");
        mobileMenuBtn.setAttribute("aria-expanded", "true");
      }
    });

    mobileNavLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- 3. Scrollspy for Sticky Nav Links ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });

  // --- 4. Interactive Tabs in Featured Case Study ---
  const artifactTabBtns = document.querySelectorAll(".artifact-tab-btn");
  const artifactPanels = document.querySelectorAll(".artifact-panel");

  if (artifactTabBtns.length > 0) {
    artifactTabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");

        // Update active button state
        artifactTabBtns.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        this.classList.add("active");
        this.setAttribute("aria-selected", "true");

        // Show target panel
        artifactPanels.forEach(function (panel) {
          if (panel.id === targetId) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      });
    });
  }

  // --- 5. Deliverable Artifact Modal Inspector ---
  const modalOverlay = document.getElementById("artifact-modal");
  const modalTitle = document.getElementById("modal-artifact-title");
  const modalImage = document.getElementById("modal-artifact-img");
  const modalType = document.getElementById("modal-artifact-type");
  const modalDesc = document.getElementById("modal-artifact-desc");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCloseFooterBtn = document.getElementById("modal-close-footer-btn");

  // Lookup dictionary for high-res artifact previews
  const ARTIFACT_PREVIEWS = {
    "sop-sample": {
      title: "SOP-RET-04: Old Gold Exchange & Scrap Inwarding Workflow",
      image: "assets/images/artifacts/sop-preview.svg",
      type: "Standard Operating Procedure (SOP Manual Excerpt)",
      desc: "Standardized 5-step operational process across 9 jewellery retail branches. Enforces KYC verification, Karatmeter purity testing, stone weight deduction, and automated POS voucher inwarding to prevent manual valuation discrepancies."
    },
    "matrix-sample": {
      title: "Governance Policy: Approval Authority & Discount Matrix",
      image: "assets/images/artifacts/matrix-preview.svg",
      type: "Internal Controls & Financial Governance Matrix",
      desc: "Tiered financial authorization structure establishing exact discounting and credit limits across Showroom Staff (3% max), Store Managers (7.5%), Regional Leads (12%), and the Executive Board. Implemented with automated Odoo backend validation."
    },
    "uat-sample": {
      title: "Quality Assurance: UAT Scenario Execution & Sign-off Log",
      image: "assets/images/artifacts/uat-preview.svg",
      type: "UAT Sign-off & Quality Assurance Matrix",
      desc: "Comprehensive tracking of 164 business test scenarios across Sales (POS), Purchase, Inventory transfers, and Accounts reconciliation. Validated with 100% sign-off across all 9 branch locations with zero critical blockers on cutover."
    },
    "training-sample": {
      title: "Change Management: 9-Store Training Curriculum & Rollout",
      image: "assets/images/artifacts/sop-preview.svg",
      type: "Change Management & Store Onboarding Plan",
      desc: "Phase-by-phase user enablement plan covering showroom floor simulations, cashier cash-drawer reconciliation drills, and store manager reporting dashboards across 9 branches in South India."
    },
    "fleet-sample": {
      title: "ERPNEXT: Fleet Logistics & Preventive Maintenance Lifecycle",
      image: "assets/images/artifacts/fleet-workflow.svg",
      type: "System Architecture & Trip Dispatch Workflow",
      desc: "State-machine architecture mapping vehicle dispatch, odometer logging, automated preventive service thresholds (5,000 km), and real-time fuel expense general ledger synchronization in ERPNext."
    }
  };

  function openArtifactModal(artifactId) {
    const data = ARTIFACT_PREVIEWS[artifactId];
    if (!data || !modalOverlay) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
    }
    if (modalType) modalType.textContent = data.type;
    if (modalDesc) modalDesc.textContent = data.desc;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  function closeArtifactModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Attach modal trigger events
  document.querySelectorAll("[data-open-modal]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const artifactId = this.getAttribute("data-open-modal");
      openArtifactModal(artifactId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeArtifactModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener("click", closeArtifactModal);

  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        closeArtifactModal();
      }
    });
  }

  // Keyboard navigation for modal (ESC to close)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
      closeArtifactModal();
    }
  });

  // --- 6. Clipboard Copy Utility with Toast Notification ---
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const toastNotice = document.getElementById("toast-notice");
  let toastTimeout = null;

  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector(".toast-text").textContent = message;
    toastNotice.style.display = "flex";

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toastNotice.style.display = "none";
    }, 2800);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", function () {
      const emailText = this.getAttribute("data-copy-value") || "adithiyabvinu@gmail.com";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailText).then(function () {
          showToast("Email address copied to clipboard!");
        }).catch(function () {
          fallbackCopyText(emailText);
        });
      } else {
        fallbackCopyText(emailText);
      }
    });
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast("Email address copied to clipboard!");
    } catch (err) {
      showToast("Direct email: " + text);
    }
    document.body.removeChild(textArea);
  }

  // Log portfolio init
  console.log("Adithiya B Vinu - ERP Portfolio initialized successfully.");
})();
