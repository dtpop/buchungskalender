$(function () {

    let StartDate;

    // Im yform Buchungsformular Teilnehmer auf- und zuklappen
    $(document).on('click','.aufklappen',function(e) {
        e.preventDefault();
        $(this).closest('.yform').find('.zugeklappt').toggle();
    });

    $(document).on("click", '.buka-cal-wrapper .bk-day.fix-booked', function(e) { 
        var DateClicked = $(this);        
        if (e.shiftKey) {
            if (DateClicked.data('bookingid')) {
                editBooking(DateClicked.data('bookingid'));
            }
            return;
        } 
    });


    $(document).on('click','.buka_bar_cal .obj_booking', function(e) {
        var DateClicked = $(this);
        if (DateClicked.data('bookingid')) {
            window.location.href = 'index.php?page=buchungskalender/bookings&func=edit&data_id='+DateClicked.data('bookingid');
        }
    });

    // Backend
    function editBooking (bookingid) {
        window.location.href = 'index.php?src=calendar&page=buchungskalender/bookings&func=edit&data_id='+bookingid;
    }

    $(document).on("click", ".buka-cal-wrapper .bookable", function () {
        if ($(".buka-cal-wrapper").hasClass("booking-complete")) {
            clear_booking();
        }
        if ($(this).data("date") < $("input#datestart").val()) {
            clear_booking();
        }

        if ($(".bk-day.reserve-start").length) {
            find_end($(this));
        } else {
            find_start($(this));
        }
    });

    // Kalender blättern
    $(document).on('click','#bookingform-step1 .buka_pager_nav a',function(e) {
        e.preventDefault();
        let href = $(this).attr('href')+"&bukacal=1";
        $("#bookingform-step1").parent().load(href);
        return false;
    });

    $(document).on("click", "#to-step-2", function () {
        $("#bookingform-step1").slideUp();
        $("#bookingform-step2").slideDown();
    });
    $(document).on("click", "#to-step-1", function () {
        $("#bookingform-step2").slideUp();
        $("#bookingform-step1").slideDown();
    });

    if ($('.uk-form-danger').length) {
        $("#bookingform-step1").hide();
        $("#bookingform-step2").show();
    }

    function clear_booking() {
        $(".buka-cal-wrapper").removeClass("booking-complete");
        $(".bk-cal-day").removeClass("reserve-start");
        $(".bk-cal-day").removeClass("reserve-end");
        $(".bk-cal-day").removeClass("add-reserve");
        $("input#date_start").val("");
        $("input#date_end").val("");
        $("input#datestart").val("");
        $("input#dateend").val("");
        $("#to-step-2").prop("disabled", true);
    }

    function mark_end($elem) {
        let min_booking_days = $elem.data('minbookingdays');
        $(".buka-cal-wrapper").removeClass("booking-start");
        $(".buka-cal-wrapper").addClass("booking-complete");
        $elem.addClass("reserve-end");
        $("input#date_end").val(
            $elem.data("date").split("-").reverse().join(".")
        );
        $("input#dateend").val($elem.data("date"));
        $(".mind_booking_message").hide();
        $("#to-step-2").prop("disabled", false).addClass('uk-active');
        if ($(".add-reserve").length <= min_booking_days) {
            $(".mind_booking_message").show();
            $("#to-step-2").prop("disabled", true).removeClass('uk-active');
        }
    }

    function find_end ($elem) {
        let EndDate = new Date($elem.data("date"));
        if ($elem.data("fullweek") == 1 && EndDate.getDay() != 6 && !$elem.hasClass('fix-booked-start')) {
            while (EndDate.getDay() != 6) {
                EndDate.setDate(EndDate.getDate() + 1);
                if ($("ul").find("[data-date='"+date_to_string(EndDate)+"']").hasClass('fix-booked-start')) {
                    break;
                }
            }
            let $endElem = $("ul").find("[data-date='"+date_to_string(EndDate)+"']");            
            mark_range($endElem);
            mark_end($endElem);
            return;
        }
        mark_range($elem);
        mark_end($elem);
    }


    function find_start($elem) {
        let StartDate = new Date($elem.data("date"));
        if ($elem.data("fullweek") == 1 && StartDate.getDay() != 6 && !$elem.hasClass('fix-booked-end')) {
            while (StartDate.getDay() != 6) {
                StartDate.setDate(StartDate.getDate() - 1);
                if ($("ul").find("[data-date='"+date_to_string(StartDate)+"']").hasClass('fix-booked-end')) {
                    break;
                }
            }
            mark_start($("ul").find("[data-date='"+date_to_string(StartDate)+"']"));
            $elem.trigger('mouseenter');
            return;
        }

        mark_start($elem);
    }

    function mark_start($elem) {
        $(".buka-cal-wrapper").addClass("booking-start");
        $elem.addClass("reserve-start");
        $("input#date_start").val(
            $elem.data("date").split("-").reverse().join(".")
        );
        $("input#datestart").val($elem.data("date"));
    }

    function date_to_string(jsDate) {
        return (
            jsDate.getFullYear() +
            "-" +
            pad(jsDate.getMonth() + 1, 2) +
            "-" +
            pad(jsDate.getDate(), 2)
        );
    }

    function pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    $('.minikalender-wrapper').on('click','a',function(e) {
        e.preventDefault();
        let href = $(this).attr('href')+"&minicalendar=1";
        $($(this).parents('.minikalender-wrapper')).load(href);
        return false;
    });

    $(document).on(
        "mouseenter",
        ".buka-cal-wrapper.booking-start .bk-cal-day",
        function () {
            mark_range($(this));
        }
    );

    function mark_range ($elem) {
        var addthis = 0;
        var $current = $elem;
        $(".bk-cal-day").removeClass("add-reserve");
        if ($current.data("date") >= $(".reserve-start").data("date")) {
            $(".bk-cal-day").each(function () {
                if ($(this).hasClass("reserve-start")) {
                    addthis = 1;
                }
                if ($(this).data("date") > $current.data("date")) {
                    addthis = 0;
                }
                if (addthis && $(this).hasClass("bookable")) {
                    $(this).addClass("add-reserve");
                }
                if (!$(this).hasClass("bookable")) {
                    addthis = 0;
                }
            });
        }

    }




});

$(document).on('rex:ready',function() {
    $('.sortable_table table tbody').sortable();
})
