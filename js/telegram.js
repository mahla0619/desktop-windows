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
// function applyAvatar(container, name) {
//     const avatar = container.querySelector('.avatar');
//     if (avatar && name) {
//         avatar.textContent = name.charAt(0).toUpperCase();
//         if (!avatar.style.background) {
//             avatar.style.background = getColorFromName(name);
//         }
//     }
// }
function applyAvatar(container, name) {
    const avatar = container.querySelector(".avatar");

    if (avatar && name) {
        avatar.textContent = name.charAt(0).toUpperCase();

        // هر بار رنگ جدید بر اساس اسم محاسبه شود
        avatar.style.background = getColorFromName(name);
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


// چت‌ها
const chatItems = document.querySelectorAll(".chats-list .chat-content");

const chatScreen = document.querySelector("#chat-screen");

const chatName = document.querySelector("#chat-name");
const chatStatus = document.querySelector("#chat-status");

const chatData = {
  saved: {
    name: "Saved Messages",
    status: "160 messages",
  },

  zahra: {
    name: "zahra",
    status: "last seen recently",
  },

  rha: {
    name: "rha",
    status: "last seen recently",
  },

  zyy: {
    name: "zyy",
    status: "last seen recently",
  },

  my: {
    name: "my",
    status: "is typing...",
  },

  gym: {
    name: "Gym",
    status: "20 member",
  },

  ekip: {
    name: "ekip",
    status: "3 member",
  },
};


chatItems.forEach(function (chat) {

  chat.addEventListener("click", function () {

    const chatId = chat.dataset.chatId;

    const selectedChat = chatData[chatId];

    chatName.textContent = selectedChat.name;

    chatStatus.textContent = selectedChat.status;

    // ساخت آواتار برای ChatScreen
    applyAvatar(
      document.querySelector("#chat-screen .profile"),
      selectedChat.name
    );

    chatScreen.classList.remove("hide");

  });

});


const messageInput = document.querySelector("#message-input");
const sendButton = document.querySelector("#send-button");
const messageMain = document.querySelector(".ChatScreen .main");
function sendMessage() {

    const text = messageInput.value.trim();

    if (text === "") {
        return;
    }

    const message = document.createElement("div");

    message.classList.add("message");

    message.textContent = text;

    messageMain.appendChild(message);

    messageInput.value = "";
}
