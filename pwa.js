if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(console.error);
}
const install = document.getElementById('install');
const help = document.getElementById('installHelp');
let installation;
install.hidden = matchMedia('(display-mode: standalone)').matches;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installation = event;
});
window.addEventListener('appinstalled', () => {
  installation = null;
  install.hidden = true;
  help.hidden = true;
});
install.onclick = async () => {
  if (!installation) {
    help.hidden = !help.hidden;
    return;
  }
  const prompt = installation;
  installation = null;
  await prompt.prompt();
};
