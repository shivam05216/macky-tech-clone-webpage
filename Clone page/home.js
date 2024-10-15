document.addEventListener('DOMContentLoaded', function () {
    const wealthItems = document.querySelectorAll('.wealth');

    wealthItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.querySelector('.wealth-title').style.opacity = 1;
        });

        item.addEventListener('mouseout', function () {
            this.querySelector('.wealth-title').style.opacity = 0;
        });
    });
});
