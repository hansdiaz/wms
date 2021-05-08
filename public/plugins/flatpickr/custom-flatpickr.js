// Flatpickr

let dateCB = flatpickr(document.getElementById('txtDateCB'), {
    dateFormat: "Y-m-d"
});
let dateCP = flatpickr(document.getElementById('txtDateCP'), {
    dateFormat: "Y-m-d"
});

let dateRS = flatpickr(document.getElementById('txtDateRS'), {
    dateFormat: "Y-m-d"
});

let dateWS = flatpickr(document.getElementById('txtDateWS'), {
    dateFormat: "Y-m-d"
});

// var f2 = flatpickr(document.getElementById('dateTimeFlatpickr'), {
//     enableTime: true,
//     dateFormat: "Y-m-d H:i",
// });
// var f3 = flatpickr(document.getElementById('rangeCalendarFlatpickr'), {
//     mode: "range",
// });
// var f4 = flatpickr(document.getElementById('timeFlatpickr'), {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: "H:i",
//     defaultDate: "13:45"
// });