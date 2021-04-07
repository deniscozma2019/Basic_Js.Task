const links = document.getElementsByTagName('a');


for (let link of links) {
    if (link.href.includes('https://')) {
        link.style.color = 'red';
    }
} 