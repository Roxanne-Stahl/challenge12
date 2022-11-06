const accordion = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        // Toggle between adding and removing the 
        // 'active' class
        this.classList.toggle('active');

        // Toggle hiding and showing active panel
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        }
        else {
            panel.style.display = 'block';
        }
    });
}