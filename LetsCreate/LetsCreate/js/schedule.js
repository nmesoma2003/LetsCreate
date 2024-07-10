$(document).ready(function() {
    $('#calendar').fullCalendar({
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [],
        eventClick: function(calEvent, jsEvent, view) {
            // Display event details in the modal
            $('#eventTitleDetail').text('Event: ' + calEvent.title);
            $('#eventTimeDetail').text('Time: ' + moment(calEvent.start).format('YYYY-MM-DD HH:mm'));
            $('#eventTagDetail').text('Tag: ' + calEvent.description);

            // Show the modal
            $('#eventModal').css('display', 'block');
        }
    });

    $('#eventForm').on('submit', function(event) {
        event.preventDefault();

        var title = $('#eventTitle').val();
        var date = $('#eventDate').val();
        var time = $('#eventTime').val();
        var tag = $('#eventTag').val();
        var datetime = date + 'T' + time;

        if (title && date && time) {
            $('#calendar').fullCalendar('renderEvent', {
                title: title,
                start: datetime,
                description: tag
            }, true); // stick? = true

            $('#eventForm')[0].reset();
        }
    });

    // Get the modal
    var modal = document.getElementById("eventModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});