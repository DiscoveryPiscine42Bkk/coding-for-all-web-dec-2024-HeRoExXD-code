const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const mainContent = document.querySelector('.main-content');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); 
    mainContent.classList.toggle('sidebar-hidden');
});

const currentPage = window.location.pathname.split('/').pop(); 
const fixedButton = document.getElementById('fixedButton'); 

if (currentPage === 'Page2.html' || currentPage === 'Page3.html') {
    fixedButton.style.display = 'block'; 
}