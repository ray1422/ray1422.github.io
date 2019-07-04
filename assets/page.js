$(document).ready(function () {

    setTimeout(() => {
        $("#main").removeClass("transferring")
    }, 0);
    var myLocation = window.location.pathname;
    history.pushState({
        path: myLocation,
    }, $("title").text(), myLocation);

    updateEventListener()
})
window.addEventListener("popstate", function (e) {
    this.console.log(e)
    let state = e.state;
    if (state != null) {
        let path = state.path;
        goPage(path, true);
    }
    else {
        e.preventDefault();
    }
});
function goPage(pagePath, state) {

    console.log("go to " + pagePath);
    var startTime = new Date().getTime();
    $("#main").addClass("transferring");
    $.get(pagePath, (data) => {
        var $tempDom = $('<div></div>').append($.parseHTML(data));
        var $newMain = $tempDom.find("#main")
        var $newNav = $tempDom.find("#main_nav")
        var pageTitle = $tempDom.find("title").text()
        document.title = pageTitle;
        if (!state) {
            window.history.pushState({
                path: pagePath
            }, pageTitle, pagePath);
        }

        var now = new Date().getTime();
        $("#header > *").animate({ opacity: 0 }, 100)
        if (pagePath == 'index.html' || pagePath == 'home') {
            setTimeout(() => { $("#header").removeClass("mini") }, 120)
        }
        else {
            setTimeout(() => { $("#header").addClass("mini") }, 120)
        }

        setTimeout(() => {
            $("#main").html($newMain.html()).removeClass("transferring")
            $("#main_nav").html($newNav.html());
            $("#header > *").animate({ opacity: 1 }, 300);
            updateEventListener();
        }, (1000 - now + startTime))
    })
}

function updateEventListener() {
    $("a").click(function (event) {
        if ($(this).attr("href").substring(0, 4) != 'http' && $(this).attr("href") != "#") {
            goPage($(this).attr("href"))
            event.preventDefault();
        }
    })
}