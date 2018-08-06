
function returnUiSkillTable(csvData){
	setLocalData("tbl_uiskill",csvData);
	if(getLocalData("tbl_uiskill")!=null){
		$("#tbl_ui").html(returnTable(csvData));
	}
}

function returnTable(data){
	var tblHead="",tblData="",tblRow="";
	
	if(data.length > 0){
		for(var i=0;i<data[0].length;i++){
			tblHead = tblHead + "<th>"+data[0][i]+"</th>";
		}
	}
	
	if(data.length > 1){
		for(var j=1;j<data.length;j++){
			var colData = data[j];
			tblData = "";
			for(var k=0;k<colData.length;k++){
				tblData = tblData + "<td>"+colData[k]+"</td>";
			} 
			tblRow = tblRow + "<tr>"+tblData+"</tr>";
		}
	}

	var tblHtml = '<table class="table table-striped"><thead><tr>'+tblHead+'</tr></thead><tbody>'+tblRow+'</tbody></table>';
	return tblHtml;
}

function returnBarGraphData(data){
	if(data.length > 0){
		var y_axis=[],shu_array=[],ha_array=[],ri_array=[];

		for(var j=1;j<data.length;j++){
			var colData = data[j];
			var shu_counter = 0,ha_counter=0,ri_counter=0;
			y_axis.push(data[j][0]);
			for(var k=1;k<colData.length;k++){
				if(colData[k] == "Shu"){
					shu_counter++;
				}else if(colData[k] == "Ha"){
					ha_counter++;
				}else if(colData[k] == "Ri"){
					ri_counter++
				}
			} 
			shu_array.push(shu_counter);
			ha_array.push(ha_counter);
			ri_array.push(ri_counter);
		}

		var chartData = [{
					        name: 'Shu',
					        data: shu_array
					    }, {
					        name: 'Ha',
					        data: ha_array
					    }, {
					        name: 'Ri',
					        data: ri_array
					    }];
		return {"y_axis":y_axis,"x_axis":chartData};
	}
	
}

function returnPieChartData(data){
	if(data.length > 0){
		var shu_counter = 0,ha_counter=0,ri_counter=0;
		for(var j=1;j<data.length;j++){
			var colData = data[j];
			for(var k=1;k<colData.length;k++){
				if(colData[k] == "Shu"){
					shu_counter++;
				}else if(colData[k] == "Ha"){
					ha_counter++;
				}else if(colData[k] == "Ri"){
					ri_counter++
				}
			} 
		}
		var totalSkill = shu_counter+ha_counter+ri_counter;
		var shupercent = (shu_counter/totalSkill)*100;
		var hapercent = (ha_counter/totalSkill)*100;
		var ripercent = (ri_counter/totalSkill)*100;

		var pieData = [{
							name: 'Ri',
               				y: ripercent
					  },{
							name: 'Ha',
               				y: hapercent
					  },{
							name: 'Shu',
               				y: shupercent
					  }];
		return pieData;
	}
}