function addOption(selectbox,text,value )
				{
					var optn = document.createElement("OPTION");
					optn.text = text;
					optn.value = value;
					selectbox.options.add(optn);
				}

			function addOption_list(){
				var quali = new Array("B.E","M.E","BCA","MCA");
				var exp=new Array("1 Year","2 Year","3 Year","4 Year");
				var lang=new Array("C/C++","Java","C#","PHP","Python");
				var check_value=
            [
                {languagename : "C/C++",Isenable : "True"},
                {languagename : "Java",Isenable  : "True"},
                {languagename : "C#",Isenable  : "False"},
                {languagename : "PHP",Isenable  : "False"},
                {languagename : "Pyphon",Isenable  : "False"},
                ];
	
				for (var i=0; i < quali.length;++i){
   				addOption(document.drop_list.quali_list, quali[i], quali[i]);

				}
				for(var i=0;i<exp.length;++i){
					addOption(document.drop_list.exp_list, exp[i], exp[i]);
				}
				
				for (var i=0; i < check_value.length; i++)
                {
                    var cbh = document.getElementById('cb');
                    var val = '1';
                    var cap = check_value[i].languagename;
                    var br =document.createElement("br");
                    var cbc = document.createElement('input');
                    cbc.type = 'checkbox';
                    cbc.name = val;
                    cbc.value = cap;
                    cbh.appendChild(cbc);
                    cb.appendChild(document.createTextNode(cap));
                    cb.appendChild(br);
                    if (check_value[i].Isenable === "True")
                    {
                        cbc.checked=true;
                    }
                }
			}
			function myFunction(){
				var lantxt=[];
				var lan=document.querySelectorAll('input[type=checkbox]');
				//console.log("lan",lan);
				//var gentxt="";
				//for(var i=0;i<gen.length;i++){
				//	if(gen[i].checked){
				//		gentxt=gentxt+gen[i].value+ " ";
				//	}
				//}
				
				for(var i = 0; i < lan.length; i++) {
					if(lan[i].checked) {
						console.log("lan[i]",lan[i].value)
						lantxt.push(lan[i].value);
					}
				}
				
				var obj={
				firstname : document.forms["myForm"]["firstname"].value,
				lastname : document.forms["myForm"]["lastname"].value,
			    email : document.forms["myForm"]["email"].value,
				number : document.forms["myForm"]["number"].value,
				address : document.forms["myForm"]["address"].value,
				username : document.forms["myForm"]["username"].value,
				pwd : document.forms["myForm"]["password"].value,
				exp:document.forms["myForm"]["exp_list"].value,
				qual:document.forms["myForm"]["quali_list"].value,
				gen:document.querySelector('input[name=gender]:checked').value,
				languages:lantxt
				};
				//lantxt;
				
					
				console.log(obj);
		    }