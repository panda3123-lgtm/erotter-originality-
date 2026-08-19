const titleScreen = document.getElementById("title-screen");
const homeScreen = document.getElementById("home-screen");
const fade = document.getElementById("fade");

let starting = false;


// =========================
// タイトル → ホーム
// =========================

titleScreen.addEventListener("pointerup", function () {

    if (starting) return;

    starting = true;

    console.log("タイトル画面タップ");

    // 暗転
    fade.style.opacity = "1";
    fade.style.pointerEvents = "auto";

    setTimeout(function () {

        console.log("ホーム画面へ移動");

        // タイトル画面を完全に消す
        titleScreen.style.display = "none";

        // hiddenクラスを強制的に消す
        homeScreen.classList.remove("hidden");

        // ホーム画面を強制表示
        homeScreen.style.display = "block";
        homeScreen.style.visibility = "visible";
        homeScreen.style.opacity = "1";

        // 暗転解除
        setTimeout(function () {

            fade.style.opacity = "0";
            fade.style.pointerEvents = "none";

            starting = false;

            console.log("ホーム画面表示完了");

        }, 150);

    }, 300);

});


// =========================
// メニューボタン
// =========================

const menuButtons =
    document.querySelectorAll(".menu-button");

menuButtons.forEach(function (button) {

    button.addEventListener("pointerup", function (event) {

        event.stopPropagation();

        const page = button.dataset.page;

        if (page === "battle") {
            alert("対戦画面は現在制作中！");
        }

        if (page === "deck") {
            alert("デッキ編集画面は現在制作中！");
        }

        if (page === "cards") {
            alert("カード一覧は現在制作中！");
        }

        if (page === "records") {
            alert("戦績画面は現在制作中！");
        }

    });

});


// =========================
// 設定
// =========================

const settingsButton =
    document.getElementById("settings-button");

settingsButton.addEventListener("pointerup", function (event) {

    event.stopPropagation();

    alert("設定画面は現在制作中！");

});
