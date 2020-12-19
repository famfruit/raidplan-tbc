$(function(){


  img_source = $('.bosspick').on("change", function(){
    newImg = $(this).val()
    newTitle = $(this).find("option:selected").text()
    chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
       chrome.tabs.sendMessage(tabs[0].id, {todo: "changeImage", newImg: newImg, newTitle: newTitle });
    });
  })

  $('#takePrint').click(function(){
    // Send msg to clear up UI
    d = new Date();
    file_name = "tbc_raidplan-"+ d.getTime()
    setTimeout(function(){
      // Save data from new UI
      chrome.tabs.captureVisibleTab(null, {}, function(dataUri) {
          var img = new Image();
          img.onload = function() {
              var canvas = document.createElement('canvas');
              canvas.width = 1900;
              canvas.height = 800;
              var context = canvas.getContext('2d');

              // Assuming px,py as starting coordinates and hx,hy be the width and the height of the image to be extracted
              context.drawImage(img, 700, 300, 500, 200, 0, 0, canvas.width, canvas.height);
              var croppedUri = canvas.toDataURL('image/png');
              console.log(context)
              // You could deal with croppedUri as cropped image src.
          };
          img.src = dataUri;
          // Save image
          a = document.createElement("a")
          a.href = dataUri
          a.download = file_name
          a.click()
      });
    }, 0);
  })

  // function to control select and options
  $('#raid').on("change", function(){
    if($(this).val() != "null"){
      val = $(this).val()
      $('.bosspick').addClass('hidden')
      $("."+val).removeClass('hidden')
      $('.lable.boss').removeClass('hidden')
    } else {
      console.log("Null")
    }
  })

});
