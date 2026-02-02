const birthCard = document.getElementById("birthCard");
const birthdayInput = document.getElementById("birthday");
const saveBtn = document.getElementById("saveBirthday");
const refreshBtn = document.getElementById("refresh");
const auraText = document.getElementById("auraText");

const resultBox = document.getElementById("result");
const fortuneStars = document.getElementById("fortune-stars");
const luckyItemEl = document.getElementById("lucky-item");
const luckyColorEl = document.getElementById("lucky-color");

const luckyItems = [
  "鍵","ノート","腕時計","白い紙","イヤホン",
  "コーヒー","ハンカチ","スマホケース","本","ペン"
];

const luckyColors = [
  "白","青","緑","紫","金","黒","ピンク"
];

function getSeed(birthday) {
  const today = new Date().toISOString().slice(0, 10);
  const seedStr = birthday + today;
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

saveBtn.addEventListener("click", () => {
  if (!birthdayInput.value) return;

  localStorage.setItem("aura-birthday", birthdayInput.value);
  birthCard.classList.add("removed");
  auraText.textContent =
    "準備が整いました。今日のサインを受け取ってください 🌙";
});

if (localStorage.getItem("aura-birthday")) {
  birthCard.classList.add("removed");
}

refreshBtn.addEventListener("click", () => {
  const birthday = localStorage.getItem("aura-birthday");
  if (!birthday) return;

  const seed = getSeed(birthday);
  const stars = (seed % 5) + 1;

  fortuneStars.textContent = "★".repeat(stars);
  luckyItemEl.textContent = luckyItems[seed % luckyItems.length];
  luckyColorEl.textContent = luckyColors[seed % luckyColors.length];

  resultBox.classList.remove("hidden");
});