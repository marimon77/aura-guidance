const auraList = [
  "今日は無理に進まなくていい日。整えることで流れが戻ります。",
  "直感を信じて大丈夫。小さな選択があとで効いてきます。",
  "少し距離を取ることで見えるものがありそう。",
  "今日は受け取る側に回って。与えるのはまた今度。",
  "焦らなくていい。今は準備のタイミング。",
  "心が軽くなる方を選んで正解。",
  "静かな時間がヒントをくれそう。"
];

function getTodayAura() {
  const today = new Date().toDateString();
  let hash = 0;

  for (let i = 0; i < today.length; i++) {
    hash += today.charCodeAt(i);
  }

  return auraList[hash % auraList.length];
}

const auraText = document.getElementById("aura-text");
const refreshBtn = document.getElementById("refresh");

function showAura() {
  auraText.textContent = getTodayAura();
}

refreshBtn.addEventListener("click", showAura);

showAura();