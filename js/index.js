// I didn't know what to do to improve it, so I made the page as unusuable as I could.
// This is an absolute monstrosity.

let body = document.body;
let navLinks = document.querySelectorAll('.nav-link');
let header = document.querySelectorAll('header')[1];
let sections = Array.from(document.querySelectorAll('section'));
let images = document.querySelectorAll('img');
let h2s = Array.from(document.querySelectorAll('h2'));
let h4s = Array.from(document.querySelectorAll('h4'));
let btns = Array.from(document.querySelectorAll('.btn'));


document.addEventListener('wheel', e => {
    body.style.backgroundColor = 'turquoise';
    setTimeout(_ => {
        body.style.backgroundColor = '';
    }, 500);
});

navLinks.forEach(item => {
    item.addEventListener('focus', e => {
        item.style.opacity = '';
        item.style.fontSize = '500%';
        item.style.backgroundColor = 'purple';
        item.style.color = 'yellow';
    });
    item.addEventListener('blur', e => {
        item.style.opacity = '0';
        setTimeout(_ => {
            item.style.opacity = '';
            item.style.fontSize = '';
            item.style.backgroundColor = '';
            item.style.color = '';
        }, 1500);
    });
    item.addEventListener('click', e => {
        setInterval(_ => {
            if (body.style.backgroundColor == 'fuchsia') {
                body.style.backgroundColor = 'orange';
            }
            else {
                body.style.backgroundColor = 'fuchsia';
            }
        }, 850);
        setTimeout(_ => {
            body.style.backgroundColor = '';
        }, 1000);
        e.preventDefault();
    })
});

header.addEventListener('mouseout', e => {
    setInterval(_ => {
        if(header.style.filter == '') {
            header.style.filter = 'blur(3px)';
        }
        else {
            header.style.filter = '';
        }
    }, 1440)
});

sections.forEach(item => {
    item.addEventListener('mouseleave', e => {
        setInterval(_ => {
            if(item.style.filter == '') {
                item.style.filter = 'blur(3px)';
            }
            else {
                item.style.filter = '';
            }
        }, 1440)
    })
});

images.forEach(item => {
    item.addEventListener('mouseover', e => {
        setInterval(_ => {
            if(item.style.filter == 'invert(100%)') {
                item.style.filter = 'saturate(200%)';
            }
            else {
                item.style.filter = 'invert(100%)';
            }
        }, 500)
    })
});

h2s.forEach(item => {
    document.addEventListener('keydown', e => {
        setInterval(_ => {
            if(item.style.color == 'orange') {
                item.style.backgroundColor = 'orange';
                item.style.color = 'magenta';
            }
            else {
                item.style.backgroundColor = 'magenta';
                item.style.color = 'orange';
            }
        }, 700);
        setTimeout(_ => {
            item.style.backgroundColor = '';
            item.style.color = '';
        }, 3000);
    })
});

h4s.forEach(item => {
    document.addEventListener('keyup', e => {
        setInterval(_ => {
            if(item.style.color == 'yellow') {
                item.style.backgroundColor = 'yellow';
                item.style.color = 'green';
            }
            else {
                item.style.backgroundColor = 'green';
                item.style.color = 'yellow';
            }
        }, 900);
        setTimeout(_ => {
            item.style.backgroundColor = '';
            item.style.color = '';
        }, 3000);
    })
});

btns.forEach(item => {
    item.addEventListener('click', e => {
        setInterval(_ => {
            if (body.style.backgroundColor == 'salmon') {
                body.style.backgroundColor = 'lime';
            }
            else {
                body.style.backgroundColor = 'salmon';
            }
        }, 750);
        setTimeout(_ => {
            body.style.backgroundColor = '';
        }, 2100);
    })
})