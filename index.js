let homeScoreEl = document.getElementById("score-home")
let guestScoreEl = document.getElementById("score-guest")
let homeIncrementBtnOne = document.getElementById("home-score-btn-1")
let homeIncrementBtnTwo = document.getElementById("home-score-btn-2")
let homeIncrementBtnThree = document.getElementById("home-score-btn-3")
let guestIncrementBtnOne = document.getElementById("guest-score-btn-1")
let guestIncrementBtnTwo = document.getElementById("guest-score-btn-2")
let guestIncrementBtnThree = document.getElementById("guest-score-btn-3")

let homeScore = 0
let guestScore = 0

function incrementHomeScoreOne() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}
function incrementHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}
function incrementHomeScoreThree() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}
function incrementGuestScoreOne() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}
function incrementGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}
function incrementGuestScoreThree() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}
