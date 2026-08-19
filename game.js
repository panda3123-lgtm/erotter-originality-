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

function startGame(event) {

    if (starting) return;

    starting = true;

    console.log("START!");

    // 暗転
    fade.classList.add("active");

    setTimeout(() => {

        // タイトルを完全に消す
        titleScreen.style.display = "none";

        // ホームを確実に表示
        homeScreen.style.display = "block";

        console.log("HOME!");

        // 暗転解除
        setTimeout(() => {

            fade.classList.remove("active");

            starting = false;

        }, 150);

    }, 300);
}


// =========================
// ホーム画面ボタン
// =========================

const menuButtons =
    document.querySelectorAll(".menu-button");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        const page = button.dataset.page;

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

const settingsButton =
    document.getElementById("settings-button");

settingsButton.addEventListener("click", () => {

    alert("設定画面は現在制作中！");

});
