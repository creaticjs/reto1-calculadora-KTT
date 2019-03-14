var operator = document.getElementsByClassName("operator");
var number = document.getElementsByClassName("number");

/*display code*/
function getTotalResult(){
	return document.getElementById("total-result").innerText;
}
function setTotalResult(num){
	document.getElementById("total-result").innerText=num;
}
function getInput(){
	return document.getElementById("input").innerText;
}
function setInput(num){
	document.getElementById("input").innerText=num;
}

/* numbers code*/
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		disable=false;
		var input=getInput();
		if(input!=NaN){ 
			input=input+this.id;
			if(this.id=="." && disable==false){
				disable=true;
				document.getElementById(".").disabled=true;
			}
			setInput(input);
        }
	});
}

/* operators code*/
for(var i =0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){

		document.getElementById(".").disabled = false;

		if(this.id=="clear_all"){
			setTotalResult("");
			setInput("");
		}
		else if(this.id=="delete_last"){
			var input=getInput();
			if(input){
				input= input.substr(0,input.length-1);
				setInput(input);
			}
        }
		else{
			var input=getInput();
			var memory=getTotalResult();
			
			if(input!="" || memory!=""){

				memory=memory+input;
				if(this.id=="="){
					var result=eval(memory);
					setInput(result);
					setTotalResult("");
				}
				else{
					memory=memory+this.id;
					setTotalResult(memory);
					setInput("");
				}
			}
		}		
	});
}

