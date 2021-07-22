window.onload = function() {
    let root = document.querySelector('div#root');
    let data = []

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20").then(
        (el) => el.json()
      ).then(el => data.push(el));

    const addElement = () => {
        let div = document.createElement('div')
        root.appendChild(div).style.cssText = `height: 900px; background: rgb(${Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255})`
        let leng = root.children.length;
        root.lastElementChild.innerHTML = data[0][leng].id + '. ' + data[0][leng].title;
    }


   

    const options = {
        root: root,
        rootMargin: '10px',
        threshold: 0
    }

    const callback = function(entries) {
        entries.forEach(entri => {
           if(entri.isIntersecting){
               console.log('true')
               addElement()
           }
        })
    }

    let observer = new IntersectionObserver(callback, options);

    let lastElement = root.lastElementChild;
    observer.observe(lastElement)

}