// JavaScript functions for various tools

// Word Counter
function wordCounter(text) {
    return text.trim().split(/\s+/).length;
}

// Case Converter
function caseConverter(text, caseType) {
    if (caseType === 'upper') {
        return text.toUpperCase();
    } else if (caseType === 'lower') {
        return text.toLowerCase();
    } else {
        return text;
    }
}

// JSON Formatter
function jsonFormatter(json) {
    return JSON.stringify(JSON.parse(json), null, 4);
}

// Password Generator
function passwordGenerator(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// URL Encoder
function urlEncoder(url) {
    return encodeURIComponent(url);
}

// Markdown Converter
function markdownConverter(text) {
    // Simple Markdown to HTML conversion (for demonstration)
    return text.replace(/\*(.+?)\*/g, '<b>$1</b>')
               .replace(/\_(.+?)\_/g, '<i>$1</i>');
}

// Color Converter
function colorConverter(hex) {
    let bigint = parseInt(hex.replace('#', ''), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { r, g, b };
}

// UUID Generator
function uuidGenerator() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// CSS Minifier
function cssMinifier(css) {
    return css.replace(/\s+/g, ' ').replace(/\/\*.*?\*\//g, '').trim();
}

// Base64 Converter
function base64Converter(text) {
    return btoa(text);
}

// QR Code Generator (using qrcode library)
function qrCodeGenerator(text) {
    // Assume a QR code library is loaded that has QRCode.toDataURL
    QRCode.toDataURL(text, function (err, url) {
        if (err) throw err;
        return url;
    });
}

// Downloaders (generic function)
function genericDownloader(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = ''; // Set filename here if needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}