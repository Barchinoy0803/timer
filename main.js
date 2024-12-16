const minut_input = document.getElementById('minut')
const sekund_input = document.getElementById('sekund')
const minut_counter = document.getElementById('minut-counter')
const sekund_counter = document.getElementById('sekund-counter')
const start_button = document.getElementById('start-button')
const audio_timer = document.getElementById('audio')

start_button.addEventListener("click", () => {
    let minut = +minut_input.value
    let sekund = +sekund_input.value
    const timerInterval = setInterval(() => {
        if(sekund == 0){
            minut -= 1
            sekund = 60
        }
        sekund -= 1
        if(sekund == 0 && minut == 0){
            audio_timer.play()
            clearInterval(timerInterval)
        }
        
        minut_counter.textContent = minut.toString().padStart(2, '0')
        sekund_counter.textContent = sekund.toString().padStart(2, '0')
    }, 1000)
})


