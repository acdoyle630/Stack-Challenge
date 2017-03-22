var text ='';
function length (){
	iterate = 0;
	while(test.get(iterate) !== null) {
		iterate++;
	}
	test.remove(iterate);
	return current;
}
document.getElementById('save').addEventListener('click', function(){
	test.add(document.getElementById('textBox').value);
});

document.getElementById('dump').addEventListener('click', function(){
	console.log(test.getTail());
	length();


});

var test = linkedListGenerator();
/*console.log(test.add(text));
console.log(test.getHead());*/


