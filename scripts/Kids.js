import { getChildren } from "./database.js"

const children = getChildren()

//childName's wish is to childWish

document.addEventListener('click',
    function(event){
        const targetData = event.target.dataset
        if (targetData.type === 'child'){
        window.alert(`${targetData.name}'s wish is to ${targetData.wish}.`)
    }}
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
        data-id="${child.id}" 
        data-name='${child.name}'
        data-type="child" 
        data-wish="${child.wish}"
        >
        ${child.name}</li>`
    }

    html += "</ol>"
    return html
}

