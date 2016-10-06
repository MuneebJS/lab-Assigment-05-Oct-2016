var studentName = prompt("Enter your name");
var seatNo = prompt("Enter your seat #");
var fatherName =prompt("Enter your father name");
var htmlMarks = parseInt(prompt("Enter your html marks"));
var css1Marks =parseInt (prompt("Enter your css1 marks"));
var css2Marks = parseInt(prompt("Enter your css2 Marks"));
var total = htmlMarks + css1Marks + css2Marks;


if (htmlMarks >= "80") {
    document.getElementById("html_marks").innerHTML = htmlMarks + "%" + "  " + "A+";
}
    else if (htmlMarks >= "70") {
        document.getElementById("html_marks").innerHTML = htmlMarks + "%" + "  " + "A";
    }
    else if (htmlMarks >= "60") {
        document.getElementById("html_marks").innerHTML = htmlMarks + "%" + "  " + "B";
    }
    else if (htmlMarks >= "50") {
        document.getElementById("html_marks").innerHTML = htmlMarks + "%" + "  " + "C";
    }
    else {
        document.getElementById("html_marks").innerHTML = "Sorry, you are fail";
    };

if (css1Marks >= "80") {
    document.getElementById("css1_marks").innerHTML = css1Marks + "%" + "  " + "A+";
}
    else if (css1Marks >= "70") {
        document.getElementById("css1_marks").innerHTML = css1Marks + "%" + "  " + "A";
    }
    else if (css1Marks >= "60") {
        document.getElementById("css1_marks").innerHTML = css1Marks + "%" + "  " + "B";
    }
    else if (css1Marks >= "50") {
        document.getElementById("css1_marks").innerHTML = css1Marks + "%" + "  " + "C";
    }
    else {
        document.getElementById("css1_marks").innerHTML = "Sorry, you are fail";
    };

if (css2Marks >= "80") {
    document.getElementById("css2_marks").innerHTML = css2Marks + "%" + "  " + "A+";
}
    else if (css2Marks >= "70") {
        document.getElementById("css2_marks").innerHTML = css2Marks + "%" + "  " + "A";
    }
    else if (css2Marks >= "60") {
        document.getElementById("css2_marks").innerHTML = css2Marks + "%" + "  " + "B";
    }
    else if (css2Marks >= "50") {
        document.getElementById("css2_marks").innerHTML = css2Marks + "%" + "  " + "C";
    }
    else {
        document.getElementById("css2_marks").innerHTML = "Sorry, you are fail";
    };
 
document.getElementById("avg_per").innerHTML = (total * 100) / 300 + "%";
document.getElementById("student_name").innerHTML = studentName ;
document.getElementById("seat_#").innerHTML = seatNo;
document.getElementById("father_name").innerHTML = fatherName;

