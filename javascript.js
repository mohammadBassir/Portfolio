const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        // Remove active class from all links
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        this.classList.add("active");

    });
});

document.getElementById('year').textContent = new Date().getFullYear();
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));