chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeImage"){
      head_body = "<div class='container-big'><div class='logoleft'><a class='navbar-brand'>RaidPlan (TBC)<span style='color:#52cbff;font-weight:600;'><strong style='color: #bdbdbd'>By</strong> Fmss</span></a></div><div class='textmid' style='text-align: center;display:block; position:absolute;left:0;right:0;top:20px;'><h3 class='bigtexttop' style='font-size:34px;'>"+request.newTitle+"</h3></div><div class='stamp' style='position:absolute;right:20px;top:10px;color:#cfcfcf;font-weight:400;font-size: 11px;text-align: center;'>BUILT FOR<span style='display:block;font-size: 15px!important;color:#52cbff;font-weight:900;'>&lt; U WOT &gt;</span>@ Endless.gg</div></div>"

      $('#rpnav').html(head_body)
      $('.topbar').remove()
      $('#mapHelper').remove()
      $('.map-container').attr('style', 'background-image: url('+request.newImg+')')
    }
});
