const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
     
     window.deferredPrompt = event;

     
     butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    const Event_Call = window.deferredPrompt;
    if (!Event_Call) {
     return;
    }
  
    
    Event_Call.prompt();
    
   
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    
    window.deferredPrompt = null;
});