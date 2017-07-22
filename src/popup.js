$(document).ready(function(){
    $("#checkPage").click(function(){
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            alert(tab.enableFilter);
        });
    });

});
    