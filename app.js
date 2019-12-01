$(function(){
    // don't cache ajax or content won't be fresh
    // $.ajaxSetup ({
    //     cache: false
    // });
    $.ajaxSetup({
        cache : false
    });
    var ajax_load = "<img src='icons/preloader3.gif' style='height:50px; display:block; margin:0 auto;' alt='loading...' />";
    
    // load() functions
    var loadUrl = "http://localhost/logico/content.php";
    $("#result").html(ajax_load).load(loadUrl);

    $("#loadbasic").click(function(){
        $("#result").html(ajax_load).load(loadUrl);
    });

    // function load(){
    //     document.getElementById()
    // }

// end  
});



$(document).on('click','#save',function(e) {
    var data = $("#addform").serialize();
    $.ajax({
           data: data,
           type: "post",
           url: "db/addtrans.php",
        //    success: function(data){
        //     //    reload();
        //     // alert ("New Transaction: " +data);
                
        //    }
  });
    cload();
   });



function cload(){
    var ajax_load = "<img src='icons/preloader3.gif' style='height:50px; display:block; margin:0 auto;' alt='loading...' />";
    
    // load() functions
    var loadUrl = "http://localhost/logico/content.php";
    
    $("#result").html(ajax_load).load(loadUrl);
}


function deletet(id){
    var data = $(id).serialize();
    $.ajax({
           data: data,
           type: "post",
           url: "db/deletet.php",
        //    success: function(data){
        //     //    reload();
        //         // alert ("action: " + data);
                
        //    }
  });
    cload();

}