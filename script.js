const birthCard = document.getElementById("birthCard");
const birthdayInput = document.getElementById("birthday");
const saveBtn = document.getElementById("saveBirthday");
const refreshBtn = document.getElementById("refresh");
const auraText = document.getElementById("auraText");

const resultBox = document.getElementById("result");
const luckyItemEl = document.getElementById("lucky-item");
const luckyColorEl = document.getElementById("lucky-color");

const tabs = document.querySelectorAll(".tab");
const blocks = document.querySelectorAll(".fortune-block");

const luckyItems = ["鍵","ノート","腕時計","ハンカチ","イヤホン"];
const luckyColors = ["白","青","緑","金","紫"];

const fortunes = {
  love: {
    stars: document.getElementById("love-stars"),
    text: document.getElementById("love-message"),
    messages: [
      "自然体でいることが魅力になります。",
      "相手の気持ちを尊重すると流れが良くなります。"
    ]
  },
  work: {
    stars: document.getElementById("work-stars"),
    text: document.getElementById("work-message"),
    messages: [
      "確認を丁寧にすると評価が上がります。",
      "落ち着いた対応が鍵になります。"
    ]
  },
  money: {
    stars: document.getElementById("money-stars"),
    text: document.getElementById("money-message"),
    messages: [
      "無駄遣いを控えると安定します。",
      "小さな得がありそうです。"
    ]
  },
  health: {
    stars: document.getElementById("health-stars"),
    text: document.getElementById("health-message"),
    messages: [
      "しっかり休むことを意識して。",
      "軽く体を動かすと気分転換になります。"
    ]
  }
};

function getSeed(birthday) {
  const today = new Date().toISOString().slice(0, 10);
  let str = birthday + today;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

saveBtn.addEventListener("click", () => {
  if (!birthdayInput.value) return;
  localStorage.setItem("aura-birthday", birthdayInput.value);
  birthCard.classList.add("removed");
  auraText.textContent = "準備が整いました。今日のサインを受け取ってください 🌙";
});

if (localStorage.getItem("aura-birthday")) {
  birthCard.classList.add("removed");
}

refreshBtn.addEventListener("click", () => {
  const birthday = localStorage.getItem("aura-birthday");
  if (!birthday) return;

  const seed = getSeed(birthday);
  let i = 0;

  for (const key in fortunes) {
    const stars = ((seed + i * 3) % 5) + 1;
    fortunes[key].stars.textContent = "★".repeat(stars);
    fortunes[key].text.textContent =
      fortunes[key].messages[seed % fortunes[key].messages.length];
    i++;
  }

  luckyItemEl.textContent = luckyItems[seed % luckyItems.length];
  luckyColorEl.textContent = luckyColors[seed % luckyColors.length];

  resultBox.classList.remove("hidden");

  // 初期表示
  blocks.forEach(b => b.classList.remove("active"));
  document.querySelector('[data-type="love"]').classList.add("active");
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    blocks.forEach(block => {
      block.classList.remove("active");
      if (block.dataset.type === tab.dataset.tab) {
        block.classList.add("active");
      }
    });
  });
});