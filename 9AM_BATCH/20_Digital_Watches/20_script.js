// Indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = { timeZone : 'Asia/Kolkata'};
    let currentTime = today.toLocaleTimeString('en-US',options);
    let currentDate = today.toLocaleDateString('en-US',options);
    $('#indian-time').text(currentTime);
    $('#indian-date').text(currentDate);
};
setInterval(indianWatch,1000);

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = { timeZone : 'America/New_York'};
    let currentTime = today.toLocaleTimeString('en-US',options);
    let currentDate = today.toLocaleDateString('en-US',options);
    $('#usa-time').text(currentTime);
    $('#usa-date').text(currentDate);
};
setInterval(usaWatch,1000);


// China Watch
let chinaWatch = () => {
    let today = new Date();
    let options = { timeZone : 'Asia/Shanghai'};
    let currentTime = today.toLocaleTimeString('en-US',options);
    let currentDate = today.toLocaleDateString('en-US',options);
    $('#china-time').text(currentTime);
    $('#china-date').text(currentDate);
};
setInterval(chinaWatch,1000);