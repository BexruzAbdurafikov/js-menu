const box = document.querySelector(`.right_side`)
const button = document.querySelector(`button`)
const x = document.querySelector(`.x`)

button.addEventListener(`click`, () => {
    box.classList.add(`show`)
})

x.addEventListener(`click`, () => {
    box.classList.remove(`show`)
})