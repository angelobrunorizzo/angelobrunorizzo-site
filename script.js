(function () {
  const counterEl = document.getElementById('visit-counter');
  if (!counterEl) return;

  const namespace = 'angelo-bruno-rizzo';
  const key = 'portfolio-visit-counter';

  async function updateCounter() {
    try {
      const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
      if (!response.ok) throw new Error('Errore HTTP');
      const data = await response.json();
      counterEl.textContent = typeof data.value === 'number' ? String(data.value) : '—';
    } catch (error) {
      console.error('Contatore visite non disponibile:', error);
      counterEl.textContent = 'non disponibile';
    }
  }

  updateCounter();
})();
