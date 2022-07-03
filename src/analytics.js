import * as $ from 'jquery'
import _ from 'lodash'

function createAnalytics() {
	let counter = 0
	let isDestroyed = false
	
	const listener = () => counter++
	
	$(document).on("click", listener )
	
	return {
		destroy() {
			$(document).off("click", listener)
			isDestroyed = true
		},
		getClicks() {
			if (isDestroyed) {
				return `Analytics is destroyed!!! Total click = ${counter}`
			}
			return counter
		}
		
	}
}

console.log("analytic enabled!")
console.log(_.random(0, 777))
window['analytics'] = createAnalytics()