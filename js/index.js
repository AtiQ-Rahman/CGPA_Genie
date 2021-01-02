$(document).ready(function() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    var arr = ["Reading_time_", "Sleep_Time_", "Relationship_Status_", "Class_Attendence_", "Study_Style_", "Study_Materials_",

        "Drug_Addiction_", "Attentivenss_while_Reading_", "Friends_Gathering_", "Play_online_Games_", "Residence_"
    ];
    var stepNum = 0;

    setProgressBar(current);

    $(".next").click(function() {

        var radioCheck = "input[name='" + arr[stepNum] + "']:checked";
        if (typeof $(radioCheck).val() === "undefined") {
            alert("Please Fill Up");
            return;
        } else {
            stepNum++;


        }
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function() {
        stepNum--;
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function() {

        return false;
    })

    $("#input1").click(function() {

        console.log($("#input1").val());
    })

});