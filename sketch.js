let spritesheet;
let frames = [];
let spritesheet2;
let frames2 = [];
let walkSpritesheet;
let walkFrames = [];
let walkSpritesheet2;
let walkFrames2 = [];
let jumpSpritesheet2;
let jumpFrames2 = [];
let pushSpritesheet2;
let pushFrames2 = [];
let jumpSpritesheet;
let jumpFrames = [];
let pushSpritesheet;
let pushFrames = [];
let projectileSpritesheet;
let projectileFrames = [];
let spritesheet3;
let frames3 = [];
let dieSpritesheet3;
let dieFrames3 = [];
let spritesheet4;
let frames4 = [];
let hitSpritesheet4;
let hitFrames4 = [];
let spritesheet5;
let frames5 = [];
let runSpritesheet5;
let runFrames5 = [];
let bgImg;

// 角色動畫的設定
const spriteWidth = 1246; // 精靈圖總寬度 (根據您的要求更新)
const spriteHeight = 196; // 精靈圖總高度
const numFrames = 9;      // 動畫中的總幀數 (根據您的要求更新)

const spriteWidth2 = 193; // 第二個角色的精靈圖總寬度
const spriteHeight2 = 41; // 第二個角色的精靈圖總高度
const numFrames2 = 6;     // 第二個角色的總幀數

const walkSpriteWidth2 = 292; // 第二個角色的走路精靈圖總寬度
const walkSpriteHeight2 = 34; // 第二個角色的走路精靈圖總高度
const walkNumFrames2 = 9;     // 第二個角色的走路動畫總幀數

const jumpSpriteWidth2 = 253; // 第二個角色的跳躍精靈圖總寬度
const jumpSpriteHeight2 = 42; // 第二個角色的跳躍精靈圖總高度
const jumpNumFrames2 = 6;     // 第二個角色的跳躍動畫總幀數

const pushSpriteWidth2 = 255; // 第二個角色的發功精靈圖總寬度
const pushSpriteHeight2 = 52; // 第二個角色的發功精靈圖總高度
const pushNumFrames2 = 5;     // 第二個角色的發功動畫總幀數

const walkSpriteWidth = 1107; // 走路精靈圖總寬度
const walkSpriteHeight = 197; // 走路精靈圖總高度
const walkNumFrames = 8;      // 走路動畫總幀數

const jumpSpriteWidth = 1228; // 跳躍精靈圖總寬度
const jumpSpriteHeight = 182; // 跳躍精靈圖總高度
const jumpNumFrames = 9;      // 跳躍動畫總幀數

const pushSpriteWidth = 4015; // 發功精靈圖總寬度
const pushSpriteHeight = 248; // 發功精靈圖總高度
const pushNumFrames = 12;     // 發功動畫總幀數

const projectileSpriteWidth = 740; // 光波精靈圖總寬度
const projectileSpriteHeight = 19; // 光波精靈圖總高度
const projectileNumFrames = 5;     // 光波動畫總幀數

const spriteWidth3 = 115;
const spriteHeight3 = 33;
const numFrames3 = 5;

const dieSpriteWidth3 = 143; // 倒地精靈圖總寬度
const dieSpriteHeight3 = 31; // 倒地精靈圖總高度
const dieNumFrames3 = 4;     // 倒地動畫總幀數

const spriteWidth4 = 130; // 第四個角色的精靈圖總寬度
const spriteHeight4 = 31; // 第四個角色的精靈圖總高度
const numFrames4 = 5;     // 第四個角色的總幀數

const hitSpriteWidth4 = 83; // 第四個角色的受傷精靈圖總寬度
const hitSpriteHeight4 = 30; // 第四個角色的受傷精靈圖總高度
const hitNumFrames4 = 3;     // 第四個角色的受傷動畫總幀數

const spriteWidth5 = 170; // 第五個角色的精靈圖總寬度
const spriteHeight5 = 32; // 第五個角色的精靈圖總高度
const numFrames5 = 5;     // 第五個角色的總幀數

const runSpriteWidth5 = 259; // 第五個角色的跑步精靈圖總寬度
const runSpriteHeight5 = 33; // 第五個角色的跑步精靈圖總高度
const runNumFrames5 = 8;     // 第五個角色的跑步動畫總幀數

let frameWidth; // 單一幀的寬度
let frameWidth2; // 第二個角色單一幀的寬度
let walkFrameWidth2; // 第二個角色走路動畫單一幀的寬度
let jumpFrameWidth2; // 第二個角色跳躍動畫單一幀的寬度
let pushFrameWidth2; // 第二個角色發功動畫單一幀的寬度
let walkFrameWidth; // 走路動畫單一幀的寬度
let jumpFrameWidth; // 跳躍動畫單一幀的寬度
let pushFrameWidth; // 發功動畫單一幀的寬度
let projectileFrameWidth; // 光波動畫單一幀的寬度

let frameWidth3; // 第三個角色單一幀的寬度
let dieFrameWidth3; // 第三個角色倒地動畫單一幀的寬度
let frameWidth4; // 第四個角色單一幀的寬度
let hitFrameWidth4; // 第四個角色受傷動畫單一幀的寬度
let frameWidth5; // 第五個角色單一幀的寬度
let runFrameWidth5; // 第五個角色跑步動畫單一幀的寬度
let char1X; // 第一個角色的 X 座標
let char2X; // 第二個角色的 X 座標
let isJumping2 = false; // 第二個角色是否正在跳躍
let isPushing2 = false; // 第二個角色是否正在發功
let pushStartFrame2 = 0; // 第二個角色發功開始時的 frameCount
let jumpStartFrame2 = 0; // 第二個角色跳躍開始時的 frameCount
let char2Dir = 1; // 第二個角色的方向
let char1Dir = 1; // 第一個角色的方向 (1 為向右, -1 為向左)
let isJumping = false; // 是否正在跳躍
let jumpStartFrame = 0; // 跳躍開始時的 frameCount
let isPushing = false; // 是否正在發功
let pushStartFrame = 0; // 發功開始時的 frameCount

let projectiles = []; // 儲存所有光波的陣列
let msg3 = "需要我解答嗎?"; // 角色3的文字訊息
let msg4 = "需要我解答嗎?"; // 角色4的文字訊息
let inputBox; // 輸入框
let isHit3 = false; // 角色3是否被擊中
let hitStartFrame3 = 0; // 角色3被擊中時的 frameCount
let isHit4 = false; // 角色4是否被擊中
let hitStartFrame4 = 0; // 角色4被擊中時的 frameCount
let table; // 儲存 CSV 資料的表格
let currentAnswer = ""; // 目前題目的正確答案
let currentCorrectMsg = ""; // 目前題目的答對回饋
let currentWrongMsg = ""; // 目前題目的答錯回饋
let currentHint = ""; // 目前題目的提示
let currentQuestionIndex = -1; // 目前題目的索引，用於避免重複出題
let mathTable; // 儲存數學測驗 CSV 資料的表格
let currentMathAnswer = ""; // 角色4題目的正確答案
let currentMathCorrectMsg = ""; // 角色4題目的答對回饋
let currentMathWrongMsg = ""; // 角色4題目的答錯回饋
let currentMathHint = ""; // 角色4題目的提示
let currentMathQuestionIndex = -1; // 角色4題目的索引
let isChar4QuizActive = false; // 角色4是否正在進行測驗


function preload() {
  // 載入精靈圖，請確保 'stop.png' 檔案與 sketch.js 在同一個資料夾
  // 根據您提供的檔案路徑，檔名應為 'stop.png' 或類似名稱
  spritesheet = loadImage('1/stop/stop.png');
  spritesheet2 = loadImage('2/stop/stop.png');
  walkSpritesheet2 = loadImage('2/walk/walk.png');
  jumpSpritesheet2 = loadImage('2/jump/jump.png');
  pushSpritesheet2 = loadImage('2/push/push.png');
  walkSpritesheet = loadImage('1/walk/walk.png');
  jumpSpritesheet = loadImage('1/jump/jump.png');
  pushSpritesheet = loadImage('1/push/push.png');
  projectileSpritesheet = loadImage('1/光/光.png');
  spritesheet3 = loadImage('3/stop/stop.png');
  dieSpritesheet3 = loadImage('3/倒地/倒地.png');
  spritesheet4 = loadImage('4/stop/stop.png');
  hitSpritesheet4 = loadImage('4/hit/hit.png');
  spritesheet5 = loadImage('5/stop/stop.png');
  runSpritesheet5 = loadImage('5/run/run.png');
  bgImg = loadImage('背景/背景/背景.png');
  table = loadTable('questions.csv', 'csv', 'header'); // 載入 CSV 測驗卷
  mathTable = loadTable('math_questions.csv', 'csv', 'header'); // 載入數學測驗卷
}

function setup() {
  // 建立一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);

  // 計算單一幀的寬度
  // 注意：總寬度 1246 除以 9 幀，每幀寬度約為 138.44。
  // p5.js 的 get() 函數在處理非整數座標時會自動取整，這可能會導致圖像邊緣出現細微的切割不準確，但通常效果可以接受。
  frameWidth = spriteWidth / numFrames;
  frameWidth2 = spriteWidth2 / numFrames2;
  walkFrameWidth2 = walkSpriteWidth2 / walkNumFrames2;
  jumpFrameWidth2 = jumpSpriteWidth2 / jumpNumFrames2;
  pushFrameWidth2 = pushSpriteWidth2 / pushNumFrames2;
  walkFrameWidth = walkSpriteWidth / walkNumFrames;
  jumpFrameWidth = jumpSpriteWidth / jumpNumFrames;
  pushFrameWidth = pushSpriteWidth / pushNumFrames;
  projectileFrameWidth = projectileSpriteWidth / projectileNumFrames;
  frameWidth3 = spriteWidth3 / numFrames3;
  dieFrameWidth3 = dieSpriteWidth3 / dieNumFrames3;
  frameWidth4 = spriteWidth4 / numFrames4;
  hitFrameWidth4 = hitSpriteWidth4 / hitNumFrames4;
  frameWidth5 = spriteWidth5 / numFrames5;
  runFrameWidth5 = runSpriteWidth5 / runNumFrames5;

  // 設定動畫的播放速度為每秒 10 幀
  frameRate(10);

  // 從 spritesheet 中切割出每一幀並存入 frames 陣列
  for (let i = 0; i < numFrames; i++) {
    let frame = spritesheet.get(i * frameWidth, 0, frameWidth, spriteHeight);
    frames.push(frame);
  }

  // 處理第二個角色的影格
  for (let i = 0; i < numFrames2; i++) {
    let frame = spritesheet2.get(i * frameWidth2, 0, frameWidth2, spriteHeight2);
    frames2.push(frame);
  }

  // 處理第二個角色的走路動畫影格
  for (let i = 0; i < walkNumFrames2; i++) {
    let frame = walkSpritesheet2.get(i * walkFrameWidth2, 0, walkFrameWidth2, walkSpriteHeight2);
    walkFrames2.push(frame);
  }

  // 處理第二個角色的跳躍動畫影格
  for (let i = 0; i < jumpNumFrames2; i++) {
    let frame = jumpSpritesheet2.get(i * jumpFrameWidth2, 0, jumpFrameWidth2, jumpSpriteHeight2);
    jumpFrames2.push(frame);
  }

  // 處理第二個角色的發功動畫影格
  for (let i = 0; i < pushNumFrames2; i++) {
    let frame = pushSpritesheet2.get(i * pushFrameWidth2, 0, pushFrameWidth2, pushSpriteHeight2);
    pushFrames2.push(frame);
  }

  // 處理走路動畫的影格
  for (let i = 0; i < walkNumFrames; i++) {
    let frame = walkSpritesheet.get(i * walkFrameWidth, 0, walkFrameWidth, walkSpriteHeight);
    walkFrames.push(frame);
  }

  // 處理跳躍動畫的影格
  for (let i = 0; i < jumpNumFrames; i++) {
    let frame = jumpSpritesheet.get(i * jumpFrameWidth, 0, jumpFrameWidth, jumpSpriteHeight);
    jumpFrames.push(frame);
  }

  // 處理發功動畫的影格
  for (let i = 0; i < pushNumFrames; i++) {
    let frame = pushSpritesheet.get(i * pushFrameWidth, 0, pushFrameWidth, pushSpriteHeight);
    pushFrames.push(frame);
  }

  // 處理光波動畫的影格
  for (let i = 0; i < projectileNumFrames; i++) {
    let frame = projectileSpritesheet.get(i * projectileFrameWidth, 0, projectileFrameWidth, projectileSpriteHeight);
    projectileFrames.push(frame);
  }

  // 處理第三個角色的影格
  for (let i = 0; i < numFrames3; i++) {
    let frame = spritesheet3.get(i * frameWidth3, 0, frameWidth3, spriteHeight3);
    frames3.push(frame);
  }

  // 處理第三個角色的倒地動畫影格
  for (let i = 0; i < dieNumFrames3; i++) {
    let frame = dieSpritesheet3.get(i * dieFrameWidth3, 0, dieFrameWidth3, dieSpriteHeight3);
    dieFrames3.push(frame);
  }

  // 處理第四個角色的影格
  for (let i = 0; i < numFrames4; i++) {
    let frame = spritesheet4.get(i * frameWidth4, 0, frameWidth4, spriteHeight4);
    frames4.push(frame);
  }

  // 處理第四個角色的受傷動畫影格
  for (let i = 0; i < hitNumFrames4; i++) {
    let frame = hitSpritesheet4.get(i * hitFrameWidth4, 0, hitFrameWidth4, hitSpriteHeight4);
    hitFrames4.push(frame);
  }

  // 處理第五個角色的影格
  for (let i = 0; i < numFrames5; i++) {
    let frame = spritesheet5.get(i * frameWidth5, 0, frameWidth5, spriteHeight5);
    frames5.push(frame);
  }

  // 處理第五個角色的跑步動畫影格
  for (let i = 0; i < runNumFrames5; i++) {
    let frame = runSpritesheet5.get(i * runFrameWidth5, 0, runFrameWidth5, runSpriteHeight5);
    runFrames5.push(frame);
  }

  // 初始化第一個角色的位置 (原本是 width / 2 - 150)
  char1X = width / 2 - 150;
  char2X = width / 2 + 150;

  // 隨機抽取第一題
  pickQuestion();

  // 建立輸入框
  inputBox = createInput();
  inputBox.hide(); // 預設隱藏
  inputBox.changed(handleInput); // 設定按下 Enter 後的動作
}

function draw() {
  // 先清除背景，避免殘影
  background(255);

  // 設定圖片繪製模式為中心
  imageMode(CENTER);
  // 繪製背景圖片填滿視窗
  image(bgImg, width / 2, height / 2, width, height);

  // 設定統一的顯示高度，讓兩個角色大小一致且適中
  let displayH = 200;
  let displayH2 = 150; // 設定第二個角色的高度較小

  // 定義角色3的位置 (在第一個角色的左邊 200 像素處)
  let char3X = width / 2 - 350;

  // --- 光波的邏輯 ---
  // 從後往前遍歷，這樣刪除元素時不會影響後續的索引
  for (let i = projectiles.length - 1; i >= 0; i--) {
    let p = projectiles[i];
    p.x += p.speed * p.dir; // 更新位置

    // 繪製光波
    let projectileDisplayH = 50;
    let projectileDisplayW = (projectileFrameWidth / projectileSpriteHeight) * projectileDisplayH;
    image(projectileFrames[frameCount % projectileFrames.length], p.x, p.y, projectileDisplayW, projectileDisplayH);

    // 碰撞偵測：光波碰到角色3
    // 簡單的距離偵測，如果光波中心與角色3中心距離小於一定範圍則視為碰撞
    if (!isHit3 && abs(p.x - char3X) < 100) {
      isHit3 = true;
      hitStartFrame3 = frameCount;
      projectiles.splice(i, 1); // 光波消失
      continue; // 結束這次迴圈，處理下一個光波
    }

    // 碰撞偵測：光波碰到角色4
    let char4X = width / 2 + 350;
    if (!isHit4 && abs(p.x - char4X) < 100) {
      isHit4 = true;
      hitStartFrame4 = frameCount;
      projectiles.splice(i, 1); // 光波消失
      continue;
    }

    // 如果光波超出螢幕，就從陣列中移除
    if (p.x > width + 100 || p.x < -100) {
      projectiles.splice(i, 1);
    }
  }

  // --- 第一個角色的邏輯 ---
  let isWalking = false;
  // 只有在不跳躍也不發功時才能走路
  if (!isJumping && !isPushing) {
    if (keyIsDown(RIGHT_ARROW)) {
      char1X += 10; // 往右移動速度
      char1Dir = 1; // 面向右
      isWalking = true;
    } else if (keyIsDown(LEFT_ARROW)) {
      char1X -= 10; // 往左移動速度
      char1Dir = -1; // 面向左
      isWalking = true;
    }
  }

  // 決定當前要顯示的動畫與位置偏移
  let currentFrames = frames; // 預設為站立
  let currentFrameW = frameWidth;
  let currentSpriteH = spriteHeight;
  let currentAnimFrame = frameCount; // 預設動畫幀索引
  let yOffset = 0; // Y 軸偏移量

  if (isPushing) {
    let index = frameCount - pushStartFrame;
    if (index >= pushNumFrames) {
      isPushing = false; // 發功動畫結束
      // 在角色前方產生一個光波
      let projectile = {
        x: char1X + (char1Dir * 50), // 從角色前方一點的位置發射
        y: height / 2 + 160,
        dir: char1Dir,
        speed: 40
      };
      projectiles.push(projectile);
    } else {
      currentFrames = pushFrames;
      currentFrameW = pushFrameWidth;
      currentSpriteH = pushSpriteHeight;
      currentAnimFrame = index; // 發功動畫不循環
    }

  } else if (isJumping) {
    let index = frameCount - jumpStartFrame;
    
    if (index >= jumpNumFrames) {
      isJumping = false; // 跳躍動畫播放完畢，結束跳躍狀態
      // 這裡不需做額外處理，下一幀會自動進入下方的 !isJumping 判斷
    } else {
      currentFrames = jumpFrames;
      currentFrameW = jumpFrameWidth;
      currentSpriteH = jumpSpriteHeight;
      currentAnimFrame = index; // 跳躍動畫不循環，直接使用計算出的 index

      // 計算跳躍高度 (拋物線效果)
      // 使用 sin 函數，讓 index 0 到 8 對應 0 到 PI，產生先升後降的效果
      let angle = map(index, 0, jumpNumFrames - 1, 0, PI);
      yOffset = -150 * sin(angle); // 負值代表往上，最大高度 150
    }
  }

  // 如果不在跳躍或發功狀態，則判斷是走路還是站立
  if (!isJumping && !isPushing) {
    if (isWalking) {
      currentFrames = walkFrames;
      currentFrameW = walkFrameWidth;
      currentSpriteH = walkSpriteHeight;
    } else {
      // 站立狀態 (預設值已設定，此處可省略或保留以求清晰)
    }
  }

  let displayW1 = (currentFrameW / currentSpriteH) * displayH;

  push(); // 儲存當前繪圖設定
  translate(char1X, height / 2 + 160 + yOffset); // 移動原點到角色位置 (包含跳躍偏移)
  scale(char1Dir, 1); // 左右翻轉 (如果 char1Dir 是 -1，圖片會水平翻轉)
  image(currentFrames[currentAnimFrame % currentFrames.length], 0, 0, displayW1, displayH);
  pop(); // 恢復繪圖設定

  // --- 第五個角色的邏輯 (跟隨角色1) ---
  let char5X = char1X - (100 * char1Dir); // 跟在後面 100px
  let currentFrames5 = frames5;
  let currentFrameW5 = frameWidth5;
  let currentSpriteH5 = spriteHeight5;
  
  if (isWalking) {
    currentFrames5 = runFrames5;
    currentFrameW5 = runFrameWidth5;
    currentSpriteH5 = runSpriteHeight5;
  }

  let displayH5 = 100; // 設定顯示高度
  let displayW5 = (currentFrameW5 / currentSpriteH5) * displayH5;

  push();
  translate(char5X, height / 2 + 210); // 往下移一點
  scale(char1Dir, 1); // 面向與角色1相同
  image(currentFrames5[frameCount % currentFrames5.length], 0, 0, displayW5, displayH5);
  pop();

  // 繪製第三個角色 (在第一個角色的左邊)
  let displayH3 = 100; // 為第三個角色設定較小的高度 (原為 200)
  
  let isInputVisible = false;

  // 如果角色3倒地且角色1或角色2靠近，則恢復正常
  if (isHit3 && (abs(char1X - char3X) < 150 || abs(char2X - char3X) < 150)) {
    isHit3 = false;
  }

  if (isHit3) {
    // 播放倒地動畫
    let index = frameCount - hitStartFrame3;
    // 如果動畫播完，停留在最後一幀
    let currentFrame = dieFrames3[min(index, dieNumFrames3 - 1)];
    let displayW3 = (dieFrameWidth3 / dieSpriteHeight3) * displayH3;
    image(currentFrame, char3X, height / 2 + 190, displayW3, displayH3);
  } else {
    // 正常站立動畫
    let displayW3 = (frameWidth3 / spriteHeight3) * displayH3;
    image(frames3[frameCount % frames3.length], char3X, height / 2 + 190, displayW3, displayH3);
  }

  // 繪製第四個角色 (在中間偏右的位置)
  let displayH4 = 100; // 設定顯示高度
  let displayW4 = (frameWidth4 / spriteHeight4) * displayH4;
  let char4X = width / 2 + 350; // 設定位置
  
  // 如果角色4受傷且角色1或角色2靠近，則恢復正常
  if (isHit4 && (abs(char1X - char4X) < 150 || abs(char2X - char4X) < 150)) {
    isHit4 = false;
  }

  push();
  translate(char4X, height / 2 + 190);
  scale(-1, 1); // 水平翻轉，使其面向左邊
  
  if (isHit4) {
    let index = frameCount - hitStartFrame4;
    let currentFrame = hitFrames4[min(index, hitNumFrames4 - 1)]; // 播放一次並停在最後一幀
    let displayW4Hit = (hitFrameWidth4 / hitSpriteHeight4) * displayH4;
    image(currentFrame, 0, 0, displayW4Hit, displayH4);
  } else {
    image(frames4[frameCount % frames4.length], 0, 0, displayW4, displayH4);
  }
  pop();

  // --- 角色1與角色3的互動邏輯 ---
  // 只有在角色3沒倒地時才顯示對話
  if (!isHit3 && abs(char1X - char3X) < 150) {
    // 顯示角色3上方的文字
    textSize(20);
    let textW = textWidth(msg3);
    
    rectMode(CENTER);
    fill('#edede9');
    stroke(0);
    strokeWeight(1);
    rect(char3X, height / 2 - 30, textW + 10, 40); // 繪製方框，位置上移避免擋住輸入框

    textAlign(CENTER);
    fill(0);
    noStroke();
    text(msg3, char3X, height / 2 - 25); // 文字位置上移

    inputBox.show();
    inputBox.position(char1X - 70, height / 2 + 10);
    isInputVisible = true;
  }

  // --- 角色2與角色4的互動邏輯 (測驗功能) ---
  // 只有在角色4沒受傷時才顯示對話
  if (!isHit4 && abs(char2X - char4X) < 150) {
    // 顯示角色4上方的文字 (題目或回饋)
    textSize(20);
    let textW = textWidth(msg4);
    
    rectMode(CENTER);
    fill('#edede9'); // 背景顏色
    stroke(0);
    strokeWeight(1);
    rect(char4X, height / 2 + 30, textW + 6, 40); // 繪製方框，位置再上移，避免擋住輸入框

    textAlign(CENTER);
    fill(0);
    noStroke();
    text(msg4, char4X, height / 2 + 35); // 文字位置再上移

    // 顯示角色2上方的輸入框
    inputBox.show();
    inputBox.position(char2X - 70, height / 2 + 90); // 調整輸入框位置，避免與對話框重疊
    isInputVisible = true;
  } 
  
  if (!isInputVisible) {
    inputBox.hide();
  }


  // --- 第二個角色的邏輯 ---
  let isWalking2 = false;
  
  // 處理跳躍輸入 (W 鍵)
  if (!isJumping2 && !isPushing2 && keyIsDown(87)) {
    isJumping2 = true;
    jumpStartFrame2 = frameCount;
  }

  // 處理發功輸入 (S 鍵)
  if (!isJumping2 && !isPushing2 && keyIsDown(83)) {
    isPushing2 = true;
    pushStartFrame2 = frameCount;
  }

  // 只有在不跳躍且不發功時才能走路
  if (!isJumping2 && !isPushing2) {
    if (keyIsDown(68)) { // D 鍵
      char2X += 10; // 往右移動
      char2Dir = 1;
      isWalking2 = true;
    } else if (keyIsDown(65)) { // A 鍵
      char2X -= 10; // 往左移動
      char2Dir = -1;
      isWalking2 = true;
    }
  }

  let currentFrames2 = frames2;
  let currentFrameW2 = frameWidth2;
  let currentSpriteH2 = spriteHeight2;
  let yOffset2 = 0;
  let animIndex2 = frameCount % currentFrames2.length; // 預設動畫索引

  if (isPushing2) {
    let index = frameCount - pushStartFrame2;
    if (index >= pushNumFrames2) {
      isPushing2 = false; // 發功結束
      // 發射光波
      let projectile = {
        x: char2X + (char2Dir * 50),
        y: height / 2 + 190,
        dir: char2Dir,
        speed: 40
      };
      projectiles.push(projectile);
    } else {
      currentFrames2 = pushFrames2;
      currentFrameW2 = pushFrameWidth2;
      currentSpriteH2 = pushSpriteHeight2;
      animIndex2 = index;
    }
  } else if (isJumping2) {
    let index = frameCount - jumpStartFrame2;
    if (index >= jumpNumFrames2) {
      isJumping2 = false; // 跳躍結束
    } else {
      currentFrames2 = jumpFrames2;
      currentFrameW2 = jumpFrameWidth2;
      currentSpriteH2 = jumpSpriteHeight2;
      animIndex2 = index; // 跳躍時使用特定索引
      
      // 跳躍高度計算 (模擬拋物線，前3張上，後3張下)
      let angle = map(index, 0, jumpNumFrames2 - 1, 0, PI);
      yOffset2 = -150 * sin(angle);
    }
  } else if (isWalking2) {
    currentFrames2 = walkFrames2;
    currentFrameW2 = walkFrameWidth2;
    currentSpriteH2 = walkSpriteHeight2;
    animIndex2 = frameCount % currentFrames2.length;
  }

  // 根據 idle (站立) 狀態的比例計算縮放，保持角色視覺大小一致
  let scale2 = displayH2 / spriteHeight2;
  let displayW2 = currentFrameW2 * scale2;
  let currentDisplayH2 = currentSpriteH2 * scale2;

  push();
  translate(char2X, height / 2 + 190 + yOffset2);
  scale(char2Dir, 1);
  image(currentFrames2[animIndex2], 0, 0, displayW2, currentDisplayH2);
  pop();
}

// 隨機抽取題目的函式
function pickQuestion() {
  if (table.getRowCount() > 0) {
    let rowIndex = int(random(table.getRowCount())); // 亂數產生列索引
    
    // 如果題目數量大於1，確保不與上一題重複
    if (table.getRowCount() > 1) {
      while (rowIndex === currentQuestionIndex) {
        rowIndex = int(random(table.getRowCount()));
      }
    }
    currentQuestionIndex = rowIndex; // 更新目前題目索引
    
    let row = table.getRow(rowIndex);
    msg3 = row.getString('question'); // 設定題目顯示在角色3上方
    currentAnswer = row.getString('answer');
    currentCorrectMsg = row.getString('feedback_correct');
    currentWrongMsg = row.getString('feedback_wrong');
    currentHint = row.getString('hint');
  }
}

// 檢查答案的函式
function checkAnswer() {
  let inputVal = this.value();
  if (inputVal === currentAnswer) {
    msg3 = currentCorrectMsg; // 答對顯示回饋
    setTimeout(pickQuestion, 2000); // 2秒後出下一題
  } else {
    msg3 = currentWrongMsg + " (" + currentHint + ")"; // 答錯顯示回饋與提示
    setTimeout(pickQuestion, 2000); // 2秒後出下一題
  }
  this.value(''); // 清空輸入框
}

function handleInput() {
  let char4X = width / 2 + 350;
  let char3X = width / 2 - 350;

  if (!isHit4 && abs(char2X - char4X) < 150) {
    if (!isChar4QuizActive) {
      msg4 = this.value() + ", 歡迎你";
      this.value('');
      isChar4QuizActive = true;
      setTimeout(pickMathQuestion, 2000); // 2秒後開始出題
    } else {
      checkMathAnswer.call(this);
    }
  } else if (!isHit3 && abs(char1X - char3X) < 150) {
    checkAnswer.call(this);
  }
}

// 當瀏覽器視窗大小改變時，自動呼叫此函數
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  // 只有在角色不在空中且不在發功時才能觸發新動作
  if (!isJumping && !isPushing) {
    if (keyCode === UP_ARROW) {
      isJumping = true;
      jumpStartFrame = frameCount;
    } else if (keyCode === DOWN_ARROW) { // 改為往下鍵發射
      isPushing = true;
      pushStartFrame = frameCount;
    }
  }
}

// 角色4隨機抽取題目的函式
function pickMathQuestion() {
  if (mathTable.getRowCount() > 0) {
    let rowIndex = int(random(mathTable.getRowCount()));
    
    if (mathTable.getRowCount() > 1) {
      while (rowIndex === currentMathQuestionIndex) {
        rowIndex = int(random(mathTable.getRowCount()));
      }
    }
    currentMathQuestionIndex = rowIndex;
    
    let row = mathTable.getRow(rowIndex);
    msg4 = row.getString('question');
    currentMathAnswer = row.getString('answer');
    currentMathCorrectMsg = row.getString('feedback_correct');
    currentMathWrongMsg = row.getString('feedback_wrong');
    currentMathHint = row.getString('hint');
  }
}

// 角色4檢查答案的函式
function checkMathAnswer() {
  let inputVal = this.value();
  if (inputVal === currentMathAnswer) {
    msg4 = currentMathCorrectMsg;
    setTimeout(pickMathQuestion, 2000);
  } else {
    msg4 = currentMathWrongMsg + " (" + currentMathHint + ")";
    setTimeout(pickMathQuestion, 2000);
  }
  this.value('');
}
