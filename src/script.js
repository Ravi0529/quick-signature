const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const canvas = document.getElementById('myCanvas');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const fontPicker = document.getElementById('fontPicker');
const ctx = canvas.getContext('2d');

colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
})

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = event.offsetX
    lastY = event.offsetY
})

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        const currentX = event.offsetX
        const currentY = event.offsetY
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
        lastX = currentX
        lastY = currentY
    }
})

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false
})

canvasColor.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value
    ctx.fillRect(0, 0, canvas.width, canvas.height)
})

fontPicker.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value
})

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContent', canvas.toDataURL())
    const link = document.createElement('a')
    link.download = 'signature.png'
    link.href = canvas.toDataURL()
    link.click()
})