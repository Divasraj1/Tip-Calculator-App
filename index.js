var bill = 0;
var fivePro = 0;
var numOfP = 0;

$("input.bill").change(function(event){
    bill = parseInt(event.target.value);
    console.log(bill);
});

$("input[type='radio']").click(function(){
    var ratio = parseFloat($(this).attr("value"));
    fivePro = bill * ratio;
    console.log(fivePro);
});

$("input.custom").on("input",function(event){
    var ratio = parseFloat(event.target.value)/100;
    fivePro = bill * ratio;
    console.log(fivePro);
    $("input[type='radio']").prop('checked',false);
});

$("input.numberOfPeople").on("input",function(event){
    numOfP = parseInt(event.target.value);
    console.log(numOfP);
    var totalPP = (bill + fivePro)/numOfP;
    var tipPP = fivePro/numOfP;

    $("p.totalProPerson").text("$"+parseFloat(totalPP).toFixed(2));
    $("p.tipProPerson").text("$"+parseFloat(tipPP).toFixed(2));
});

$("button").click(function(){
    $("p.totalProPerson").text( "$0.00");
    
    $("p.tipProPerson").text( "$0.00");

    document.getElementById('123').value = '';
    document.getElementById('12').value = '';
    document.getElementById('6').value = '';

    $("input[type='radio']").prop('checked', false);
    
})

$("button.reset").click(function () {
    
$("button.reset").css("background-color","hsl(172, 64%, 68%)");


})