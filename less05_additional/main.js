var arr = []
var elements = document.body.querySelectorAll('*')
var script = document.getElementsByTagName("script")

for(var i = 0; i < elements.length; i++){
	for(var y = 0; y < script.length; y++){
		if(elements[i] !== script[y]){
			arr.push(elements[i])
		}
	}
}
arr.forEach(function(arr){
		arr.classList.add('redBack')
})

