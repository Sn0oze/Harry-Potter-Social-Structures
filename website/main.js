// CAROUSEL
$(document).ready(function(){
    $('.wordcloud').carousel(
        {
            dist: 0,
            padding: 0,
            fullWidth: true,
            indicators: true,
            duration: 100,
        }
    );
});

// Or with jQuery

$(document).ready(function(){
    $('.scrollspy').scrollSpy({scrollOffset:1});
});


function selectBook(elem){
    print("changed", elem);
}

function toggleDegrees() {
    let remainingDegrees = document.getElementById("remainingDegreePlots");
    if (remainingDegrees.style.display === "none") {
        remainingDegrees.style.display = "block";
        $("#toggleDegreeBtn").html('Show less');
    } else {
        remainingDegrees.style.display = "none";
        $("#toggleDegreeBtn").html('Show more');
    }
}

function toggleTable() {
    let remainingRows = document.getElementsByClassName("hidden-row");
    $.each(remainingRows, function (index) {
        //console.log(this.classList);
        // not pretty but does the job
        if (this.style.display === "none" || (this.className ==="hidden-row" && this.style.display === "")) {
            this.style.display = "table-row";
            $("#toggleTableBtn").html('Show less');
        } else {
            this.style.display = "none";
            $("#toggleTableBtn").html('Show more');
        }
    });
}

$(document).ready(function(){
    $('.tooltipped').tooltip();
});

