export const scrollTo = (id) => (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (typeof document === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;
  const headerH = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH + 1;
  try {
    window.scrollTo({ top, behavior: 'smooth' });
  } catch {
    window.scrollTo(0, top);
  }
};
