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
        
        // Senin GitHub hesabına ve depona ait olan kesin, değişmez ROM linki kanka:
        var fullRomUrl = 'https://arto6767.github.io/segarally/' + options.rom;
        
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
        
        console.log('EmulatorJS: Sistem tetiklendi. Garanti ROM Linki: ' + fullRomUrl);
    }
};
