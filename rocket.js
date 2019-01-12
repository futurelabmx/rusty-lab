var rocketTypes = [
    {
        attr: 'does_not_compile',
        title: '¡Este código no compila!'
    },
    {
        attr: 'panics',
        title: '¡Este código entra en pánico!'
    },
    {
        attr: 'unsafe',
        title: 'El bloque contiene código inseguro.'
    },
    {
        attr: 'not_desired_behavior',
        title: 'This code does not produce the desired behavior.'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    for (var rocketType of rocketTypes) {
        attachRockets(rocketType)
    }
})

function attachRockets(type) {
    var elements = document.getElementsByClassName(type.attr)

    for (var codeBlock of elements) {
        var lines = codeBlock.textContent.split(/\r|\r\n|\n/).length - 1;

        if (lines >= 4) {
            attachRocket(codeBlock, type)
        }
    }
}

function attachRocket(element, type) {
    var a = document.createElement('a')
    a.setAttribute('href', 'ch00-00-introduction.html#ferris')
    a.setAttribute('target', '_blank')

    var img = document.createElement('img')
    img.setAttribute('src', 'images/rocket/' + type.attr + '.svg')
    img.setAttribute('title', type.title)
    img.className = 'rocket'

    a.appendChild(img)

    element.parentElement.insertBefore(a, element)
}