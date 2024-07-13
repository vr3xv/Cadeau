$(document).ready(function() {
    $('#open').click(function() {
        $('#envelope').toggleClass('open');
        setTimeout(function() {
            $('#page1').hide();
            $('#nameForm').removeClass('hidden');
        }, 1000); // Wait for the envelope animation to finish
    });
});

let userName = '';
let userWellbeing = '';
let userBirthday = '';
let userGiftResponse = '';

function submitName() {
    userName = document.getElementById('nameInput').value;
    document.getElementById('greetingText').innerText = `Hi, ${userName}. Senang bertemu denganmu.`;
    document.getElementById('nameForm').classList.add('hidden');
    document.getElementById('greeting').classList.remove('hidden');
}

function askWellbeing() {
    document.getElementById('greeting').classList.add('hidden');
    document.getElementById('wellbeing').classList.remove('hidden');
}

function wellbeingResponse(response) {
    userWellbeing = response;
    const text = response === 'Baik' ? 'Syukurlah kalau begitu, semoga Allah memberkati.' : 'Tidak apa, kadang manusia tumbuh setiap harinya dengan sedikit tantangan.';
    document.getElementById('wellbeingText').innerText = text;
    document.getElementById('wellbeing').classList.add('hidden');
    document.getElementById('wellbeingResponse').classList.remove('hidden');
}

function askBirthday() {
    document.getElementById('wellbeingResponse').classList.add('hidden');
    document.getElementById('birthday').classList.remove('hidden');
}

function birthdayResponse(response) {
    userBirthday = response;
    document.getElementById('birthday').classList.add('hidden');
    document.getElementById('gift').classList.remove('hidden');
}

function giftResponse(response) {
    document.getElementById('gift').classList.add('hidden');
    document.getElementById('giftResponse').classList.remove('hidden');
}

function submitGift() {
    userGiftResponse = document.getElementById('giftInput').value;
    document.getElementById('giftResponse').classList.add('hidden');
    document.getElementById('closing').classList.remove('hidden');
    document.getElementById('closingText').innerText = `Terima kasih sudah berbagi cerita dan mau menerima hadiah ini, ${userName}. Senang bisa mengetahui bahwa kamu masih tumbuh setiap tahunnya. Semoga hari ulang tahunmu ${userBirthday === 'Ya' ? 'menyenangkan' : 'nanti akan menyenangkan'}. Dan mengenai hadiah, maaf jika hadiah ini mengganggumu. Tapi aku sudah merencanakannya sedari lama, jadi sayang jika tidak disampaikan. Sekali lagi maaf dan doa yang terbaik untukmu selalu ya ♡♡♡♡♡♡♡`;
    // Set hidden form values
    document.getElementById('userNameInput').value = userName;
    document.getElementById('userWellbeingInput').value = userWellbeing;
    document.getElementById('userBirthdayInput').value = userBirthday;
    document.getElementById('userGiftResponseInput').value = userGiftResponse;
}
