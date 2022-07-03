import json from '@assets/json.json'
import styles from '@/styles/post.lazy.css'

export default class Post {
	constructor(title, img) {
		this.title = title
		this.img = img
		this.data = new Date()
	}
	
	toString(){
		return JSON.stringify({
			title: this.title,
			data: this.data.toJSON(),
			img: this.img,
		}, null, 2)
	}
	
	/*toUpperCace(str) {
		return str.toUpperCace()
	}*/
	
	buildPost() {
		console.log("build!")
		//document.querySelector(".img").innerHTML = `<div class="post"><img src='${this.img}' alt/></div>`
		document.querySelector("#post-output").innerHTML = `<div class="post"><img src='${this.img}' alt/></div>`
		styles.use()
		return null
	}
	
	rebuildPost() {
		console.log("rebuild!")
		//document.querySelector(".img").innerHTML = `<div class="post"><img src='${this.img}' alt/></div>`
		document.querySelector("#post-output").innerHTML = ''
		styles.unuse()
		return null
	}
	
	
	
	
	
	outputJSON(){
		return json
	}
}



