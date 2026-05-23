var timerText = document.querySelector('#timerText')
var statusText = document.querySelector('#statusText')
var dateText = document.querySelector('#dateText')
var greetingText = document.querySelector('#greetingText')
var motivationText = document.querySelector('#motivationText')

function updateGreetingAndMotivation() {
    let hour = new Date().getHours()
    let greeting = ""
    let emoji = ""
    let motivation = ""
    
    if (hour < 12) {
        greeting = "Good Morning"
        emoji = "🌅"
        motivation = "🌟 Rise and shine! Make today count 🌟"
    } else if (hour < 17) {
        greeting = "Good Afternoon"
        emoji = "☀️"
        motivation = "⚡ Keep pushing forward! You're doing great ⚡"
    } else if (hour < 20) {
        greeting = "Good Evening"
        emoji = "🌆"
        motivation = "🎯 Finish the day strong! You got this 🎯"
    } else {
        greeting = "Good Night"
        emoji = "🌙"
        motivation = "✨ Rest well and dream big! Tomorrow is new ✨"
    }
    
    if (greetingText) {
        greetingText.innerHTML = `${emoji} ${greeting}! ${emoji}`
    }
    
    if (motivationText) {
        motivationText.innerHTML = motivation
    }
}

function digitalClock(){
    setInterval(() => {
        let dateObj = new Date()
        
        // Time
        let hr = dateObj.getHours()
        let min = dateObj.getMinutes()
        let sec = dateObj.getSeconds()
        
        hr = hr < 10 ? `0${hr}` : hr
        min = min < 10 ? `0${min}` : min
        sec = sec < 10 ? `0${sec}` : sec
        
        timerText.innerHTML = `${hr}:${min}:${sec}`
        statusText.innerHTML = hr < 12 ? "AM" : "PM"
        
        // Date
        let day = dateObj.getDate()
        let month = dateObj.getMonth() + 1 
        let year = dateObj.getFullYear()
        
        day = day < 10 ? `0${day}` : day
        month = month < 10 ? `0${month}` : month
        
        dateText.innerHTML = `${day}/${month}/${year}`
        
        // Update greeting and motivation every minute
        updateGreetingAndMotivation()
    }, 1000)
}

digitalClock()
updateGreetingAndMotivation()
