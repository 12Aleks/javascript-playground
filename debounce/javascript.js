let input =  document.querySelector('input');
let paragraph = document.querySelector('p')

let debounce = (func, time) => {
    let timer

    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this)
        }, time)
    }
}

let getValue = () => {
   let v = input.value
   paragraph.append(v)
}

input.addEventListener('keydown', debounce(() => getValue(), 2000))