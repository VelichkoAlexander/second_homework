$(document).ready(function () {
    dateObj = new Date();
    dateObj = dateObj.getFullYear();


    var place = $('#day');
    console.log(place);
    $('#month').click(function () {
        var pik = $(this).val();
             if ((pik == 1 || pik == 3 || pik == 5 || pik == 7 || pik == 8 || pik == 10 || pik == 12) == true) {
            docHtml(31);
        }
        else if ((pik == 4 || pik == 6 || pik == 9 || pik == 11) == true) {
            docHtml(30);
        }
        else if (pik == 2) {


            if (IsLeapYear(dateObj)) {
                docHtml(29);
            }
            else {
                docHtml(28);
            }

        }

        function docHtml(days) {
            var doc = "";
            for (var i = 1; i <= days; i++) {
                doc += "<option value='" + i + "'>" + i + "</option>";
            }

            place.html(doc);
        }

        function IsLeapYear(year) {
            if (year % 4 == 0) {
                if (year % 100 == 0) {
                    if (year % 400 == 0) {
                        return true;
                    }
                    else
                        return false;
                }
                else
                    return true;
            }
            return false;
        }

    });
});

