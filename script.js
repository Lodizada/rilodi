// Alternar idioma (PT <-> EN)
const toggleBtn = document.getElementById('langToggle');
let currentLang = 'pt';

toggleBtn.addEventListener('click', () => {
  const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const text = el.textContent;
            el.textContent = el.getAttribute('data-en');
                el.setAttribute('data-en', text);
                  });

                    currentLang = currentLang === 'pt' ? 'en' : 'pt';
                      toggleBtn.textContent = currentLang === 'pt' ? '🇧🇷 Português' : '🇺🇸 English';
                      });