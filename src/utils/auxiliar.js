/*
 * Format Date
 */
export function formatDate(date) {
    let newDate;

    if (date) {
        const d = new Date(date);
        let month = (d.getMonth() + 1);
        let day = d.getDate();
        let year = d.getFullYear();
        month = `0${month}`.substr(-2);
        day = `0${day}`.substr(-2);
        year = `0${year}`.substr(-2);


        newDate = `${month}/${day}/${year}`;
    }

    return newDate;
}

/*
 * Format Time
 */
export function formatTime(time) {
    let newTime;

    if (time) {
        let hours;
        let minutes;
        let seconds;

        if (time.includes(':')) {
            const a = time.split(':');
            hours = a.length === 3 ? a[0] : '00';
            minutes = a.length === 3 ? a[1] : a[0];
            seconds = a.length === 3 ? a[2] : a[1];
        } else {
            const sec = parseInt(time, 10);
            hours = Math.floor(sec / 3600);
            minutes = Math.floor((sec - hours * 3600) / 60);
            seconds = sec - hours * 3600 - minutes * 60;
        }

        hours = `0${hours}`.substr(-2);
        minutes = `0${minutes}`.substr(-2);
        seconds = `0${seconds}`.substr(-2);
        newTime = `${hours}:${minutes}:${seconds}`;
    }

    return newTime;
}
