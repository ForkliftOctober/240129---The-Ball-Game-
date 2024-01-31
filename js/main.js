'use strict'

function onBallClick(elBall) {
	const diff = getRandomInt(20, 60)

	if (elBall.innerText >= 400) {
		elBall.innerText = 100 - diff
	}

	elBall.innerText = parseInt(elBall.innerText) + diff

	const currentSize = parseInt(elBall.innerText)
	const newSize = currentSize + diff + 'px'

	elBall.style.height = newSize
	elBall.style.width = newSize

	elBall.style.backgroundColor = getRandomColor()
}
