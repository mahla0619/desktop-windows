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

// ست کردن آواتار بر اساس اسم
function applyAvatar(container, name) {
    const avatar = container.querySelector('.avatar');
    if (avatar && name) {
        avatar.textContent = name.charAt(0).toUpperCase();
        if (!avatar.style.background) {
            avatar.style.background = getColorFromName(name);
        }
    }
}

// ۱) آیتم‌های منوی اکانت
document.querySelectorAll('.account-settings .item').forEach(item => {
    const textEl = item.querySelector('.text');
    if (textEl) {
        const name = textEl.textContent.trim();
        if (name) applyAvatar(item, name);
    }
});

// ۲) chat-content ها — اسم از .name خونده می‌شه
document.querySelectorAll('.chat-content').forEach(chat => {
    const nameEl = chat.querySelector('.name');
    if (nameEl) {
        const name = nameEl.textContent.trim();
        if (name) applyAvatar(chat, name);
    }
});
