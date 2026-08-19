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

        // ホーム画面を表示
        homeScreen.classList.remove("hidden");
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


        // -------------------------
        // 対戦
        // -------------------------

        if (page === "battle") {

            alert("対戦画面は現在制作中！");

        }


        // -------------------------
        // デッキ
        // -------------------------

        if (page === "deck") {

            alert("デッキ編集画面は現在制作中！");

        }


        // -------------------------
        // カード
        // -------------------------

        if (page === "cards") {

            console.log("カード一覧へ移動");

            // ホームを消す
            homeScreen.style.display = "none";

            // カード画面を表示
            const cardsScreen =
                document.getElementById("cards-screen");

            cardsScreen.style.display = "block";

        }


        // -------------------------
        // 戦績
        // -------------------------

        if (page === "records") {

            alert("戦績画面は現在制作中！");

        }

    });

});


// =========================
// カード一覧 → ホーム
// =========================

const cardsScreen =
    document.getElementById("cards-screen");

const cardsBackButton =
    document.getElementById("cards-back-button");


cardsBackButton.addEventListener("pointerup", function () {

    console.log("ホームへ戻る");

    // カード画面を消す
    cardsScreen.style.display = "none";

    // ホーム画面を表示
    homeScreen.style.display = "block";

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
