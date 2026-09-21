// تابع تولید رنگ از اسم
function getColorFromName(name) {
    const colors = [
        '#e17055', '#00b894', '#0984e3', '#6c5ce7',
        '#fdcb6e', '#e84393', '#00cec9', '#d63031',
        '#fd79a8', '#55efc4'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}

// اعمال به همه آیتم‌ها
document.querySelectorAll('.item').forEach(item => {
    const avatar = item.querySelector('.avatar');
    const textEl = item.querySelector('.text');

    if (avatar && textEl) {
        const name = textEl.textContent.trim();
        if (name) {
            // حرف اول
            avatar.textContent = name.charAt(0).toUpperCase();
            // رنگ خودکار
            if (!avatar.style.background) {
                avatar.style.background = getColorFromName(name);
            }
        }
    }
});
