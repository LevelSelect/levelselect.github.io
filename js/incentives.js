function incentives() {
    var spreadsheetID = "1tcGYbSR33vOPNsKmrg59-5klakJgJTs9Qwp91oqvjWs";
    $("#googleSheet").load("https://dftbrt-cors.herokuapp.com/https://docs.google.com/spreadsheets/d/"+spreadsheetID+"/gviz/tq?tqx=out:html&tq&gid=0", function(data){
        $("#googleSheet tr").removeAttr("style");
        $('td').hide();
        $('td').filter(':nth-child(1), :nth-child(2), :nth-child(3)').show();
        $("tr").each(function (){
            if ( $(this).children("td").filter(':nth-child(2)').html() === "&nbsp;" ) {
                $(this).hide();
            } 
        });    
    });
};
