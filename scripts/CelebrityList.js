import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()



document.addEventListener('click',
    function(event){
        const targetData = event.target.dataset
        if (targetData.type === 'celebrity'){
        window.alert(`${targetData.name} is a ${targetData.sport} star.`)
    }}
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name='${celebrity.name}'
                    id="star--${celebrity.id}"
                    >
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
