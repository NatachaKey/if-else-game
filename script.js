function animation () {
    gsap.from(".left", {
        y: 100,
        opacity: 0,
        duration: .9,
    });
    
    gsap.from(".right", {
        y: -100,
        opacity: 0,
        duration: .9,
    });
    gsap.from("#header", {
        y: -100,
        opacity: 0,
        duration: .9,
    });
};

animation ();

const header = document.querySelector('#header');
const image = document.querySelector('#image');
const question = document.querySelector('#question');
const link = document.querySelector('#link');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');

btnOne.addEventListener('click', good);
function good () {
    btnOne.removeEventListener('click', good);
    btnTwo.removeEventListener('click', notGood);

    animation ();
    question.textContent = '¿Quieres reirte muchísimo?'
    btnOne.textContent = 'Sí';
    btnOne.addEventListener('click', fun);

    btnTwo.textContent = 'No';
    btnTwo.addEventListener('click', nofun);
};

function fun () {
    btnOne.removeEventListener('click', fun);
    btnTwo.removeEventListener('click', nofun);

    header.textContent = 'Tu serie: ';
    image.src = "https://cdn.glitch.global/f6152df1-d2ad-4a05-97e3-68338b086020/friends.jpg?v=1655205377876";
    image.classList.add('cover');
    question.textContent = 'Friends';
    link.style.visibility= 'initial';
    link.href = "https://www.imdb.com/title/tt0108778/";

    btnOne.textContent = 'Volver al inicio';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function pageReload () {
    document.location.reload();
}

function nofun () {
    btnOne.removeEventListener('click', fun);
    btnTwo.removeEventListener('click', nofun);

    header.textContent = 'Tu serie:';
    image.src = "https://cdn.glitch.global/f6152df1-d2ad-4a05-97e3-68338b086020/charmed.jpg?v=1655206996289";
    image.classList.add('cover');
    question.textContent = 'Charmed';
    link.style.visibility= 'initial';
    link.href = "https://www.imdb.com/title/tt0158552/";

    btnOne.textContent = 'Volver al inicio';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};


btnTwo.addEventListener('click', notGood);

function notGood () {
    btnOne.removeEventListener('click', good);
    btnTwo.removeEventListener('click', notGood);

    animation ();
    question.textContent = '¿Quieres sentirte mejor?'
    btnOne.textContent = 'Sí';
    btnOne.addEventListener('click', cheerUp);

    btnTwo.textContent = 'No';
    btnTwo.addEventListener('click', stayOk);
};

function cheerUp () {
    btnOne.removeEventListener('click', cheerUp);
    btnTwo.removeEventListener('click', stayOk);
    
    animation ();
    question.textContent = '¿Algo más romántico o de aventura?'
    btnOne.textContent = 'Romaaantico';
    btnOne.addEventListener('click', romantic);

    btnTwo.textContent = 'Accion por supuesto';
    btnTwo.addEventListener('click', adventure);
};

function romantic () {
    btnOne.removeEventListener('click', romantic);
    btnTwo.removeEventListener('click', adventure);

    header.textContent = 'Tu serie:';
    image.src = "https://cdn.glitch.global/f6152df1-d2ad-4a05-97e3-68338b086020/howimetyourmother.jpg?v=1655207315725";
    image.classList.add('cover');
    question.textContent = 'How I met your mother';
    link.style.visibility= 'initial';
    link.href = "https://www.imdb.com/title/tt0460649/";

    btnOne.textContent = 'Volver al inicio';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function adventure () {
    btnOne.removeEventListener('click', romantic);
    btnTwo.removeEventListener('click', adventure);

    header.textContent = 'Tu serie:';
    image.src = "https://cdn.glitch.global/f6152df1-d2ad-4a05-97e3-68338b086020/sherlock.jpg?v=1655208446734";
    image.classList.add('cover');
    question.textContent = 'Sherlock';
    link.style.visibility= 'initial';
    link.href = "https://www.imdb.com/title/tt1475582/";

    btnOne.textContent = 'Volver al inicio';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};


function stayOk () {
    btnOne.removeEventListener('click', cheerUp);
    btnTwo.removeEventListener('click', stayOk);
    
    animation ();
    question.textContent = '¿Realidad o fantasía?'
    btnOne.textContent = 'Realidad';
    btnOne.addEventListener('click', reality);

    btnTwo.textContent = 'Fanstasía';
    btnTwo.addEventListener('click', fantasy);
};

function reality () {
    btnOne.removeEventListener('click', reality);
    btnTwo.removeEventListener('click', fantasy);
    
    header.textContent = 'Tu serie:';
    image.src = "https://cdn.glitch.global/f6152df1-d2ad-4a05-97e3-68338b086020/dexter.jpeg?v=1655205374848";
    image.classList.add('cover');
    question.textContent = 'Dexter';
    link.style.visibility= 'initial';
    link.href = "https://www.imdb.com/title/tt0773262/";

    btnOne.textContent = 'Volver al inicio';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function fantasy () {
    btnOne.removeEventListener('click', reality);
    btnTwo.removeEventListener('click', fantasy);

    header.textContent = 'Tu serie:';
    image.src = "https://cdn.glitch.global/f6152df1-d2ad-4a05-97e3-68338b086020/gameofthrones.jpg?v=1655205381626";
    image.classList.add('cover');
    question.textContent = 'Game of Thrones';
    link.style.visibility= 'initial';
    link.href = "https://www.imdb.com/title/tt0944947/";

    btnOne.textContent = 'Volver al inicio';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

