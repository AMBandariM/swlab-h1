<center>به نام خدا</center>
<center>امیرمحمد بندری ماسوله | ۴۰۱۱۱۰۲۷۸</center>
<center>گزارش آزمایش اول</center>

## مقدمه
این گزارش نحوه‌ی عملکرد آزمایش اول را توضیح می‌دهد و توسط انسان (خودم، گروه یک نفره) نوشته شده. همچنین توجه کنید که برای نوشتن این markdown از برنامه‌ی Obsidian استفاده شده که ممکنه استانداردش کمی با markdown داخل github فرق داشته باشه، این برای نوشتن راحت‌تر بود.
برای انجام این کارهای این آزمایش از مدل فعلی DeepSeek/thinking/instant که به صورت رایگان در سایتشون قرار داره به شکل متنی استفاده شده که پرامپت‌های داده شده رو در بخش آخر همین فایل قرار می‌دهم (برای جلوگیری از طولانی شدن بیجا از گذاشتن جواب مدل خودداری می‌کنم).
## پاسخ به پرسش‌ها
این بخش در اول گزارش آمده تا راحت‌تر پیدا شود. پاسخ سوالات به ترتیب:
1. پوشه‌ی .git پوشه‌ای است که برنامه‌ی گیت اطلاعات مربوط به خودش رو داخل اون نگه می‌داره، تمام اطلاعات مربوط به برنچ‌ها، کامیت‌ها و ... این پوشه در واقع با دستور git init ایجاد می‌شه ولی خب داخل پروژه‌ی ما، اصلا روی دستگاه خودمون ایجادش نکردیم و اون رو از روی همگیت clone یا کپی کردیم.
2. منظور از atomic بودن اینه که یک کار باید به صورت کامل انجام بشه یا اصلا انجام نشه و نباید یک بخش از اون انجام شده باشه و بخش دیگه نه. مثلا در یک atomic commit تغییراتی که مربوط به یک کار مشخص هستن باید داخل یک commit قرار بگیرن، طوری که اون commit یک تغییر کامل و مشخص رو نشون بده. در atomic pull-request هم تقریبا همین مفهوم وجود داره و بهتره هر pull-request فقط مربوط به یک تغییر یا feature مشخص باشه و تغییرات مختلف و نامرتبط با هم داخل یک pull-request قرار نگیرن.
3. دستور `fetch` تغییرات جدیدی که روی remote repository وجود داره رو دریافت می‌کنه ولی اون‌ها رو وارد برنچ فعلی ما نمی‌کنه. دستور `pull` در واقع تغییرات remote رو می‌گیره و بعد اون‌ها رو با برنچ فعلی merge می‌کنه. دستور `merge` تغییرات دو برنچ رو با هم ترکیب می‌کنه و در صورت نیاز یک merge commit ایجاد می‌کنه. دستور `rebase` هم تغییرات یک برنچ رو روی برنچ دیگه قرار می‌ده، با این تفاوت که تاریخچه‌ی commitها رو هم بازنویسی می‌کنه و معمولا باعث می‌شه تاریخچه مرتب‌تر و خطی‌تر بشه. دستور `cherry-pick` هم برای اینه که فقط یک یا چند commit مشخص رو از یک برنچ برداریم و روی برنچ فعلی اعمال کنیم، بدون اینکه کل تغییرات اون برنچ رو merge کنیم.
4. دستور `reset` برای جابه‌جا کردن HEAD و تغییر وضعیت commitها استفاده می‌شه و بسته به نوعش می‌تونه تغییرات stage شده یا حتی تغییرات فایل‌ها رو هم حذف کنه. دستور `revert` برعکس reset، یک commit جدید ایجاد می‌کنه که تغییرات یک commit قبلی رو برعکس می‌کنه و به همین دلیل برای زمانی که commit قبلا push شده مناسب‌تره. دستور `restore` بیشتر برای برگردوندن تغییرات فایل‌ها استفاده می‌شه، مثلا می‌تونیم تغییرات یک فایل رو از working directory یا stage حذف کنیم. دستور `switch` برای جابه‌جا شدن بین branchها استفاده می‌شه و نسبت به checkout دستور جدیدتر و مشخص‌تری برای این کاره. دستور `checkout` هم می‌تونه برای جابه‌جا شدن بین branchها استفاده بشه و هم برای رفتن به یک commit خاص یا برگردوندن فایل‌ها، یعنی کارهای مختلفی انجام می‌ده که بعضی از اون‌ها الان با `switch` و `restore` جدا شده.
5. اصطلاح `stage` یا همون `index` در واقع محلی بین working directory و commit هست که تغییراتی که قراره در commit بعدی قرار بگیرن داخل اون مشخص می‌شن. مثلا وقتی از `git add` استفاده می‌کنیم، تغییرات فایل وارد stage می‌شن و بعد با `git commit` همون تغییرات commit می‌شن. دستور `stash` هم تغییرات فعلی که هنوز commit نشدن رو موقتا کنار می‌ذاره تا working directory تمیز بشه و بعدا می‌تونیم اون تغییرات رو دوباره برگردونیم.
6. اصطلاح `snapshot` یعنی یک تصویر یا وضعیت کامل از پروژه در یک لحظه‌ی مشخص. هر commit در گیت در واقع یک snapshot از وضعیت فایل‌های پروژه در اون لحظه است، نه اینکه فقط تغییرات بین commit قبلی و فعلی رو ذخیره کنه. البته گیت برای فایل‌هایی که تغییری نکردن دوباره اطلاعات اون‌ها رو ذخیره نمی‌کنه و به snapshot قبلی اشاره می‌کنه. به همین دلیل می‌تونیم هر commit رو به عنوان یک snapshot از وضعیت پروژه در نظر بگیریم.
7. اصطلاح `local repository` همون repositoryای هست که روی سیستم خودمون قرار داره و می‌تونیم داخلش commit ایجاد کنیم، branch بسازیم و تغییرات رو مدیریت کنیم. `remote repository` هم نسخه‌ای از repository هست که روی یک سرور مثل GitHub یا GitLab قرار داره و برای به اشتراک گذاشتن پروژه و همکاری با بقیه استفاده می‌شه. مثلا وقتی `git push` می‌زنیم commitهای local رو به remote می‌فرستیم و وقتی `git fetch` یا `git pull` می‌زنیم تغییرات remote رو دریافت می‌کنیم.
## چک‌لیست
- [x] استفاده از gitignore
- [x] حداقل 20 کامیت معنادار
- [x] حداقل سه برنچ معنادار
- [x] حداقل دو کانفلیکت
- [x] محافظت از main در github
- [x] مرج از طریق pull request
- [x] استقرار مستمر با github actions
- [x] پاسخ به پرسش‌ها
## ساختار پروژه
این پروژه یک بازی «سنگ، کاغذ، قیچی» هستش که از 5 فایل تشکیل شده:
- فایل index.html که فایل فرانت‌اند اصلیه
- فایل style.css که استایل رو دربرمیگیره
- فایل script.js که منطق بازی رو مدیریت می‌کنه
- فایل README.md که در طول پروژه تقریبا خالی هستش و صرفا به طور نمایشی وجود داره و در آخر با محتوای این گزارش پر می‌شه
- فایل gitignore که برای حذف فایل‌های خواسته نشده در گیت هستش ولی باز هم اینجا تقریبا نمایشی هستش چون فایل‌های زیادی نداریم که بخوایم اونها رو نشون ندیم
برنچ‌ها هم به شکل زیر هستند:
- برنچ main که مثلا همیشه نسخه‌ی پایدار رو شامل میشه
- برنچ dev که برای توسعه هستش
- برنچ feat/logic که برای توسعه javascript هستش
- برنچ feat/styling که برای توسعه HTML/CSS هستش
- و یک برنچ hotfix/scoreboard که برای رفع یک باگ که می‌سازیم هستش، بیشتر به هدف ایجاد کانفلیکت - یک نفره ایجاد کردنش کار راحتی نیست :)
## روند پروژه - بخش داخل همگیت
#### گام ۰
در این گام یک ریپوی همگیت میسازیم و از بهش وصل میشیم.
```console
$ git clone git@hamgit.ir:ambandarim/swlab-h1.git
$ cd swlab-h1
```
- با دستور `clone` می‌تونیم یک پروژه رو از ریموت به داخل دستگاهمون کپی کنیم و اگر اجازه‌ی لازم رو داشته باشیم خواهیم تونست به اون کد هم بفرستیم.
#### گام ۱
حالا که داخل برنچ main هستیم یک کامیت README ایجاد می‌کنیم که داخلش توضیحات پروژه رو قرار می‌دیم:
```console
$ echo "# Rock Paper Scissors :: TO BE REPLACED" > README.md
$ git add README.md
$ git commit -m "chore: start and add README"
$ git push
```
بعد از انجامش (که داخل ترمینال خطایی نمی‌گیریم) همگیت رو بررسی می‌کنیم و می‌بینیم که فایل به درستی قرار گرفته.
- با دستور `add` می‌تونیم یک یا چند فایل رو به استیج اضافه بکنیم.
- با دستور `commit` تغییرات رو ذخیره می‌کنیم و یک گره ایجاد می‌کنیم. فلگ `m` برای نوشتن پیغام روی گره است.
- با دستور `push` می‌تونیم تغییراتی که ایجاد کردیم رو به ریموتی که به اون دسترسی داریم بفرستیم.
#### گام ۲
توی این کامیت gitignore رو اضافه می‌کنیم (تمام این مقداردهی‌های اولیه در واقع میتونستن داخل یک کامیت باشن ولی برای انجام کامیت‌های زیاد و رسیدن به حد «حداقل ۲۰ کامیت معنادار» مجبوریم به این شکل عمل کنیم - چون این کامیت‌ها هم درواقع معنی‌دار هستند). به شکل زیر عمل می‌کنیم:
```console
$ vim .gitignore
$ touch TODO.txt
$ git add .
$ git status
$ git commit -m "chore: add gitignore"
$ git push
```
- داخل دستور `add` می‌تونیم تمام محتویات یک پوشه رو درنظر بگیریم، در اینجا `TODO.txt` اضافه نشده زیرا داخل `gitignore` اون رو حذف کرده بودیم.
- با دستور `status` می‌تونیم ببینیم چه فایل‌هایی اضافه شدن و چه فایل‌هایی اضافه نشدن.
#### گام ۳
داخل این کامیت، قبل خارج شدن از برنچ main سه فایل دیگه رو هم ایجاد می‌کنیم اما اون‌ها رو خالی می‌ذاریم (تا مثلا توسعه‌دهنده‌های مربوطه‌شون - خودم - اونها رو در برنچ مناسب کامل بکنه):
```console
$ touch index.html style.css script.js
$ vim index.html
$ git add .
$ git status
$ git commit -m "chore: create base HTML, CSS and JS files"
$ git push
```
یک مقدار دهی اولیه داخل `index.html` قرار دادیم که صرفا قابل نمایش باشه.
#### گام ۴
حالا برای شروع توسعه برنچ `dev` رو ایجاد می‌کنیم:
```console
$ git checkout -b dev
```
- دستور `checkout` برای رفتن به یک برنچ استفاده میشه و وقتی فلگ `b` رو هم استفاده می‌کنیم، اول اون برنچ رو میسازه و بعد به اون میره.
یک ساختار اولیه `HTML` می‌سازیم و اون رو روی `dev` پوش می‌کنیم تا توسعه‌دهنده‌هامون بتونن روش (داخل برنچ‌های بعدی) کار بکنن:
```HTML
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>سنگ کاغذ قیچی</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>سنگ · کاغذ · قیچی</h1>
        <div class="buttons">
            <button id="rock">سنگ</button>
            <button id="paper">کاغذ</button>
            <button id="scissors">قیچی</button>
        </div>
        <div id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
و در ادامه:
```console
$ git add .
$ git status
$ git commit -m "feat: add basic HTML structure with buttons and result div"
$ git push --set-upstream origin dev
```
- داخل دستور `push` فلگ `set upstream` رو قرار می‌دیم تا برنچ متناظر رو داخل ریموت ایجاد بکنیم، بعد از ایجاد اون دیگه نیازی به این فلگ نیست.
الآن اگر وارد همگیت بشیم به ما میگه که به `dev` یک کامیت زدیم و توصیه می‌کنه که یک pull request ایجاد کنیم، که ما فعلا انجامش نمیدیم.
#### گام ۵
در این گام یک فایل استایل اولیه ایجاد می‌کنیم تا فایل HTML خشکی که ساختیم رو برای توسعه دهنده‌هامون یکم دلچسب‌تر بکنه:
```CSS
body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: #f0f4f8;
}
.container {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
button {
    padding: 10px 20px;
    margin: 5px;
    font-size: 18px;
    cursor: pointer;
}
```
تمام تغییرات رو روی دستگاه لوکالمون می‌تونیم ببینیم (کافیه `python -m http.serve‍` درحال اجرا باشه). می‌بینیم که اضافه کردن استایل خیلی فایل HTML رو قشنگ‌تر کرده.
حالا این تغییرات رو هم به `dev` می‌فرستیم تا دیگه توسعه‌دهندگانمون بتونن کار رو شروع بکنن:
```console
$ git add style.css
$ git commit -m "style: add base container and button styles"
$ git push
```
#### گام ۶
حالا برنچ `feat/logic` رو ایجاد می‌کنیم تا داخلش کد منطق بازی رو قرار بدیم - این کد رو هم به کندی توسعه می‌دیم تا تعداد کامیت‌های معنا دار به حد نساب برسه!
```console
$ git checkout -b feat/logic
```
داخل فایل `script.js`:
```javascript
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Test
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
```
کد رو داخل محیط لوکال تست می‌کنیم و درست کار می‌کنه. سپس:
```console
$ git add script.js
$ git commit -m "feat: add getComputerChoice function"
$ git push --set-upstream origin feat/logic
```
#### گام ۷
در این گام، در ادامه‌ی منطق بازی، انتخاب بازیکن را گوش می‌دهیم:
```javascript
...
function playRound(choice) {
    console.log('player picked', choice)
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
```
داخل محیط لوکال تست می‌کنیم و سپس:
```console
$ git add script.js
$ git commit -m "feat: add click event listeners for buttons"
$ git push
```
#### گام ۸
حال تابع تعیین کننده‌ی برنده را ایجاد می‌کنیم و آن را قبل `playRound` قرار می‌دهیم:
```javascript
...
function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}
...
```
و سپس:
```console
$ git add script.js
$ git commit -m "feat: add determineWinner logic with win/lose/draw conditions"
$ git push
```
#### گام ۹
در این بخش تابع نمایش دهنده‌ی نتیجه را پیاده‌سازی می‌کنیم و آن را بین `playRound` و `determineWinner` قرار می‌دهیم:
```javascript
...
function displayResult(player, computer, result) {
    const resultDiv = document.getElementById('result');
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    let message = `شما: ${emojis[player]} | کامپیوتر: ${emojis[computer]} | `;
    if (result === 'win') message += '🏆 شما بردید!';
    else if (result === 'lose') message += '💻 کامپیوتر برد!';
    else message += '🤝 مساوی!';
    resultDiv.textContent = message;
}
...
```
و سپس:
```console
$ git add script.js
$ git commit -m "feat: add displayResult function to show game outcome"
$ git push
```
#### گام ۱۰
در این گام تابع `playRound` الکی‌ای که ساخته بودیم رو پر می‌کنیم:
```javascript
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
}
```
حالا می‌تونیم بازی رو به طور کامل روی محیط لوکال خودمون اجرا بکنیم و از کارکرد اون مطمئن بشیم. بعد از اطمینان از کارکردش اون رو کامیت و پوش می‌کنیم:
```console
$ git add script.js
$ git commit -m "feat: complete playRound function integrating all game logic"
$ git push
```
بعد از تست این قسمت متوجه می‌شیم که `div` مربوط به نتیجه‌ی بازی `rtl` نیست پس این مشکل رو به تیم دیزاین گزارش می‌کنیم. 
#### گام ۱۱
حالا متغیرهای `playerScore` و `computerScore` را اضافه می‌کنیم اما فراموش می‌کنیم که آن‌ها را افزایش دهیم:
```javascript
let playerScore = 0;
let computerScore = 0;
...
```
سپس:
```console
$ git add script.js
$ git commit -m "feat: add score tracking variables (playerScore, computerScore)"
$ git push
```
#### گام ۱۲
حالا به `dev` برمی‌گردیم و از آنجا برنچ `feat/styling` رو شروع می‌کنیم (که انگار به طور موازی با ساخت منطق بازی پیش رفته):
```
$ git checkout dev
$ git checkout -b feat/styling
```
برای شروع به دکمه‌ها ایموجی اضافه می‌کنیم تا خوشگل‌تر بشوند:
```HTML
...
<button id="rock">🪨 سنگ</button>
<button id="paper">📄 کاغذ</button>
<button id="scissors">✂️ قیچی</button>
...
```
بعد از تست زیبایی در محیط لوکال تغییرات رو ارسال می‌کنیم:
```console
$ git add index.html
$ git commit -m "ui: add emoji icons to game buttons"
$ git push --set-upstream origin feat/styling
```
#### گام ۱۳
در این گام تلاش می‌کنیم باکس نمایش نتیجه را زیباتر کنیم:
```CSS
...
#result {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    padding: 15px;
    background: #e2e8f0;
    border-radius: 8px;
    min-height: 60px;
}
```
برای تست کردن آن مقداری داخل آن بخش می‌گذاریم اما در کامیت قرار نمی‌دهیم، بعد از تست زیبایی می‌خواهیم ارسال کنیم که گزارش تیم منطق بازی به دستمون می‌رسه پس `direction: rtl` رو هم به CSS اضافه می‌کنیم. در نهایت:
```console
$ git add style.css
$ git commit -m "ui: style result display area with large font and background"
$ git push
```
#### گام ۱۴
در این گام به HTML یک ساختار برای نمایش امتیازها اضافه می‌کنیم:
```HTML
...
<div class="scoreboard">
    <span>👤 شما: <span id="player-score">0</span></span>
    <span>🤖 کامپیوتر: <span id="computer-score">0</span></span>
</div>
...
```
بعد از تست:
```console
$ git add index.html
$ git commit -m "ui: add scoreboard HTML structure to index"
$ git push
```
#### گام ۱۵
در این گام اسکوربوردی که ساختیم رو زیباتر می‌کنیم:
```CSS
...
.scoreboard {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    font-size: 20px;
    background: #cbd5e1;
    padding: 10px;
    border-radius: 8px;
}
```
بعد از تست زیبایی:
```console
$ git add style.css
$ git commit -m "ui: style scoreboard with flexbox and spacing"
$ git push
```
#### گام ۱۶
حالا یک دکمه هم برای reset شدن ایجاد می‌کنیم:
```HTML
...
<button id="reset-btn" style="margin-top:15px;">🔄 بازی جدید</button>
```
بعد تست:
```console
$ git add index.html
$ git commit -m "ui: add reset button UI element"
$ git push
```
#### گام ۱۷
در این گام می‌خواهیم برنچ `feat/styling` رو روی `dev` مرج بکنیم. برای اینکار طبق صورت آزمایش از pull request استفاده می‌کنیم. اسم معادل این عمل در گیتلب/همگیت merge request است، از نوار سمت راست بخش Code وارد بخش merge requests می‌شویم و یک درخواست جدید ایجاد می‌کنیم که اجازه می‌دهد مقایسه و مرج کنیم. بعد از دیدن تغییرات مرج را تایید می‌کنیم.
#### گام ۱۸
(یک merge request ایجاد کردم و اون رو لغو کردم، چون خواستم کانفلیکت هم درست بشه)
در این گام، به دلایلی، یک توسعه‌دهنده داخل برنچ `dev` اول فایل جاوااسکریپت متغیر `timer` را اضافه می‌کند تا یادمان باشد که بعدا چنین چیزی هم اضافه کنیم، سپس کامیت می‌کند.
```console
$ git fetch
$ git pull
$ vim script.js
$ git add script.js
$ git commit -m "add a TODO"
$ git push
```
- با استفاده از دستور `fetch` اطلاعات را از ریموت وارد دستگاه خودمان می‌کنیم.
- با استفاده از دستور `pull` عمل برعکس `push` را انجام می‌دهیم.
#### گام ۱۹
حال در این گام می‌خواهیم برنچ feat/logic را روی `dev` مرج کنیم. مشابه `feat/styling` عمل می‌کنیم. (داخل مرج رکوئست قبلی به اشتباه خود برنچ feat/styling رو حذف کردم، برای مستندسازی بهتر تیک اون گزینه رو داخل این مرج رکوئست برمی‌دارم)
با درخواست این مرج رکوئست یک کانفلیکت ایجاد میشود، گزینه‌ی Resolve conflicts  را میزنیم و ادامه می‌دهیم: گزینه‌ی edit inline را میزنیم و تداخل را برطرف می‌کنیم. قبل:
```javascript
<<<<<<< script.js
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Test
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById('result');
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    let message = `شما: ${emojis[player]} | کامپیوتر: ${emojis[computer]} | `;
    if (result === 'win') message += '🏆 شما بردید!';
    else if (result === 'lose') message += '💻 کامپیوتر برد!';
    else message += '🤝 مساوی!';
    resultDiv.textContent = message;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
=======
timer = 0;  // TODO :: to be implemented
>>>>>>> script.js
```
بعد:
```javascript
let timer = 0;  // TODO :: to be implemented
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Test
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }
    return 'lose';
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById('result');
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    let message = `شما: ${emojis[player]} | کامپیوتر: ${emojis[computer]} | `;
    if (result === 'win') message += '🏆 شما بردید!';
    else if (result === 'lose') message += '💻 کامپیوتر برد!';
    else message += '🤝 مساوی!';
    resultDiv.textContent = message;
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
```
کامیت می‌کنیم و مرج کامل می‌شود.
#### گام ۲۰
حالا که برنچ `dev` به درستی کار می‌کند آن را به `main` میفرستیم (مرج می‌کنیم). این کار را هم مثل قبل با یک مرج ریکوئست انجام می‌دهیم که کانفلیکتی هم ندارد.
#### گام ۲۱
روی لوکال وارد `main` می‌شویم و آن را امتحان می‌کنیم:
```console
$ git checkout main
$ git fetch
$ git pull
$ python -m http.server
```
متوجه میشویم که بخش اسکوربود آپدیت نمی‌شود! فورا یک برنچ `hotfix/scoreboard` ایجاد می‌کنیم تا مشکل را رفع کنیم:
```
$ git checkout -b hotfix/scoreboard
```
#### گام ۲۲
در برنچ hotfix تابع playRound را طوری آپدیت می‌کنیم که امتیاز‌ها را هم آپدیت بکند:
```javascript
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
    if (result === 'win') {
        playerScore += 1;
        document.getElementById('player-score').innerText = playerScore;
    }
    if (result === 'lose') {
        computerScore += 1;
        document.getElementById('computer-score').innerText = computerScore;
    }
}
```
و بعد از تست درستی آن:
```console
$ git add script.js
$ git commit -m "bugfix: scoreboard"
$ git push --set-upstream origin hotfix/scoreboard
```
#### گام ۲۳
حالا به طور موازی با برنچ گام قبل، صاحب پروژه داخل main میاد شمارنده timer رو داخل هر اجرای playRound یکی زیاد می‌کنه و این تغییرات رو مستقیم روی همون main پوش می‌کنه:
```
$ vim script.js
$ git add script.js
$ git commmit "add: countup timer"
$ git push
```
#### گام ۲۴
حالا داخل همگیت یک مرج رکوئست برای hotfix ایجاد می‌کنیم و باز هم به شکل مشابه قبل کانفلیکت خواهیم داشت. قبل:
```javascript
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
<<<<<<< script.js
    if (result === 'win') {
        playerScore += 1;
        document.getElementById('player-score').innerText = playerScore;
    }
    if (result === 'lose') {
        computerScore += 1;
        document.getElementById('computer-score').innerText = computerScore;
    }
=======
    timer += 1;
>>>>>>> script.js
}
```
بعد:
```javascript
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
    if (result === 'win') {
        playerScore += 1;
        document.getElementById('player-score').innerText = playerScore;
    }
    if (result === 'lose') {
        computerScore += 1;
        document.getElementById('computer-score').innerText = computerScore;
    }
    timer += 1;
}
```
حالا وارد `main` لوکال میشیم، تغییرات رو دریافت می‌کنیم و می‌بینیم که همه‌چیز کاملا درست داره کار می‌کنه:
```console
$ git checkout main
$ git fetch
$ git pull
$ python -m http.server
```
## کارهای مربوط به GitHub
#### ارسال به GitHub
یک پروژه‌ی خالی در گیت‌هاب ایجاد می‌کنیم و سپس:
```
$ git remote add github git@github.com:AMBandariM/swlab-h1.git
$ git push github --all
```
نیاز می‌شود که داخل GitHub برنچ دیفالت را هم از dev به main تغییر دهیم.
#### محافظت از main
داخل GitHub در صفحه‌ی پروژه‌ی خودمون به Settings/Branches می‌رویم و یک ruleset جدید دست می‌کنیم. اسم آن را request before merge گذاشته، برنچ تارگت آن را برنچ دیفالت قرار داده و در پایین تیک Require a pull request before merging را می‌زنیم. تغییرات را ذخیره می‌کنیم و از main محافظت می‌شود.
#### ایجاد GitHub Page
در تنظیمات می‌گوییم که از برنچ main برای استقرار مستمر استفاده بکند، و سپس می‌بینیم که صفحه‌ی ما در `https://ambandarim.github.io/swlab-h1/` آماده شده است!
## در نهایت
محتوای این فایل رو به README.md پروژه اضافه می‌کنیم و اون رو به همگیت و گیتهاب پوش می‌کنیم.
## پرامپت‌ها
#### پرامپت اول
برای درس «آزمایشگاه مهندسی نرم‌افزار» باید یک آزمایش رو تحویل بدم که هدف اون یادگیری و استفاده از git هستش، برای این منظور می‌خواهیم یک بازی رو به صورت static frontend به شکل کاملا pure با استفاده از HTML/CSS/JavaScript پیاده‌سازی کنیم.
حالا من از تو می‌خوام که برای من کامیت‌های مختلف رو برنامه‌ریزی بکنی (روند شکل‌گیری برنامه رو بسازی) و من در ادامه از تو خواهم خواست که برای هر بخش بگی که چه محتوایی رو اضافه بکنم و چه دستوراتی لازم هستش. توجه کن که هدف ساخت یک بازی خیلی جذاب نیست و فقط قصد داریم به کمک این پروژه دستورات گیت را تمرین کنیم، پس سادگی رو لحاظ بکن. تعدادی شرایط هم وجود داره:
- سعی کن تا جای ممکن دستورات کاربردی گیت رو استفاده بکنی تا با اونها آشنا بشم.
- داخل پروژه فایل‌هایی قرار بده که لازم باشه از gitignore استفاده کنیم.
- نیاز است تا حداقل ۲۰ commit معنا‌دار در فرآیند پیاده‌سازی نرم‌افزار وجود داشته باشد. منظور از معناداری commit ها، این است که اتفاق مشخصی در فرآیند پیاده‌سازی رخ داده باشد.
- لازم است برای مدیریت بهتر فرآیند پیاده‌سازی نرم‌افزار، از حداقل سه شاخه‌ی معنا‌دار استفاده کنید. منظور از معناداری شاخه‌ها، نام‌گذاری مناسب شاخه و هم‌چنین، مرتبط بودن شاخه‌ها با فرآیند پیاده‌سازی نرم‌افزار است؛ برای مثال شاخه dev و یا feature هر کدام با غرض‌های متفاوتی ایجاد می‌شوند و یا شاخه hotfix برای برطرف کردن بعضی باگ‌های خاص در نرم‌افزار به‌کار می‌رود.
- حداقل دو conflict را در فرآیند پیاده‌سازی برطرف کنید. این conflict ها هنگام ادغام دو شاخه رخ دهند.
همچنین فعلا برای remote از چیزی شبیه به gitlab استفاده می‌کنم (بعدا تغییرش خواهم داد) و با اون آشنایی دارم.
#### پرامپت دوم
این پروژه رو من داخل GitLab و به طور موازی روی محیط لوکال انجام دادم. میتونی بهم بگی که چجوری میتونم یک ریموت GitHub هم بهش اضافه بکنم؟
و بعدش بهم بگو چجوری میتونم از برنچ main محافظت بکنم که تنها از طریق pull request قابل تغییر باشه.
#### پرامپت سوم
لطفا جواب این سوالات رو برام توضیح بده:
1. پوشه‌ی .git چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟
2. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟
3. تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.
4. تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.
5. منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟
6. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟
7. تفاوت‌های local repository و remote repository </pre>
