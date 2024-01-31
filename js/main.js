'use strict'

function onBallClick(elBall) {
	const diff = 50
	elBall.innerText = parseInt(elBall.innerText) + diff

	const currentSize = parseInt(elBall.innerText)
	const newSize = currentSize + diff + 'px'

	elBall.style.height = newSize
	elBall.style.width = newSize
}
