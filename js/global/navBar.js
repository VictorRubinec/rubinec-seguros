import {
  servicesCardsForYou,
  servicesCardsForEnterprise,
} from "../index/components.js";

const menuMobileButton = document.getElementById('menu-mobile-button');
const nav = document.getElementById('navbar');
const menuList = document.getElementById('menu-list'); 

function toggleMenu(event) {
  if (event && event.type === 'touchstart') event.preventDefault();

  const isActive = nav.classList.toggle('active'); 
  
  if (menuMobileButton) { 
    menuMobileButton.setAttribute('aria-expanded', isActive);
    if (isActive) {
      menuMobileButton.setAttribute('aria-label', 'Fechar menu');
      document.body.style.overflow = 'hidden'; 
    } else {
      menuMobileButton.setAttribute('aria-label', 'Abrir menu');
      document.body.style.overflow = ''; 
      
      if (menuList) {
        const activeDropdown = menuList.querySelector('.dropdown.active');
        if (activeDropdown) {
            activeDropdown.classList.remove('active');
        }
      }
    }
  }
}

if (menuMobileButton) {
    menuMobileButton.addEventListener('click', toggleMenu);
    menuMobileButton.addEventListener('touchstart', toggleMenu); 
}

if (menuList) {
    menuList.addEventListener('click', (event) => {
        if (event.target.tagName !== 'A' || !nav.classList.contains('active')) {
            return;
        }

        const isMobile = menuMobileButton && window.getComputedStyle(menuMobileButton).display === 'block';
        const isAccordionTrigger = event.target.matches('#menu-list .dropdown > a.nav-item');

        if (isMobile && isAccordionTrigger) {
            event.preventDefault();
            event.target.closest('.dropdown').classList.toggle('active');
        } else {
            toggleMenu(event);
        }
    });
}

const navBarServices = document.getElementById("dropdown-section-services");

function addServicesToNavbar() {
  
  if (!navBarServices) {
    return;
  }

  const leftSection = navBarServices.querySelector(".left-section");
  const rightSection = navBarServices.querySelector(".right-section");

  if (!leftSection || !rightSection) {
    return;
  }

  leftSection.innerHTML = "<h1>Para você</h1>"; 
  rightSection.innerHTML = "<h1>Para sua empresa</h1>"; 

  servicesCardsForYou.forEach(service => {
    const aTag = document.createElement("a");
    aTag.href = service.link;
    aTag.textContent = service.title;
    leftSection.appendChild(aTag);
  });

  servicesCardsForEnterprise.forEach(service => {
    const aTag = document.createElement("a");
    aTag.href = service.link;
    aTag.textContent = service.title;
    rightSection.appendChild(aTag);
  });
}

function addSmoothScrollToNavbar() {
  const navLinks = document.querySelectorAll("#navbar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          event.preventDefault(); 
          const navbarHeight = document.querySelector("#header").offsetHeight;

          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
    addServicesToNavbar();
    addSmoothScrollToNavbar();
});