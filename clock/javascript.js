window.onload = function() {
    let body = document.querySelector('body');
    let wrapper = document.createElement('div');
    let timezone = document.createElement('h3');
    let time = document.createElement('h1');
    let year = document.createElement('h3')

    wrapper.classList.add('wrapper');

    body.appendChild(wrapper);

    let data = options => Intl.DateTimeFormat( navigator.language , options).format();
    
    wrapper.appendChild(year).innerHTML = data({ year: 'numeric', month: 'long', day: 'numeric'})
    wrapper.appendChild(timezone).innerHTML = data({  timeZoneName: 'long'}).slice(11)

    setInterval(() =>  {
        let rez = data({ hour: 'numeric', minute: 'numeric', second: 'numeric'})
        wrapper.appendChild(time).innerHTML = rez;
} , 1000)
}