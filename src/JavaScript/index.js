const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML += ` Copyright all reserved || ${currentYear}`;

document.addEventListener('DOMContentLoaded', function() {
    const copyrightText = document.querySelector('footer p');
    copyrightText.style.color = 'black';
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myvideo');
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.classList.add('shake');
        });

        item.addEventListener('mouseout', function() {
            this.classList.remove('shake');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const languageCheckboxes = document.querySelectorAll('.skills-individual-lang-and-comm-lang input');

    languageCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            console.log(`${checkbox.value} checkbox status: ${checkbox.checked}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navigationItems = document.querySelectorAll('nav ul li');

    navigationItems.forEach(function (item) {
        item.addEventListener('click', function () {
            navigationItems.forEach(function (navItem) {
                navItem.classList.remove('selected');
            });

            item.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var mediaIcons = document.querySelectorAll('.contact-medias-logo-button1');

    mediaIcons.forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'translateY(30px)';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mediaIcons = document.querySelectorAll('.contact-medias-logo-button2');

    mediaIcons.forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'translateY(30px)';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mediaIcons = document.querySelectorAll('.contact-medias-logo-button3');

    mediaIcons.forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'translateY(30px)';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mediaIcons = document.querySelectorAll('.contact-medias-logo-button4');

    mediaIcons.forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'translateY(30px)';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'translateY(0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mediaIcons = document.querySelectorAll('.contact-medias-logo-button5');

    mediaIcons.forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            icon.style.transform = 'translateY(30px)';
        });

        icon.addEventListener('mouseout', function () {
            icon.style.transform = 'translateY(0)';
        });
    });
});