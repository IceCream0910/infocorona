$(".dg-map svg")
    .mouseover(function(event) {
        var _path = event.target;
        var city_name = _path.id;
        var new_p = document.createElement("p");
        var province = $(_path).parent()[0].id;
        if (city_name) {
            const target = data.region[city_name];
            d3.select(_path).style("opacity", "0.7");
            let html = "";
            if (target.content) {
                html += `<div class="modal_wrap">
        <div class="modal_title">${target.region}</div>
        <div class="modal_content">${
          data.distance[target.type].title
        }</div></div>`;
                target.content.forEach((k) => {
                    html += `<div class="modal_wrap"><div class="modal_title" style="color:">${
            k.region
          }</div>
        <div class="modal_content">${data.distance[k.type].title}</div></div>`;
                });
            } else {
                html += `<div class="modal_wrap"><div class="modal_title">${
          target.region
        }</div>
        <div class="modal_content">${
          data.distance[target.type].title
        }</div></div>`;
            }
            $("#modal")
                .css({
                    display: "block",
                    left: event.clientX,
                    top: event.clientY,
                })
                .html(html);
        }
    })
    .mouseout(function(event) {
        var _path = event.target;
        // d3.select(_path).style("fill", "#fff");
        d3.select(_path).style("opacity", "1");
        if (_path) {
            $("#modal").css({
                display: "none",
            });
        }
    });

function go_branch(city_do) {
    var Arr = Array(
        "sejong",
        "chungnam",
        "jeju",
        "gyeongnam",
        "gyeongbuk",
        "jeonbuk",
        "chungbuk",
        "gangwon",
        "gyeonggi",
        "jeonnam",
        "ulsan",
        "busan",
        "daegu",
        "daejeon",
        "incheon",
        "seoul",
        "gwangju"
    );

    var strArr = Array(
        "세종특별자치시",
        "충청남도",
        "제주특별자치도",
        "경상남도",
        "경상북도",
        "전라북도",
        "충청북도",
        "강원도",
        "경기도",
        "전라남도",
        "울산광역시",
        "부산광역시",
        "대구광역시",
        "대전광역시",
        "인천광역시",
        "서울특별시",
        "광주광역시"
    );
    var idx = Arr.indexOf(city_do);
    console.log(strArr[idx]);
    result(strArr[idx], strArr[idx]);
    $(".main_result_content").hide();
    $("html").scrollTop(0);
}
/*가맹점 지도 색칠*/
$(document).ready(function() {
    var Arr = Array(
        "sejong",
        "chungnam",
        "jeju",
        "gyeongnam",
        "gyeongbuk",
        "jeonbuk",
        "chungbuk",
        "gangwon",
        "gyeonggi",
        "jeonnam",
        "ulsan",
        "busan",
        "daegu",
        "daejeon",
        "incheon",
        "seoul",
        "gwangju"
    );
    Arr.forEach((e) => {
        let type = data.region[e].type;
        $(`#${e}`).css("fill", data.distance[type].color);
        $(`#${e}`).css("stroke", "white");
        $(`#${e}`).css("stroke-width", "3px");
    });
});
