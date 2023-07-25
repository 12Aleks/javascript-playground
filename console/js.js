const a = 1


function fun(){
    const b = 2

    function fun1() {
        const c = 3
        console.log(a + b + c)
    }

    fun1()
}

fun()