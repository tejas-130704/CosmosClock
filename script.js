
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
function Update() {
    const d = new Date();
    min = d.getMinutes();
    hour = d.getHours();
    second=d.getSeconds();
    document.getElementById('hour-time').innerText = hour;
    document.getElementById('min-time').innerText = min < 10 ? '0' + min : min.toString();
    const AngleMin = min * 6;
    const AngleHr = (hour % 12) * 30 + (min / 60) * 30;
    const AngleSec= second *6;
    // alert(AngleSec);
    const mi = document.getElementById('handMin');
    const hr = document.getElementById('handHr');
    const sec = document.getElementById('handSec');
    sec.style.transform=`rotate(${AngleSec}deg)`;
    mi.style.transform = `rotate(${AngleMin}deg)`;
    hr.style.transform = `rotate(${AngleHr}deg)`;

}
setInterval(Update, 100);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomStar() {
    for (let x = 0; x < 50; x++) {
        let y = viewportHeight - getRandomInt(0, viewportHeight);
        let x = viewportWidth - getRandomInt(0, viewportWidth);
        let size = getRandomInt(0, 3)+'px';
        const star = document.createElement('span');
        star.classList.add('star');
        document.body.appendChild(star);
        star.style.top=y+'px';
        star.style.left=x+'px';
        star.style.width=size;
        star.style.height=size;
        star.style.opacity=getRandomInt(0.3, 1);
        console.log(x+'px  '+y+'px ')
    }

}
randomStar();


let isDarkTheme = false;

// Add click event listener
changeTheme.addEventListener('click', () => {
    // Toggle between themes
    let Sec=document.getElementById('handSec');
    let Min=document.getElementById('handMin');
    let Hr=document.getElementById('handHr');
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        // Apply dark theme
        Sec.style.backgroundColor = '#1b1a55';
        Min.style.backgroundColor = '#535c91';
        Hr.style.backgroundColor = '#9290c3';
        document.getElementById('time-show').style.color='white';
        isDarkTheme=true;

    } else {
        // Apply light theme (or default theme)
        Sec.style.backgroundColor = '';
        Min.style.backgroundColor = '';
        Hr.style.backgroundColor = '';
        document.getElementById('time-show').style.color='';
    }
});


