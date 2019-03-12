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
	if(num==""){
		document.getElementById("input").innerText=num;
	}
	else{
		document.getElementById("input").innerText=FormatNumber(num);
	}	
}

function FormatNumber(num){
	var n = Number(num);
	var value = n.toString();
	return value;
}

/* numbers code*/
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var input=FormatNumber(getInput());
		if(input!=NaN){ 
			input=input+this.id;
			setInput(input);
        }
	});
}

/* operators code*/
for(var i =0; i<operator.length; i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear_all"){
			setTotalResult("");
			setInput("");
		}
		else if(this.id=="delete_last"){
			var input=FormatNumber(getInput());
			if(input){
				input= input.substr(0,input.length-1);
				setInput(input);
			}
        }
		else{
			var input=getInput();
			var memory=getTotalResult();
			
			if(input!="" || memory!=""){
				input= input==""?input:FormatNumber(input);
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

