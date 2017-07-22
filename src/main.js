var enableFilter = true;

function refreshFiles()
{
    var count = 0;
    
    //Hide files that are not .cs
    $(".file-header a.link-gray-dark").each(function() {
        if(enableFilter){
            if($(this).attr("title").endsWith(".cs") == false || $(this).attr("title").endsWith(".Designer.cs")){
                $(this).parent().parent().parent().hide();
            }
            else{
                count++;
            }
        } else {
            $(this).parent().parent().parent().show();
            count++
        }
    });

    //Hide deleted code lines
    if(enableFilter){
        $(".blob-num.blob-num-deletion.js-linkable-line-number").parent().hide();
    } else {
        $(".blob-num.blob-num-deletion.js-linkable-line-number").parent().show();
    }

    $("button.btn-link.muted-link.select-menu-button.js-menu-target").html("<strong>"+count+" files </strong>");
}

$(document).ready(function(){
    
    $("body").append('<div class="diffbar-item" style="position:fixed;right:5px;top:5px">'
                    +'<div class="BtnGroup">'
                    +'<button id="codefilter" type="button" class="btn btn-sm btn-outline BtnGroup-item tooltipped tooltipped-s" disabled="">Filter</button>'
                    +'<button id="viewall" type="button" class="btn btn-sm btn-outline BtnGroup-item tooltipped tooltipped-s">All</button>'
                    +'</div>'
                    +'</div>');

    $(".diff-view.commentable").bind("DOMSubtreeModified", refreshFiles);
    refreshFiles();

    $("#codefilter").click(function(){
        enableFilter = true;
        refreshFiles();
        $("#codefilter").prop('disabled', true);
        $("#viewall").prop('disabled', false);
    });

    $("#viewall").click(function(){
        enableFilter = false;
        refreshFiles();
        $("#codefilter").prop('disabled', false);
        $("#viewall").prop('disabled', true);
    });
});

