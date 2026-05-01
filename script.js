document.addEventListener("DOMContentLoaded", function () {
  // === MENU LATERALE (HAMBURGER) ===
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.getElementById("close-menu");
  const sideMenu = document.getElementById("side-menu");

  if (openBtn && closeBtn && sideMenu) {
    openBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // evita chiusura immediata
      sideMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
      sideMenu.classList.remove("open");
    });

    document.addEventListener("click", function (event) {
      if (!sideMenu.contains(event.target) && event.target !== openBtn) {
        sideMenu.classList.remove("open");
      }
    });
  }

  // === BANNER ISCRIZIONE ===
  const banner = document.getElementById("subscribe-banner");
  const closeBannerBtn = document.getElementById("close-banner");

  if (banner && !sessionStorage.getItem("bannerShown")) {
    setTimeout(() => {
      banner.classList.remove("hidden");
      sessionStorage.setItem("bannerShown", "true");
    }, 5000); 
  }

  if (closeBannerBtn && banner) {
    closeBannerBtn.addEventListener("click", () => {
      banner.classList.add("hidden");
    });
  }

  // === TICKER FLASH NEWS SCORRENTE ===
  const tickerWrapper = document.querySelector(".ticker-wrapper");

  if (tickerWrapper) {
    // Duplica il contenuto per effetto loop infinito
    const originalContent = tickerWrapper.innerHTML;
    tickerWrapper.innerHTML += originalContent;
  }
});