const nav = document.querySelector('#navigation');
const toggle = document.querySelector('.menu-toggle');
function closeMenu(restoreFocus = false) {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu');
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header') && nav.classList.contains('open')) closeMenu(); });
window.matchMedia('(min-width: 768px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = String(new Date().getFullYear());

const reserveDialog = document.querySelector('#reserve-dialog');
const menuDialog = document.querySelector('#menu-dialog');
let dialogOpener;
function openDialog(dialog, opener) {
  [reserveDialog, menuDialog].forEach(other => { if (other.open) other.close(); });
  closeMenu(); dialogOpener = opener; dialog.showModal(); document.body.classList.add('modal-open');
}
for (const dialog of [reserveDialog, menuDialog]) {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }
  });
  dialog.addEventListener('close', () => { if (![reserveDialog, menuDialog].some(d => d.open)) { document.body.classList.remove('modal-open'); if (dialogOpener?.isConnected) dialogOpener.focus(); } });
}
document.querySelectorAll('[data-reserve]').forEach(button => button.addEventListener('click', () => openDialog(reserveDialog, button)));
document.querySelector('[data-location]').addEventListener('click', () => { document.querySelector('#location-message').hidden = false; });

const dateField = document.querySelector('input[name="date"]');
function localToday() { const now = new Date(); return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`; }
dateField.min = localToday();
dateField.addEventListener('input', () => dateField.setCustomValidity(''));
const form = document.querySelector('#reserve-form');
const result = document.querySelector('#reserve-result');
let reservationText = '';
form.addEventListener('submit', event => {
  event.preventDefault(); dateField.min = localToday();
  if (dateField.value < dateField.min) { dateField.setCustomValidity('Escolha hoje ou uma data futura.'); dateField.reportValidity(); return; }
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  if (!name) { form.elements.name.setCustomValidity('Informe seu nome.'); form.elements.name.reportValidity(); return; }
  const formattedDate = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(`${data.get('date')}T12:00:00`));
  reservationText = `Solicitação de reserva — BRAVO\nNome: ${name}\nPessoas: ${data.get('guests')}\nData: ${formattedDate}\nHorário desejado: ${data.get('time')}${String(data.get('notes')).trim() ? '\nObservações: ' + String(data.get('notes')).trim() : ''}\n\nSolicitação não enviada. Reserva sujeita à confirmação da casa.`;
  document.querySelector('#reserve-summary').textContent = reservationText;
  document.querySelector('#copy-status').textContent = '';
  form.hidden = true; result.hidden = false; document.querySelector('#copy-reservation').focus();
});
form.elements.name.addEventListener('input', () => form.elements.name.setCustomValidity(''));
document.querySelector('#edit-reservation').addEventListener('click', () => { result.hidden = true; form.hidden = false; form.elements.name.focus(); });
document.querySelector('#copy-reservation').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText(reservationText); status.textContent = 'Solicitação copiada. Ela ainda não foi enviada.'; }
  catch { const selection = window.getSelection(); const range = document.createRange(); range.selectNodeContents(document.querySelector('#reserve-summary')); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'O texto foi selecionado. Use a opção Copiar do seu dispositivo.'; }
});

const dishes = [
  { category: 'parrilla', label: 'DA PARRILLA', name: 'Corte na brasa', description: 'Carne grelhada, crosta tostada e chimichurri.' },
  { category: 'parrilla', label: 'DA PARRILLA', name: 'Vegetais no fogo', description: 'Vegetais assados, ervas e azeite. Para dividir a mesa.' },
  { category: 'burger', label: 'ENTRE PÃES', name: 'Burger BRAVO', description: 'Pão brioche, carne grelhada, queijo e cebola caramelizada.' },
  { category: 'burger', label: 'ENTRE PÃES', name: 'Batatas rústicas', description: 'Batatas douradas com ervas, para acompanhar.' },
  { category: 'bar', label: 'DO BAR', name: 'Brinde cítrico', description: 'Proposta de coquetel com notas cítricas e final aromático.' },
  { category: 'bar', label: 'DO BAR', name: 'Sem álcool, com sabor', description: 'Proposta refrescante de frutas e ervas.' }
];
function filterMenu(category) {
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  const list = document.querySelector('#menu-items'); list.replaceChildren();
  dishes.filter(dish => category === 'all' || dish.category === category).forEach(dish => {
    const article = document.createElement('article'); article.className = 'dish';
    const label = document.createElement('span'); label.className = 'dish-category'; label.textContent = dish.label;
    const heading = document.createElement('h3'); heading.textContent = dish.name;
    const description = document.createElement('p'); description.textContent = dish.description;
    article.append(label, heading, description); list.append(article);
  });
}
document.querySelectorAll('[data-menu]').forEach(button => button.addEventListener('click', () => { filterMenu(button.dataset.menu); openDialog(menuDialog, button); }));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => filterMenu(button.dataset.filter)));
