// EmulatorJS FrontEnd Configuration
window.EmuJS = {
    init: function(options) {
        if (!options.id) options.id = 'game';
        
        var container = document.getElementById(options.id);
        if (!container) {
            console.error('EmulatorJS: Container #' + options.id + ' bulunamadı!');
            return;
        }
        
        window.EmuJS_options = options;
        
        var iframe = document.createElement('iframe');
        var serverUrl = 'https://emulatorjs.org/emu/';
        
        // Senin Archive.org'a yüklediğin o çalışan kesin direkt link kanka:
        var fullRomUrl = 'https://archive.org/download/srallyc/' + options.rom;
        
        iframe.src = serverUrl + '?system=' + options.system + 
                     '&rom=' + encodeURIComponent(fullRomUrl) + 
                     '&backend=' + (options.backend || 'mame');
        
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.setAttribute('scrolling', 'no');
        
        container.innerHTML = '';
        container.appendChild(iframe);
        
        console.log('EmulatorJS: Sistem tetiklendi. Doğru Temiz Link: ' + fullRomUrl);
    }
};
