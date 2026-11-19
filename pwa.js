if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(console.error);
}
const install = document.getElementById('install');
let installation;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installation = event;
  install.hidden = false;
});
window.addEventListener('appinstalled', () => {
  installation = null;
  install.hidden = true;
});
install.onclick = async () => {
  if (!installation) return;
  const prompt = installation;
  installation = null;
  install.hidden = true;
  await prompt.prompt();
};
