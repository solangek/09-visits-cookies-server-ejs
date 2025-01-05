

document.addEventListener('DOMContentLoaded', function() {

    function  getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        else return null;
    }

    /**
     * detect if it's the first visit
     * we use a different cookie name to avoid conflicts with the server cookie
     */
    function firstVisit() {
        const lastVisit = getCookie('LastVisit');
        return lastVisit === null;
    }

    const first = firstVisit();
    if (first) {
        document.getElementById('message').innerHTML = 'It is your first visit!';
    }
    else {
        document.getElementById('message').innerHTML = 'It NOT your first visit!';
    }
});