const getPositionByIndex = index => {
    const y = Math.floor(index / 9) + 1
    let x = index + 1
    
    while(x > 9) x-= 9

    return {
        y,
        x
    }
} 

const quad = index => ({
    row: Math.ceil(getPositionByIndex(index).x / 3),
    col: Math.ceil(getPositionByIndex(index).y / 3)
})

const isQuad = (selected, current) => {
    selected = quad(selected) 
    current = quad(current)
    return selected.col === current.col && selected.row === current.row
}

const isNearby = (selectedIndex, currentIndex) => {
    if (selectedIndex >= 0 && selectedIndex !== currentIndex) {
        const selXY = getPositionByIndex(selectedIndex) 
        const curXY = getPositionByIndex(currentIndex)
        
        if (curXY.x === selXY.x || curXY.y === selXY.y || isQuad(selectedIndex, currentIndex)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

const getNearbyCells = (cell, cellList) =>  
    cellList.filter(item => isNearby(cell.id, item.id))


export {
    getPositionByIndex,
    isNearby,
    getNearbyCells
}