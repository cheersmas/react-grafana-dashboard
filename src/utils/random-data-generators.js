const buckets = [
    '#8884d8',
    '#83a6ed',
    '#8dd1e1',
    '#82ca9d',
    '#a4de6c',
    '#d0ed57',
    '#ffc658'
]

const generateLineData = () => {
    let data = []

    for(let i=0; i<20; i++){
        let obj={}
        obj.name = i.toString()
        obj.value = Math.floor((Math.random()*100)+1)
        data.push(obj)
    }

    return data
}

const generateBarData = () => {
    let data = []

    for(let i=0; i<20; i++){
        let obj={}
        obj.name = i.toString()
        let num = Math.floor((Math.random()*100)+1)
        num *= Math.floor(Math.random()*2) === 1 ? 1 : -1
        obj.pv = num
        num *= Math.floor(Math.random()*2) === 1 ? 1 : -1
        obj.uv = num
        data.push(obj)
    }

    return data
}

const generateSpiralData = () => {
    let data = []

    for(let i=0; i<7; i++){
        let obj={}
        obj.name = `${i+1}-${i+2}`
        obj.value = Math.floor((Math.random()*100)+1)
        obj.fill = buckets[i]
        data.push(obj)
    }

    return data
}

export default {
    generateBarData,
    generateLineData,
    generateSpiralData
}