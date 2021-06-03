$(".Submit").click(function() {
    //Store user input in a variable
    let mAnswer = $(".1st").val();
    let seasonAnswer = $(".2nd").val();
    let mSection = "";
    
    if (mAnswer > 10) {
        mSection = "You have plenty M's";
    } else if (mAnswer < 10) {
        mSection = "Let's get more M's";
    } else {
        mSection = "You dont have plenty M's";
    }

    let message = "<p> "  + " and your favorite artist is "  + ".</p>";
$(".result").append(message);
});

   