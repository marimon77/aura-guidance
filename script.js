// ===== 初期確認 =====
console.log("script loaded");

// ===== 要素取得 =====
const birthdayInput = document.getElementById("birthday");
const saveBtn = document.getElementById("saveBirthday");
const refreshBtn = document.getElementById("refresh");
const resultBox = document.getElementById("result");

const moneyStarsEl = document.getElementById("money-stars");
const moneyMessageEl = document.getElementById("money-message");
const luckyItemEl = document.getElementById("lucky-item");
const luckyColorEl = document.getElementById("lucky-color");

// ===== 保存 =====
saveBtn.addEventListener("click", () => {
  if (!birthdayInput.value) return;
  localStorage.setItem("aura-birthday", birthdayInput.value);
  alert("誕生日を保存しました");
});

// ===== 共通関数 =====
function getSeed(str) {
  return str.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

function getType(day) {
  if ([1,6,11,16,21,26].includes(day)) return "流れ型";
  if ([2,7,12,17,22,27].includes(day)) return "積み上げ型";
  if ([3,8,13,18,23,28].includes(day)) return "引き寄せ型";
  if ([4,9,14,19,24,29].includes(day)) return "突破型";
  return "守備型";
}

// ===== データ =====
const luckyItems = ["財布", "腕時計", "メモ帳", "鍵", "スマホケース"];
const luckyColors = ["ゴールド", "ネイビー", "グリーン", "ブラウン", "ホワイト"];

const typeTraits = {
  流れ型: "タイミングで結果が変わる性質",
  積み上げ型: "継続で金運が育つ性質",
  引き寄せ型: "人との関係でお金が動く性質",
  突破型: "行動量が収入に直結する性質",
  守備型: "管理と安定で増やす性質"
};

const reasonTexts = {
  流れ型: "今は外部の流れが切り替わる時期に入っています。",
  積み上げ型: "これまでの行動の結果が表に出やすい時期です。",
  引き寄せ型: "人間関係の影響が金運に直結しやすい流れです。",
  突破型: "決断と行動が結果を左右する局面です。",
  守備型: "足元を整えることで運が安定する時期です。"
};

const actionTexts = {
  流れ型: "即決を避け、一度間を置くこと",
  積み上げ型: "小さな節約や確認を怠らないこと",
  引き寄せ型: "人の意見を冷静に取捨選択すること",
  突破型: "勢い任せの出費を控えること",
  守備型: "守りすぎず、必要な投資を見極めること"
};

const relationTexts = [
  "年上で堅実な人",
  "久しぶりに連絡を取る人",
  "仕事が早い人",
  "無駄を嫌う人",
  "落ち着いた考え方の人"
];

// ===== 課金フラグ（今は仮）=====
const isPremium = true; // ← false にすると無料表示

// ===== 実行 =====
refreshBtn.addEventListener("click", () => {
  const birthday = localStorage.getItem("aura-birthday");
  if (!birthday) {
    alert("誕生日を入力してください");
    return;
  }

  const day = parseInt(birthday.split("-")[2], 10);
  const seed = getSeed(birthday + new Date().toDateString());
  const stars = (seed % 5) + 1;
  const type = getType(day);

  moneyStarsEl.textContent = "★".repeat(stars);
  luckyItemEl.textContent = luckyItems[seed % luckyItems.length];
  luckyColorEl.textContent = luckyColors[seed % luckyColors.length];

  if (!isPremium) {
    moneyMessageEl.textContent =
      `あなたは【${type}】タイプ。\n今日は金運が動きやすい一日です。`;
  } else {
    moneyMessageEl.textContent =
`あなたは【${type}】の金運タイプ。
これは生まれ持つ「${typeTraits[type]}」によるものです。

${reasonTexts[type]}

そのため今日は、
「${actionTexts[type]}」ことで
お金の流れが安定しやすくなります。

特に今日は、
${relationTexts[seed % relationTexts.length]}と縁があります。`;
  }

  resultBox.classList.remove("hidden");
});