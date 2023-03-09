const inStaller = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
     
     window.deferredPrompt = event;

     
     inStaller.classList.toggle('hidden', false);
});


inStaller.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
  
    
    promptEvent.prompt();
    
   
    window.deferredPrompt = null;
    
    inStaller.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    
    window.deferredPrompt = null;
});