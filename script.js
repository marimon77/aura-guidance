// AURAメッセージ一覧（30個）
const auraList = [
  "焦らなくていい。止まっているように見えて、ちゃんと進んでる。",
  "今日は結果よりも、整えることが大事な日。",
  "今は準備のタイミング。動けない自分を責めなくていい。",
  "少し遠回りに見えても、その道は無駄じゃない。",
  "今日は心が軽くなる方を選んで正解。",
  "無理に答えを出さなくていい日。",
  "今感じている違和感は、ちゃんとしたサイン。",
  "誰かと比べなくていい。流れは人それぞれ。",
  "今日は受け取る側に回って。",
  "静かな時間が、次のヒントを連れてきそう。",
  "今は積み上げより、余白を作る日。",
  "思ったより、状況は悪くない。",
  "今日は立ち止まることで見えるものがある。",
  "小さな安心を優先して大丈夫。",
  "今の迷いは、必要なプロセス。",
  "今日は自分に優しくしていい日。",
  "無理に決めなくても、流れは続いてる。",
  "今日は直感を信じて問題なさそう。",
  "心が疲れているなら、休むのが正解。",
  "今日は“しない選択”も大切。",
  "焦りは手放していい。",
  "今のペースで十分。",
  "今日は外より、内側を整える日。",
  "答えはもう半分、見えてきてる。",
  "今日は安心できる場所を選んで。",
  "無理に前向きにならなくていい。",
  "今は静かに力をためている最中。",
  "今日は流れに逆らわない方がうまくいく。",
  "小さな違和感を大切に。",
  "今日は深呼吸から始めてみて。"
];

const auraText = document.getElementById("aura-text");
const refreshBtn = document.getElementById("refresh");
const birthdayInput = document.getElementById("birthday");
const saveBtn = document.getElementById("save");
const birthdayArea = document.getElementById("birthday-area");

// 誕生日保存
saveBtn.addEventListener("click", () => {
  const birthday = birthdayInput.value;
  if (!birthday) return;
  localStorage.setItem("aura-birthday", birthday);
  birthdayArea.style.display = "none";
});

// 個人化AURA生成
function getPersonalAura() {
  const birthday = localStorage.getItem("aura-birthday") || "";
  const today = new Date().toDateString();
  let hash = 0;
  const base = birthday + today;

  for (let i = 0; i < base.length; i++) {
    hash += base.charCodeAt(i);
  }

  return auraList[hash % auraList.length];
}

// ボタン押下時
refreshBtn.addEventListener("click", () => {
  auraText.textContent = getPersonalAura();
});

// 初期表示制御
if (localStorage.getItem("aura-birthday")) {
  birthdayArea.style.display = "none";
}