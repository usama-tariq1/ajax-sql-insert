

$(document).on('click','#save',function(e) {
    var data = $("#addform").serialize();
    $.ajax({
           data: data,
           type: "post",
           url: "db/addtrans.php",
           success: function(data){
               
               alert ("New Transaction: " +data);
                
           }
});

});





