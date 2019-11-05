const keyboard = {
    Backquote: {enKey: '`', ruKey: 'ё', enKeyShift: '~', ruKeyShift: 'Ё'},
    Digit1: {enKey: '1', ruKey: '1', enKeyShift: '!', ruKeyShift: '!'},
    Digit2: {enKey: '2', ruKey: '2', enKeyShift: '@', ruKeyShift: '"'},
    Digit3: {enKey: '3', ruKey: '3', enKeyShift: '#', ruKeyShift: '№'},
    Digit4: {enKey: '4', ruKey: '4', enKeyShift: '$', ruKeyShift: ';'},
    Digit5: {enKey: '5', ruKey: '5', enKeyShift: '%', ruKeyShift: '%'},
    Digit6: {enKey: '6', ruKey: '6', enKeyShift: '^', ruKeyShift: ':'},
    Digit7: {enKey: '7', ruKey: '7', enKeyShift: '&', ruKeyShift: '?'},
    Digit8: {enKey: '8', ruKey: '8', enKeyShift: '*', ruKeyShift: '*'},
    Digit9: {enKey: '9', ruKey: '9', enKeyShift: '(', ruKeyShift: '('},
    Digit0: {enKey: '0', ruKey: '0', enKeyShift: ')', ruKeyShift: ')'},
    Minus: {enKey: '-', ruKey: '-', enKeyShift: '_', ruKeyShift: '_'},
    Equal: {enKey: '=', ruKey: '=', enKeyShift: '+', ruKeyShift: '+'},
    Backspace: {value: '&lArr;'},
    Tab: {value: 'Tab'},
    KeyQ: {enKey: 'q', ruKey: 'й', enKeyShift: 'Q', ruKeyShift: 'Й'},
    KeyW: {enKey: 'w', ruKey: 'ц', enKeyShift: 'W', ruKeyShift: 'Ц'},
    KeyE: {enKey: 'e', ruKey: 'у', enKeyShift: 'E', ruKeyShift: 'У'},
    KeyR: {enKey: 'r', ruKey: 'к', enKeyShift: 'R', ruKeyShift: 'К'},
    KeyT: {enKey: 't', ruKey: 'е', enKeyShift: 'T', ruKeyShift: 'Е'},
    KeyY: {enKey: 'y', ruKey: 'н', enKeyShift: 'Y', ruKeyShift: 'Н'},
    KeyU: {enKey: 'u', ruKey: 'г', enKeyShift: 'U', ruKeyShift: 'Г'},
    KeyI: {enKey: 'i', ruKey: 'ш', enKeyShift: 'I', ruKeyShift: 'Ш'},
    KeyO: {enKey: 'o', ruKey: 'щ', enKeyShift: 'O', ruKeyShift: 'Щ'},
    KeyP: {enKey: 'p', ruKey: 'з', enKeyShift: 'P', ruKeyShift: 'З'},
    BracketLeft: {enKey: '[', ruKey: 'х', enKeyShift: '{', ruKeyShift: 'Х'},
    BracketRight: {enKey: ']', ruKey: 'ъ', enKeyShift: '}', ruKeyShift: 'Ъ'},
    Backslash: {enKey: '', ruKey: '', enKeyShift: '|', ruKeyShift: '/'},
    Delete: {value: 'del'},
    CapsLock: {value: 'CapsLock'},
    KeyA: {enKey: 'a', ruKey: 'ф', enKeyShift: 'A', ruKeyShift: 'Ф'},
    KeyS: {enKey: 's', ruKey: 'ы', enKeyShift: 'S', ruKeyShift: 'Ы'},
    KeyD: {enKey: 'd', ruKey: 'в', enKeyShift: 'D', ruKeyShift: 'В'},
    KeyF: {enKey: 'f', ruKey: 'а', enKeyShift: 'F', ruKeyShift: 'А'},
    KeyG: {enKey: 'g', ruKey: 'п', enKeyShift: 'G', ruKeyShift: 'П'},
    KeyH: {enKey: 'h', ruKey: 'р', enKeyShift: 'H', ruKeyShift: 'Р'},
    KeyJ: {enKey: 'j', ruKey: 'о', enKeyShift: 'J', ruKeyShift: 'О'},
    KeyK: {enKey: 'k', ruKey: 'л', enKeyShift: 'K', ruKeyShift: 'Л'},
    KeyL: {enKey: 'l', ruKey: 'д', enKeyShift: 'L', ruKeyShift: 'Д'},
    Semicolon: {enKey: ';', ruKey: 'ж', enKeyShift: ':', ruKeyShift: 'Ж'},
    Quote: {enKey: "'", ruKey: 'э', enKeyShift: '"', ruKeyShift: 'Э'},
    Enter: {value: '&crarr;'},
    ShiftLeft: {value: 'Shift'},
    KeyZ: {enKey: 'z', ruKey: 'я', enKeyShift: 'Z', ruKeyShift: 'Я'},
    KeyX: {enKey: 'x', ruKey: 'ч', enKeyShift: 'X', ruKeyShift: 'Ч'},
    KeyC: {enKey: 'c', ruKey: 'с', enKeyShift: 'C', ruKeyShift: 'С'},
    KeyV: {enKey: 'v', ruKey: 'м', enKeyShift: 'V', ruKeyShift: 'М'},
    KeyB: {enKey: 'b', ruKey: 'и', enKeyShift: 'B', ruKeyShift: 'И'},
    KeyN: {enKey: 'n', ruKey: 'т', enKeyShift: 'N', ruKeyShift: 'Т'},
    KeyM: {enKey: 'm', ruKey: 'ь', enKeyShift: 'M', ruKeyShift: 'Ь'},
    Comma: {enKey: ',', ruKey: 'б', enKeyShift: '<', ruKeyShift: 'Б'},
    Period: {enKey: '.', ruKey: 'ю', enKeyShift: '>', ruKeyShift: 'Ю'},
    Slash: {enKey: '/', ruKey: '.', enKeyShift: '?', ruKeyShift: ','},
    ArrowUp: {value: '&uarr;'},
    ShiftRight: {value: 'Shift'},
    ControlLeft: {value: 'Ctrl'},
    MetaLeft: {value: 'Win'},
    AltLeft: {value: 'Alt'},
    Space: {value: 'Space'},
    AltRight: {value: 'Alt'},
    ArrowLeft: {value: '&larr;'},
    ArrowDown: {value: '&darr;'},
    ArrowRight: {value: '&rarr;'},
    ControlRight: {value: 'Ctrl'}
};

// save language 

let lang = localStorage.getItem('language');
localStorage.setItem('language', lang);

// shift and caps lock

let shift = 0;
document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        shift = 1;
        console.log(shift);
        initKeyboard();
    };
});
document.addEventListener('keyup', function(event) {
    if (event.key == 'Shift') {
        shift = 0;
        console.log(shift);
        initKeyboard();
    };
});
document.addEventListener('keydown', function(event) {
    if (event.code == 'CapsLock' && shift == 0) {
        shift = 1;
        console.log(shift);
        initKeyboard();
    } else if (event.code == 'CapsLock' && shift == 1) {
        shift = 0;
        console.log(shift);
        initKeyboard();
    };
});

// init text field

function initText() {
document.body.innerHTML = '<textarea class="field"></textarea><div class="keyboard"></div>';
};


// init keyboard

function initKeyboard() {
    let keyBlock = '';
    for (let keyCode in keyboard) {
        if (keyCode == 'Backspace' || keyCode == 'CapsLock' || keyCode == 'Enter' || keyCode == 'ShiftLeft' || keyCode == 'ShiftRight') {
            keyBlock += '<div class="key funcKey dblKey" id="'+keyCode+'">'+keyboard[keyCode]['value']+'</div>';
        } else if (keyCode == 'Space') {
            keyBlock += '<div class="key funcKey space" id="'+keyCode+'">'+keyboard[keyCode]['value']+'</div>';
        } else if (keyCode == 'Tab' || keyCode == 'Delete' || keyCode == 'ArrowUp' || keyCode == 'ControlLeft' || keyCode == 'MetaLeft' || keyCode == 'AltLeft' || keyCode == 'AltRight' || keyCode == 'ArrowLeft' || keyCode == 'ArrowDown' || keyCode == 'ArrowRight' || keyCode == 'ControlRight') {
            keyBlock += '<div class="key funcKey" id="'+keyCode+'">'+keyboard[keyCode]['value']+'</div>';
        } else {
            if (lang == 'en' && shift == 0) {
                keyBlock += '<div class="key" id="'+keyCode+'">'+keyboard[keyCode]['enKey']+'</div>';
            } else if (lang == 'en' && shift == 1) {
                keyBlock += '<div class="key" id="'+keyCode+'">'+keyboard[keyCode]['enKeyShift']+'</div>';
            } else if (lang == 'ru' && shift == 0) {
                keyBlock += '<div class="key" id="'+keyCode+'">'+keyboard[keyCode]['ruKey']+'</div>';
            } else if (lang == 'ru' && shift == 1) {
                keyBlock += '<div class="key" id="'+keyCode+'">'+keyboard[keyCode]['ruKeyShift']+'</div>';
            };
        };
    };
    document.querySelector('.keyboard').innerHTML = keyBlock;
};
window.onload = initText();
window.onload = initKeyboard();






// add text in field

let text = '';
document.addEventListener('keydown', function(event) {
    if (lang == 'en' && keyboard[event.code]['enKey'] != undefined && shift == 0) {
        text += keyboard[event.code]['enKey'];
    } else if (lang == 'ru' && keyboard[event.code]['ruKey'] != undefined && shift == 0) {
        text += keyboard[event.code]['ruKey'];
    } else if (lang == 'en' && keyboard[event.code]['enKey'] != undefined && shift == 1) {
        text += keyboard[event.code]['enKeyShift'];
    } else if (lang == 'ru' && keyboard[event.code]['ruKey'] != undefined && shift == 1) {
        text += keyboard[event.code]['ruKeyShift'];
    };
    document.querySelector('.field').innerHTML = text;
    document.getElementById(event.code).classList.add("active");
});
document.addEventListener('keyup', function(event) {
    document.getElementById(event.code).classList.remove("active");
});

//change language

document.addEventListener('keydown', function(event) {
    if (event.key == 'Alt' && event.ctrlKey) {
            if (lang == 'en') {
                lang = 'ru';
                console.log(lang);
            } else {
                lang = 'en';
                console.log(lang);
            };
            initKeyboard();
            localStorage.setItem('language', lang);
    };
});

console.log(lang);



//click
document.querySelector('#Backquote').addEventListener('mousedown', function() {
    if (lang == 'en') {
        text += keyboard.Backquote['enKey'];
        console.log(1);
    } else {
        text += keyboard.Backquote['ruKey'];
        console.log(2);
    };
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit1').addEventListener('mousedown', function() {
    text += keyboard.Digit1['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit2').addEventListener('mousedown', function() {
    text += keyboard.Digit2['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit3').addEventListener('mousedown', function() {
    text += keyboard.Digit3['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit4').addEventListener('mousedown', function() {
    text += keyboard.Digit4['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit5').addEventListener('mousedown', function() {
    text += keyboard.Digit5['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit6').addEventListener('mousedown', function() {
    text += keyboard.Digit6['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit7').addEventListener('mousedown', function() {
    text += keyboard.Digit7['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit8').addEventListener('mousedown', function() {
    text += keyboard.Digit8['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit9').addEventListener('mousedown', function() {
    text += keyboard.Digit9['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Digit0').addEventListener('mousedown', function() {
    text += keyboard.Digit0['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Minus').addEventListener('mousedown', function() {
    text += keyboard.Minus['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Equal').addEventListener('mousedown', function() {
    text += keyboard.Equal['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyQ').addEventListener('mousedown', function() {
    text += keyboard.KeyQ['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyW').addEventListener('mousedown', function() {
    text += keyboard.KeyW['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyE').addEventListener('mousedown', function() {
    text += keyboard.KeyE['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyR').addEventListener('mousedown', function() {
    text += keyboard.KeyR['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyT').addEventListener('mousedown', function() {
    text += keyboard.KeyT['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyY').addEventListener('mousedown', function() {
    text += keyboard.KeyY['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyU').addEventListener('mousedown', function() {
    text += keyboard.KeyU['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyI').addEventListener('mousedown', function() {
    text += keyboard.KeyI['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyO').addEventListener('mousedown', function() {
    text += keyboard.KeyO['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyP').addEventListener('mousedown', function() {
    text += keyboard.KeyP['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#BracketLeft').addEventListener('mousedown', function() {
    text += keyboard.BracketLeft['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#BracketRight').addEventListener('mousedown', function() {
    text += keyboard.BracketRight['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Backslash').addEventListener('mousedown', function() {
    text += keyboard.Backslash['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyA').addEventListener('mousedown', function() {
    text += keyboard.KeyA['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyS').addEventListener('mousedown', function() {
    text += keyboard.KeyS['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyD').addEventListener('mousedown', function() {
    text += keyboard.KeyD['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyF').addEventListener('mousedown', function() {
    text += keyboard.KeyF['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyG').addEventListener('mousedown', function() {
    text += keyboard.KeyG['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyH').addEventListener('mousedown', function() {
    text += keyboard.KeyH['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyJ').addEventListener('mousedown', function() {
    text += keyboard.KeyJ['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyK').addEventListener('mousedown', function() {
    text += keyboard.KeyK['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyL').addEventListener('mousedown', function() {
    text += keyboard.KeyL['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Semicolon').addEventListener('mousedown', function() {
    text += keyboard.Semicolon['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Quote').addEventListener('mousedown', function() {
    text += keyboard.Quote['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyZ').addEventListener('mousedown', function() {
    text += keyboard.KeyZ['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyX').addEventListener('mousedown', function() {
    text += keyboard.KeyX['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyC').addEventListener('mousedown', function() {
    text += keyboard.KeyC['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyV').addEventListener('mousedown', function() {
    text += keyboard.KeyV['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyB').addEventListener('mousedown', function() {
    text += keyboard.KeyB['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyN').addEventListener('mousedown', function() {
    text += keyboard.KeyN['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#KeyM').addEventListener('mousedown', function() {
    text += keyboard.KeyM['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Comma').addEventListener('mousedown', function() {
    text += keyboard.Comma['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Period').addEventListener('mousedown', function() {
    text += keyboard.Period['enKey'];
    document.querySelector('.field').innerHTML = text;
});
document.querySelector('#Slash').addEventListener('mousedown', function() {
    text += keyboard.Slash['enKey'];
    document.querySelector('.field').innerHTML = text;
});
