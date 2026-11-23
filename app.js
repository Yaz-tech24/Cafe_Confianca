(() => {
  const WA = '258841056999';
  const form = document.getElementById('form'), err = document.getElementById('err');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.nome.trim() || !d.tipo) { err.hidden = false; return; }
    err.hidden = true;
    const linhas = [`Olá, Café Confiança! Gostaria de um orçamento.`, `Nome: ${d.nome.trim()}`, `Evento: ${d.tipo}`];
    if (d.data) linhas.push(`Data: ${d.data.split('-').reverse().join('/')}`);
    if (d.pessoas) linhas.push(`Pessoas: ${d.pessoas}`);
    if (d.msg.trim()) linhas.push(`Mensagem: ${d.msg.trim()}`);
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(linhas.join('\n'))}`, '_blank', 'noopener');
  });
  const lb = document.getElementById('lb'), big = lb.querySelector('img');
  document.querySelector('.masonry').addEventListener('click', e => {
    if (e.target.tagName !== 'IMG') return;
    big.src = e.target.src; big.alt = e.target.alt; lb.showModal();
  });
  lb.addEventListener('click', () => lb.close());
})();
