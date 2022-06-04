

const modalElement = document.querySelector('.modal-bg'); 

const openModal = ev => {
    console.log('open!');
    modalElement.classList.remove('hidden');
    modalElement.setAttribute('aria-hidden', 'false');
    document.querySelector('.close').focus();
    ev.preventDefault();
}

const closeModal = ev => {
    console.log('close!');
    modalElement.classList.add('hidden');
    modalElement.setAttribute('aria-hidden', 'false');
    document.querySelector('.open').focus();
    ev.preventDefault();
};


// function ensures that if the tabbing gets to the end of the 
// modal, it will loop back up to the beginning of the modal:
document.addEventListener('focus', function(event) {
    console.log('focus');
    if (modalElement.getAttribute('aria-hidden') === 'false' && !modalElement.contains(event.target)) {
        console.log('back to top!');
        event.stopPropagation();
        document.querySelector('.close').focus();
    }
}, true);

/*store2*/
const modalElement2 = document.querySelector('.modal-bg2'); 

const openModal2 = ev => {
    console.log('open!');
    modalElement2.classList.remove('hidden');
    modalElement2.setAttribute('aria-hidden', 'false');
    document.querySelector('.close').focus();
    ev.preventDefault();
}

const closeModal2 = ev => {
    console.log('close!');
    modalElement2.classList.add('hidden');
    modalElement2.setAttribute('aria-hidden', 'false');
    document.querySelector('.open').focus();
    ev.preventDefault();
};


// function ensures that if the tabbing gets to the end of the 
// modal, it will loop back up to the beginning of the modal:
document.addEventListener('focus', function(event) {
    console.log('focus');
    if (modalElement2.getAttribute('aria-hidden') === 'false' && !modalElement2.contains(event.target)) {
        console.log('back to top!');
        event.stopPropagation();
        document.querySelector('.close').focus();
    }
}, true);


/*store3*/
const modalElement3 = document.querySelector('.modal-bg3'); 

const openModal3 = ev => {
    console.log('open!');
    modalElement3.classList.remove('hidden');
    modalElement3.setAttribute('aria-hidden', 'false');
    document.querySelector('.close').focus();
    ev.preventDefault();
}

const closeModal3 = ev => {
    console.log('close!');
    modalElement3.classList.add('hidden');
    modalElement3.setAttribute('aria-hidden', 'false');
    document.querySelector('.open').focus();
    ev.preventDefault();
};


// function ensures that if the tabbing gets to the end of the 
// modal, it will loop back up to the beginning of the modal:
document.addEventListener('focus', function(event) {
    console.log('focus');
    if (modalElement3.getAttribute('aria-hidden') === 'false' && !modalElement3.contains(event.target)) {
        console.log('back to top!');
        event.stopPropagation();
        document.querySelector('.close').focus();
    }
}, true);


/*store4*/
const modalElement4 = document.querySelector('.modal-bg4'); 

const openModal4 = ev => {
    console.log('open!');
    modalElement4.classList.remove('hidden');
    modalElement4.setAttribute('aria-hidden', 'false');
    document.querySelector('.close').focus();
    ev.preventDefault();
}

const closeModal4 = ev => {
    console.log('close!');
    modalElement4.classList.add('hidden');
    modalElement4.setAttribute('aria-hidden', 'false');
    document.querySelector('.open').focus();
    ev.preventDefault();
};


// function ensures that if the tabbing gets to the end of the 
// modal, it will loop back up to the beginning of the modal:
document.addEventListener('focus', function(event) {
    console.log('focus');
    if (modalElement4.getAttribute('aria-hidden') === 'false' && !modalElement4.contains(event.target)) {
        console.log('back to top!');
        event.stopPropagation();
        document.querySelector('.close').focus();
    }
}, true);