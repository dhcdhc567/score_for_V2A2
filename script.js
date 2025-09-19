// ====== 视频对列表 ======
const videoPairs = [
  ['kling/46_纪实摄影风格_一对情侣正在共同骑行一辆双人自行车_男生在前_女生.mp4', 'ours/46_纪实摄影风格_一对情侣正在共同骑行一辆双人自行车_男生在前_女生.mp4'],
  ['kling/47_纪实摄影风格_一杯新鲜果汁缓缓倒入浓稠酸奶中_果汁与酸奶在杯中交.mp4', 'ours/47_纪实摄影风格_一杯新鲜果汁缓缓倒入浓稠酸奶中_果汁与酸奶在杯中交.mp4'],
  ['kling/48_纪实摄影风格_一根细长的针缓缓地压向一个充气床垫的表面_针尖逐渐.mp4', 'ours/48_纪实摄影风格_一根细长的针缓缓地压向一个充气床垫的表面_针尖逐渐.mp4'],
  ['kling/49_纪实摄影风格_一位中年男子正蹲在地上_细心地帮另一位年轻人擦拭鞋.mp4', 'ours/49_纪实摄影风格_一位中年男子正蹲在地上_细心地帮另一位年轻人擦拭鞋.mp4'],
  ['kling/4_纪实摄影风格_一根细小的燃烧木棍被扔进一堆干燥的稻草中_木棍火焰.mp4', 'ours/4_纪实摄影风格_一根细小的燃烧木棍被扔进一堆干燥的稻草中_木棍火焰.mp4'],
  ['kling/50_纪实摄影风格_镜头以顺时针方向环绕拍摄一台笔记本电脑_电脑放置在.mp4', 'ours/50_纪实摄影风格_镜头以顺时针方向环绕拍摄一台笔记本电脑_电脑放置在.mp4'],
  ['kling/51_史诗战争场景_一台巨大的古代投石机正全力运转_发射出一块巨大的石.mp4', 'ours/51_史诗战争场景_一台巨大的古代投石机正全力运转_发射出一块巨大的石.mp4'],
  ['kling/52_现代简约风格室内场景_一款设计感十足的香薰机正静静地放置在木质桌.mp4', 'ours/52_现代简约风格室内场景_一款设计感十足的香薰机正静静地放置在木质桌.mp4'],
  ['kling/53_纪实摄影风格_一双强壮有力的手正在揉面团_手上的肌肉线条清晰可见.mp4', 'ours/53_纪实摄影风格_一双强壮有力的手正在揉面团_手上的肌肉线条清晰可见.mp4'],
  ['kling/54_纪实摄影风格_一个阳光明媚的下午_两个年轻人在公园的绿草坪上玩耍.mp4', 'ours/54_纪实摄影风格_一个阳光明媚的下午_两个年轻人在公园的绿草坪上玩耍.mp4'],
  ['kling/55_镜头环绕旋转_捕捉到一台复古点唱机的全貌_点唱机外壳光滑_金属光.mp4', 'ours/55_镜头环绕旋转_捕捉到一台复古点唱机的全貌_点唱机外壳光滑_金属光.mp4'],
  ['kling/56_纪实摄影风格_一束明亮的阳光穿透一颗晶莹剔透的玻璃钻石_钻石在光.mp4', 'ours/56_纪实摄影风格_一束明亮的阳光穿透一颗晶莹剔透的玻璃钻石_钻石在光.mp4'],
  ['kling/57_镜头环绕拍摄_围绕着一个戴着头盔的人物旋转_头盔设计独特_表面有.mp4', 'ours/57_镜头环绕拍摄_围绕着一个戴着头盔的人物旋转_头盔设计独特_表面有.mp4'],
  ['kling/58_一台银色笔记本电脑放置在木质桌面上_镜头从左向右缓缓移动_展示出.mp4', 'ours/58_一台银色笔记本电脑放置在木质桌面上_镜头从左向右缓缓移动_展示出.mp4'],
  ['kling/59_现实主义摄影风格_一位穿着休闲装的中年男子正在享用三明治_突然放.mp4', 'ours/59_现实主义摄影风格_一位穿着休闲装的中年男子正在享用三明治_突然放.mp4'],
  ['kling/5_纪实摄影风格_镜头缓缓拉远_展现神秘的马丘比丘全景_古老的石砌建.mp4', 'ours/5_纪实摄影风格_镜头缓缓拉远_展现神秘的马丘比丘全景_古老的石砌建.mp4'],
  ['kling/60_纪实摄影风格_镜头固定拍摄马丘比丘的静态画面_古老的石砌建筑群在.mp4', 'ours/60_纪实摄影风格_镜头固定拍摄马丘比丘的静态画面_古老的石砌建筑群在.mp4'],
  ['kling/61_超现实主义艺术风格_一只拥有狮子腿的鲨鱼在海岸线上缓缓行走_仿佛.mp4', 'ours/61_超现实主义艺术风格_一只拥有狮子腿的鲨鱼在海岸线上缓缓行走_仿佛.mp4'],
  ['kling/62_纪实摄影风格_一位穿着深色西装的中年男子弯腰捡起地上一顶黑色礼帽.mp4', 'ours/62_纪实摄影风格_一位穿着深色西装的中年男子弯腰捡起地上一顶黑色礼帽.mp4'],
  ['kling/63_超现实主义艺术风格_一只拥有鲸鱼身体_袋鼠腿和火烈鸟尾巴的长颈鹿.mp4', 'ours/63_超现实主义艺术风格_一只拥有鲸鱼身体_袋鼠腿和火烈鸟尾巴的长颈鹿.mp4'],
];

let current = 0;
let results = [];
const ratingLabels = ["差","较差","一般","好","很好"];
let randomizedPairs = []; // 存每组原始顺序 + swap 标记

// 创建评分下拉选项
function createDropdown(selectId) {
  const select = document.getElementById(selectId);
  select.innerHTML = '<option value="">Select</option>';
  for (let i = 1; i <= 5; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${i} (${ratingLabels[i-1]})`;
    select.appendChild(opt);
  }
}

// 初始化每组随机左右顺序
function initRandomizedPairs() {
  randomizedPairs = videoPairs.map(pair => ({
    original: pair,
    swap: Math.random() < 0.5 // true 表示交换左右
  }));
}

// 加载题目
function loadQuestion(index) {
  const pairObj = randomizedPairs[index];

  // 根据 swap 决定左右显示
  const leftVideo  = pairObj.swap ? pairObj.original[1] : pairObj.original[0];
  const rightVideo = pairObj.swap ? pairObj.original[0] : pairObj.original[1];

  document.getElementById("question-counter").textContent = `Question ${index+1} / ${videoPairs.length}`;
  document.getElementById("videoA").src = leftVideo;
  document.getElementById("videoB").src = rightVideo;

  // 清空选择
  document.querySelectorAll('input[name="preferredAudio"]').forEach(el => el.checked = false);
  ["qualityA","semanticA","temporalA","qualityB","semanticB","temporalB"].forEach(id => {
    document.getElementById(id).value = "";
  });

  // 恢复答案
  if (results[index]) {
    const prev = results[index];
    document.querySelector(`input[name="preferredAudio"][value="${prev.preferredAudio}"]`).checked = true;
    document.getElementById("qualityA").value = prev.qualityLeft;
    document.getElementById("semanticA").value = prev.semanticLeft;
    document.getElementById("temporalA").value = prev.temporalLeft;
    document.getElementById("qualityB").value = prev.qualityRight;
    document.getElementById("semanticB").value = prev.semanticRight;
    document.getElementById("temporalB").value = prev.temporalRight;
  }
}

window.onload = () => {
  ["qualityA","semanticA","temporalA","qualityB","semanticB","temporalB"].forEach(createDropdown);

  document.getElementById("startTask").addEventListener("click", () => {
    document.getElementById("cover-page").style.display = 'none';
    document.getElementById("rating-task").style.display = 'block';
    current = 0;
    results = [];
    initRandomizedPairs();
    loadQuestion(current);
  });

  document.getElementById("submitBtn").addEventListener("click", () => {
    const preferred = document.querySelector('input[name="preferredAudio"]:checked')?.value;
    if (!preferred) { alert("Select which video's audio is more suitable."); return; }

    // 获取左右评分
    const qualityLeft = document.getElementById("qualityA").value;
    const semanticLeft = document.getElementById("semanticA").value;
    const temporalLeft = document.getElementById("temporalA").value;
    const qualityRight = document.getElementById("qualityB").value;
    const semanticRight = document.getElementById("semanticB").value;
    const temporalRight = document.getElementById("temporalB").value;

    if (!qualityLeft || !semanticLeft || !temporalLeft || !qualityRight || !semanticRight || !temporalRight) {
      alert("Please rate all dimensions for both videos."); return;
    }

    const pairObj = randomizedPairs[current];
    const leftVideo  = pairObj.swap ? pairObj.original[1] : pairObj.original[0];
    const rightVideo = pairObj.swap ? pairObj.original[0] : pairObj.original[1];

    results[current] = {
      question: current + 1,
      leftVideo,
      rightVideo,
      originalVideoA: pairObj.original[0],
      originalVideoB: pairObj.original[1],
      preferredAudio: preferred,
      qualityLeft, semanticLeft, temporalLeft,
      qualityRight, semanticRight, temporalRight,
      timestamp: new Date().toISOString()
    };

    current++;
    if (current < videoPairs.length) loadQuestion(current);
    else {
      document.getElementById("rating-task").style.display = 'none';
      document.getElementById("complete").style.display = 'block';
    }
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    if (current > 0) { current--; loadQuestion(current); }
  });
};

// 下载 CSV
function downloadCSV() {
  if (!results.length) { alert("No results."); return; }

  const fields = [
    "question", "leftVideo", "rightVideo", "originalVideoA", "originalVideoB",
    "preferredAudio",
    "qualityLeft","semanticLeft","temporalLeft",
    "qualityRight","semanticRight","temporalRight",
    "timestamp"
  ];

  const header = fields.join(",");
  const lines = results.map(r => fields.map(f => `"${r[f]}"`).join(","));
  const csv = [header, ...lines].join("\n");

  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "video_audio_evaluation.csv";
  a.click();
}