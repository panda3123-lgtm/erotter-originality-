// =========================
// 画面取得
// =========================

const titleScreen = document.getElementById("title-screen");
const homeScreen = document.getElementById("home-screen");
const fade = document.getElementById("fade");


// =========================
// タイトル画面 → ホーム画面
// =========================

let starting = false;

titleScreen.addEventListener("click", startGame);

function startGame() {

    // 二重タップ防止
    if (starting) return;

    starting = true;

    // 暗転開始
    fade.classList.add("active");

    // 暗転してからホーム画面へ
    setTimeout(() => {

        titleScreen.classList.add("hidden");
        homeScreen.classList.remove("hidden");

        // 少し待ってから暗転解除
        setTimeout(() => {
            fade.classList.remove("active");
            starting = false;
        }, 100);

    }, 250);
}


// =========================
// ホーム画面のボタン
// =========================

const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

        console.log("選択:", page);

        /*
            今はまだ各画面を作っていないので、
            とりあえず動作確認用。

            後でここを

            battle → 対戦画面
            deck → デッキ編集
            cards → カード一覧
            records → 戦績

            に変更する。
        */

        switch (page) {

            case "battle":
                alert("対戦画面は現在制作中！");
                break;

            case "deck":
                alert("デッキ編集画面は現在制作中！");
                break;

            case "cards":
                alert("カード一覧は現在制作中！");
                break;

            case "records":
                alert("戦績画面は現在制作中！");
                break;
        }
    });
});


// =========================
// 設定
// =========================

const settingsButton = document.getElementById("settings-button");

settingsButton.addEventListener("click", () => {

    alert("設定画面は現在制作中！");
});


// =========================
// 1920×1080画面の自動縮小
// =========================


    
