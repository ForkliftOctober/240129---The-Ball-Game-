'use strict'

function onBallClick(elBall) {
	const diff = 50

	if (elBall.innerText >= 400) {
		elBall.innerText = 100 - diff
	}

	elBall.innerText = parseInt(elBall.innerText) + diff

	const currentSize = parseInt(elBall.innerText)
	const newSize = currentSize + diff + 'px'

	elBall.style.height = newSize
	elBall.style.width = newSize
}
