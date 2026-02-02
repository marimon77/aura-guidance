// 星座判定
function getZodiac(month, day) {
  const zodiac = [
    ["山羊座", 1, 20], ["水瓶座", 2, 19], ["魚座", 3, 20],
    ["牡羊座", 4, 20], ["牡牛座", 5, 20], ["双子座", 6, 21],
    ["蟹座", 7, 22], ["獅子座", 8, 22], ["乙女座", 9, 22],
    ["天秤座",10,23], ["蠍座",11,22], ["射手座",12,21],
    ["山羊座",12,31]
  ];
  for (let i = 0; i < zodiac.length; i++) {
    if (month === zodiac[i][1] && day <= zodiac[i][2]) {
      return zodiac[i][0];
    }
  }
  return "山羊座";
}

// 星座別メッセージ
const auraByZodiac = {
  "牡羊座": ["今日は直感を信じて動いて大丈夫。"],
  "牡牛座": ["焦らず、心地よさを優先して。"],
  "双子座": ["小さな会話がヒントになりそう。"],
  "蟹座": ["感情を守る選択をして正解。"],
  "獅子座": ["自分を信じて前に出ていい日。"],
  "乙女座": ["整えることで流れが良くなる。"],
  "天秤座": ["無理に決めなくて大丈夫。"],
  "蠍座": ["深く考えすぎなくていい。"],
  "射手座": ["視野を広げるとチャンスが見える。"],
  "山羊座": ["今は積み重ねを信じて。"],
  "水瓶座": ["あなたらしさが鍵になる日。"],
  "魚座": ["静かな時間が答えをくれる。"]
};

const auraText = document.getElementById("aura-text");
const refreshBtn = document.getElementById("refresh");
const saveBtn = document.getElementById("save");
const birthdayInput = document.getElementById("birthday");
const birthCard = document.getElementById("birth-card");

// 誕生日保存
saveBtn.addEventListener("click", () => {
  if (!birthdayInput.value) return;
  localStorage.setItem("aura-birthday", birthdayInput.value);
  birthCard.style.display = "none";
  auraText.textContent = "準備が整いました。今日のサインを受け取ってください 🌙";
});

// AURA生成
function getAura() {
  const birthday = localStorage.getItem("aura-birthday");
  if (!birthday) return "まだ印が設定されていません";

  const date = new Date(birthday);
  const zodiac = getZodiac(date.getMonth() + 1, date.getDate());

  const today = new Date().toDateString();
  let hash = 0;
  for (let c of zodiac + today) hash += c.charCodeAt(0);

  const list = auraByZodiac[zodiac];
  return `${zodiac}のあなたへ：${list[hash % list.length]}`;
}

// ボタン
refreshBtn.addEventListener("click", () => {
  auraText.textContent = getAura();
});

// 初期制御
if (localStorage.getItem("aura-
    birthCard.remove();
}