function DOMLoaded()
{
    document.addEventListener("deviceready", cordovaLoaded, false);

}

function cordovaLoaded()
{
    $(function () {

        $("#devicestatus").html("<h1>Device is ready!</h1>");

    });
}