$(function (){
  $("#dataDisplay").click(function(){
    $.getJSON("js/data.json", function (data){
      var map = $("#map");
      var strHtml = "";
      //存储数据的变量 
      map.empty();
      //清空内容 
      $.each(data, function (infoIndex, info){
        strHtml += "<hr>";
        strHtml += "id: " + info["id"] + "<br>";
        strHtml += "longitude: " + info["location.longitude"] + "<br>";
        strHtml += "latitude: " + info["location.latitude"] + "<br>";
        strHtml += "</hr>" 
      }) 
      map.html(strHtml);
      //显示处理后的数据 
    }) 
  }) 

  $("#endDisplay").click(function(){
      $("#map").empty();
    }
  );


  $("#startDisplay").click(function(){
    d3.json("js/data.json", function(error, data) {
      //插入分组元素
      var location = svg.selectAll(".location")
                        .data(data.location)
                        .enter()
                        .append("g")
                        .attr("class","location")
                        .attr("transform",function(d){
                                                  //计算标注点的位置
                                                  var coor = projection([d.log, d.lat]);
                                                  return "translate("+ coor[0] + "," + coor[1] +")";
                                                  });
      location.append("circle")
        .attr("r",7);
    });
  });







});
