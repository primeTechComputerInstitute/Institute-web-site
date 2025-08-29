document.addEventListener('DOMContentLoaded', () => {
        const pageContents = document.querySelectorAll('.page-content');
        const homePage = document.getElementById('home-page');

        function showPage(pageId) {
            pageContents.forEach(page => {
                page.classList.add('hidden');
            });
            document.getElementById(pageId).classList.remove('hidden');
        }

        document.querySelectorAll('.course-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPageId = e.target.getAttribute('href').substring(1);
                showPage(targetPageId);
            });
        });

        document.querySelectorAll('.back-button').forEach(button => {
            button.addEventListener('click', () => {
                showPage('home-page');
            });
        });
    });