(function(){
  const currentLang = document.documentElement.getAttribute('lang') || 'it';
  const page = document.body.getAttribute('data-page') || 'index.html';
  const storedLang = localStorage.getItem('siteLanguage');

  function targetPath(lang, pageName){
    return lang === 'it' ? '/' + pageName : '/' + lang + '/' + pageName;
  }

  if (storedLang && storedLang !== currentLang) {
    window.location.replace(targetPath(storedLang, page));
    return;
  }

  document.querySelectorAll('.lang-flag').forEach(function(link){
    link.addEventListener('click', function(){
      localStorage.setItem('siteLanguage', this.getAttribute('data-lang'));
    });
  });
})();