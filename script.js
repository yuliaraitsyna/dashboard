function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarContent = document.getElementById("sidebarContent");

    sidebar.classList.toggle("hidden");
    sidebar.classList.toggle("visible");

    sidebarContent.classList.toggle("hidden");
    sidebarContent.classList.toggle("visible");
}
function toggleSubscribe()
{
    const subscribeButton = document.getElementById("subscribe-btn");
    subscribeButton.classList.toggle("subscribed");
    subscribeButton.classList.toggle("unsubscribed");
    toggleSubscription();
}

function toggleSubscription() {
    const subscribeBtn = document.getElementById("subscribe-btn");

    if (subscribeBtn.classList.contains("unsubscribed")) {
        subscribeBtn.textContent = "Subscribe";
    } else {
        subscribeBtn.textContent = "Subscribed";
    }
}

function toggleNotification()
{
    const notificationButton = document.getElementById("notifications");
    notificationButton.classList.toggle("off");
    notificationButton.classList.toggle("on");

}
