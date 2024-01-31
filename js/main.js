'use strict'

function onBallClick(elBall, maxDiam) {
	const diff = getRandomInt(20, 60)

	elBall.innerText = parseInt(elBall.innerText) + diff

	const currentSize = parseInt(elBall.innerText)
	const newSize = currentSize + diff + 'px'

	elBall.style.height = newSize
	elBall.style.width = newSize

	elBall.style.backgroundColor = getRandomColor()

	if (elBall.innerText >= maxDiam) {
		elBall.innerText = 100
		elBall.style.height = 100 + 'px'
		elBall.style.width = 100 + 'px'
	}
}
