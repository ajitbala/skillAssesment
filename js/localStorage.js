

function setLocalData(tbName,tbData){
	localStorage.setItem(tbName,JSON.stringify(tbData));
}


function getLocalData(tbName){
	return JSON.parse(localStorage.getItem(tbName));
}

function removeLocalData(tbName){
	localStorage.removeItem(tbName);
}