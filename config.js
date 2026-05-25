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
        
        // GitHub Pages'daki tam linki otomatik oluşturuyoruz (Örn: https://kullaniciadi.github.io/arcade/segarally.zip)
        var cleanOrigin = window.location.origin.replace(/\/+$/, "");
        var cleanPath = window.location.pathname.replace(/\/+$/, "");
        var cleanRomPath = options.rom.replace(/^\.\//, "/").replace(/^\/+/, "/");
        
        var fullRomUrl = cleanOrigin + cleanPath + cleanRomPath;
        
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
        
        console.log('EmulatorJS: Sistem tetiklendi. GitHub ROM Linki: ' + fullRomUrl);
    }
};