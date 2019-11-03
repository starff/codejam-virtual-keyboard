const keyboard = [
    {keyCode: 'Backquote', enKey: '`', ruKey: 'ё', enKeyShift: '~', ruKeyShift: 'Ё'},
    {keyCode: 'Digit1', enKey: '1', ruKey: '1', enKeyShift: '!', ruKeyShift: '!'},
    {keyCode: 'Digit2', enKey: '2', ruKey: '2', enKeyShift: '@', ruKeyShift: '"'},
    {keyCode: 'Digit3', enKey: '3', ruKey: '3', enKeyShift: '#', ruKeyShift: '№'},
    {keyCode: 'Digit4', enKey: '4', ruKey: '4', enKeyShift: '$', ruKeyShift: ';'},
    {keyCode: 'Digit5', enKey: '5', ruKey: '5', enKeyShift: '%', ruKeyShift: '%'},
    {keyCode: 'Digit6', enKey: '6', ruKey: '6', enKeyShift: '^', ruKeyShift: ':'},
    {keyCode: 'Digit7', enKey: '7', ruKey: '7', enKeyShift: '&', ruKeyShift: '?'},
    {keyCode: 'Digit8', enKey: '8', ruKey: '8', enKeyShift: '*', ruKeyShift: '*'},
    {keyCode: 'Digit9', enKey: '9', ruKey: '9', enKeyShift: '(', ruKeyShift: '('},
    {keyCode: 'Digit0', enKey: '0', ruKey: '0', enKeyShift: ')', ruKeyShift: ')'},
    {keyCode: 'Minus', enKey: '-', ruKey: '-', enKeyShift: '_', ruKeyShift: '_'},
    {keyCode: 'Equal', enKey: '=', ruKey: '=', enKeyShift: '+', ruKeyShift: '+'},
    {keyCode: 'Backspace', enKey: 'Backspace', ruKey: 'Backspace', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'Tab', enKey: 'Tab', ruKey: 'Tab', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'KeyQ', enKey: 'q', ruKey: 'й', enKeyShift: 'Q', ruKeyShift: 'Й'},
    {keyCode: 'KeyW', enKey: 'w', ruKey: 'ц', enKeyShift: 'W', ruKeyShift: 'Ц'},
    {keyCode: 'KeyE', enKey: 'e', ruKey: 'у', enKeyShift: 'E', ruKeyShift: 'У'},
    {keyCode: 'KeyR', enKey: 'r', ruKey: 'к', enKeyShift: 'R', ruKeyShift: 'К'},
    {keyCode: 'KeyT', enKey: 't', ruKey: 'е', enKeyShift: 'T', ruKeyShift: 'Е'},
    {keyCode: 'KeyY', enKey: 'y', ruKey: 'н', enKeyShift: 'Y', ruKeyShift: 'Н'},
    {keyCode: 'KeyU', enKey: 'u', ruKey: 'г', enKeyShift: 'U', ruKeyShift: 'Г'},
    {keyCode: 'KeyI', enKey: 'i', ruKey: 'ш', enKeyShift: 'I', ruKeyShift: 'Ш'},
    {keyCode: 'KeyO', enKey: 'o', ruKey: 'щ', enKeyShift: 'O', ruKeyShift: 'Щ'},
    {keyCode: 'KeyP', enKey: 'p', ruKey: 'з', enKeyShift: 'P', ruKeyShift: 'З'},
    {keyCode: 'BracketLeft', enKey: '[', ruKey: 'х', enKeyShift: '{', ruKeyShift: 'Х'},
    {keyCode: 'BracketRight', enKey: ']', ruKey: 'ъ', enKeyShift: '}', ruKeyShift: 'Ъ'},
    {keyCode: 'Backslash', enKey: '', ruKey: '', enKeyShift: '|', ruKeyShift: '/'},
    {keyCode: 'CapsLock', enKey: 'CapsLock', ruKey: 'CapsLock', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'KeyA', enKey: 'a', ruKey: 'ф', enKeyShift: 'A', ruKeyShift: 'Ф'},
    {keyCode: 'KeyS', enKey: 's', ruKey: 'ы', enKeyShift: 'S', ruKeyShift: 'Ы'},
    {keyCode: 'KeyD', enKey: 'd', ruKey: 'в', enKeyShift: 'D', ruKeyShift: 'В'},
    {keyCode: 'KeyF', enKey: 'f', ruKey: 'а', enKeyShift: 'F', ruKeyShift: 'А'},
    {keyCode: 'KeyG', enKey: 'g', ruKey: 'п', enKeyShift: 'G', ruKeyShift: 'П'},
    {keyCode: 'KeyH', enKey: 'h', ruKey: 'р', enKeyShift: 'H', ruKeyShift: 'Р'},
    {keyCode: 'KeyJ', enKey: 'j', ruKey: 'о', enKeyShift: 'J', ruKeyShift: 'О'},
    {keyCode: 'KeyK', enKey: 'k', ruKey: 'л', enKeyShift: 'K', ruKeyShift: 'Л'},
    {keyCode: 'KeyL', enKey: 'l', ruKey: 'д', enKeyShift: 'L', ruKeyShift: 'Д'},
    {keyCode: 'Semicolon', enKey: ';', ruKey: 'ж', enKeyShift: ':', ruKeyShift: 'Ж'},
    {keyCode: 'Quote', enKey: "'", ruKey: 'э', enKeyShift: '"', ruKeyShift: 'Э'},
    {keyCode: 'Enter', enKey: 'Enter', ruKey: 'Enter', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ShiftLeft', enKey: 'Shift', ruKey: 'Shift', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'KeyZ', enKey: 'z', ruKey: 'я', enKeyShift: 'Z', ruKeyShift: 'Я'},
    {keyCode: 'KeyX', enKey: 'x', ruKey: 'ч', enKeyShift: 'X', ruKeyShift: 'Ч'},
    {keyCode: 'KeyC', enKey: 'c', ruKey: 'с', enKeyShift: 'C', ruKeyShift: 'С'},
    {keyCode: 'KeyV', enKey: 'v', ruKey: 'м', enKeyShift: 'V', ruKeyShift: 'М'},
    {keyCode: 'KeyB', enKey: 'b', ruKey: 'и', enKeyShift: 'B', ruKeyShift: 'И'},
    {keyCode: 'KeyN', enKey: 'n', ruKey: 'т', enKeyShift: 'N', ruKeyShift: 'Т'},
    {keyCode: 'KeyM', enKey: 'm', ruKey: 'ь', enKeyShift: 'M', ruKeyShift: 'Ь'},
    {keyCode: 'Comma', enKey: ',', ruKey: 'б', enKeyShift: '<', ruKeyShift: 'Б'},
    {keyCode: 'Period', enKey: '.', ruKey: 'ю', enKeyShift: '>', ruKeyShift: 'Ю'},
    {keyCode: 'Slash', enKey: '/', ruKey: '.', enKeyShift: '?', ruKeyShift: ','},
    {keyCode: 'ShiftRight', enKey: 'Shift', ruKey: 'Shift', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ControlLeft', enKey: 'Control', ruKey: 'Control', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'MetaLeft', enKey: 'Meta', ruKey: 'Meta', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'AltLeft', enKey: 'Alt', ruKey: 'Alt', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'Space', enKey: '', ruKey: '', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'AltRight', enKey: 'Alt', ruKey: 'Alt', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ControlRight', enKey: 'Control', ruKey: 'Control', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ArrowLeft', enKey: 'ArrowLeft', ruKey: 'ArrowLeft', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ArrowUp', enKey: 'ArrowUp', ruKey: 'ArrowUp', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ArrowDown', enKey: 'ArrowDown', ruKey: 'ArrowDown', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'ArrowRight', enKey: 'ArrowRight', ruKey: 'ArrowRight', enKeyShift: '', ruKeyShift: ''},
    {keyCode: 'Delete', enKey: 'Delete', ruKey: 'Delete', enKeyShift: '', ruKeyShift: ''}
];



function init() {
    document.body.innerHTML = '<textarea class="field"></textarea><div class="keyboard"></div>';
    let keyBlock = '';
    for (let i = 0; i < keyboard.length; i++) {
        keyBlock += '<div class="key">'+keyboard[i]['enKey']+'</div>';
    }
    document.querySelector('.keyboard').innerHTML = keyBlock;
}
window.onload = init();