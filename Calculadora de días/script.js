document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formFecha");
    const fechaCalculada = document.getElementById("fechaCalculada");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const year = parseInt(document.getElementById("year").value);
        const month = parseInt(document.getElementById("month").value) - 1; 
        const day = parseInt(document.getElementById("day").value);

        const inputDate = new Date(year, month, day);
        const dayOfWeek = inputDate.getUTCDay(); 

        const options = { weekday: 'long' };
        const dayOfWeekString = new Intl.DateTimeFormat('es-ES', options).format(inputDate);

        let laborable;
        switch (dayOfWeek) {
            case 0:
            case 6:
                laborable = "No laborable";
                break;
            default:
                laborable = "Lamentablemente laborable";
        }

        fechaCalculada.textContent = `El día ${day}/${month + 1}/${year} es un ${dayOfWeekString} y es ${laborable}.`;
    });
});

