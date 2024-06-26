document.addEventListener('DOMContentLoaded', function () {
    let tabLinks = document.querySelectorAll('.tab-link');
    let tabContents = document.querySelectorAll('.tab-content');
    let moreButton = document.getElementById('more-button');
    let currentTab = 'tab-1'; // Default to tab-1

    tabLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            let tabId = this.getAttribute('data-tab');
            console.log(`현재 탭은 ${tabId}`)
            currentTab = tabId;

            tabLinks.forEach(function (item) {
                item.classList.remove('active');
            });

            tabContents.forEach(function (item) {
                item.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    moreButton.addEventListener('click', function () {
        let link;
        switch (currentTab) {
            case 'tab-1':
                link = 'https://www.sungkyul.ac.kr/skukr/343/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5NiUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;
            case 'tab-2':
                link = 'https://www.sungkyul.ac.kr/skukr/342/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5NyUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;
            case 'tab-3':
                link = 'https://www.sungkyul.ac.kr/skukr/344/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5NSUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;
            case 'tab-4':
                link = 'https://www.sungkyul.ac.kr/skukr/345/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5NCUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;
            case 'tab-5':
                link = 'https://www.sungkyul.ac.kr/skukr/346/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5MyUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;
            case 'tab-6':
                link = 'https://www.sungkyul.ac.kr/skukr/901/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkYxMTYlMkZhcnRjbExpc3QuZG8lM0Y%3D';
                break; 
            case 'tab-7':
                 link = 'https://www.sungkyul.ac.kr/skukr/348/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY4OSUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;   
            case 'tab-8':
                link = 'https://www.sungkyul.ac.kr/skukr/349/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY4NyUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;   
            case 'tab-9':
                link = 'https://www.sungkyul.ac.kr/skukr/354/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY4MCUyRmFydGNsTGlzdC5kbyUzRg%3D%3D';
                break;  
                             
        }  
        window.location.href = link;
    });
});
