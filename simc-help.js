function getSimc() {
	var tier15 = {
		0: "None15",
		1: "NB",
		2: "WoE",
		3: "FoN"
	}

	var tier75 = {
		0: "None75",
		1: "SotF",
		2: "SL",
		3: "Inc"
	}

	var tier90 = {
		0: "None90",
		1: "SD",
		2: "TM",
		3: "StFl"
	}

	var tier100 = {
		0: "None100",
		1: "StSt",
		2: "FoE",
		3: "NM"
	}

	var combination = [];

	for (var n15 in tier15){
		for (var n75 in tier75){
			for (var n90 in tier90){
				for (var n100 in tier100){
					if (document.querySelector("#" + tier15[n15]).checked && document.querySelector("#" + tier75[n75]).checked &&
						document.querySelector("#" + tier90[n90]).checked && document.querySelector("#" + tier100[n100]).checked){
						combination.push({ 
							name: tier15[n15] + "/" + tier75[n75] + "/" + tier90[n90] + "/" + tier100[n100],
						   	talents: n15 + "323" + n75 + n90 + n100
						});
					}
				}
			}
		}
	}

	var text = "";
	for (var i = 0; i < combination.length; i++) {
		text = text + "copy=" + combination[i].name + ",base \ntalents=" + combination[i].talents + "\n";
	}
	if (!text) text = "Please, select at least one talent for each tier.";
	$("#talents-text").val(text);
}

function copyText(element){
	var element = document.getElementById(element);
	element.select();
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}