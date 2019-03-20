var logoChanged = false;
var priceInserted = false;
var removeBtns = false;
function getRealNumber(_string){
	var strCompare = "0123456789";
	var realNumber = "";
	for( var i = 0; i < _string.length; i++){
		var curChar = _string.substring(i, i+1);
		if( strCompare.indexOf(curChar) != -1){
			realNumber += curChar;
		}
	}
	return parseInt(realNumber);
}
function logoChange(_logo){
	_logo.attr("src", chrome.extension.getURL("image/new_logo.png"));
	_logo.attr("srcset", chrome.extension.getURL("image/new_logo.png"));
	logoChanged = true;
}
function makeInterface(){
	$(".q-nav-primary.q-mod.q-mod-nav-primary").hide();
	var logo = $("#navGroup a img[alt=chevrolet]");
	if( logo.length && !logoChanged ){
		logoChange(logo);
		$("#navGroup .global-nav__bar > a").attr("href", "https://www.georgianchevrolet.com/");
	}
	if( logo.length == 0 && !logoChanged){
		logo = $("img.q-nav-logo-image");
		if( logo.length && !logoChanged){
			logoChange(logo);
			$("#navGroup a").attr("href", "https://www.georgianchevrolet.com/");
		}
	}
	var priceDiv = $(".summary__math-box .math-box");
	if( priceDiv.length){
	// if( priceDiv.length && !priceInserted){
		for( var i = 0; i < priceDiv.length; i++){
			var curDiv = priceDiv.eq(i);
			if( curDiv.find(".math-box_Administration_Fee").length != 0){
				continue;
			}
			var arrGroups = curDiv.find(".math-box__group");
			var lastPrice = arrGroups.eq(arrGroups.length - 1);
			if( lastPrice.find("div.math-box__line > span").text() == "Net Price"){
				// debugger;
				var netPrice = lastPrice.find("div.math-box__line div.math-box__price").text();
				var strHtml4Net = lastPrice.find("div.math-box__line > div.math-box__price").html();
				var nPrice = getRealNumber(netPrice);
				var strInserting = '<div class="math-box__group math-box_Administration_Fee math-box__group--ruled"><div class="math-box__line math-box__line--total "><span>Administration Fee</span><div class="math-box__price">$449</div></div></div>';
				// lastPrice.insertBefore(strInserting);
				$(strInserting).insertBefore(lastPrice);
				console.log("netPrice: ", nPrice);
				var strPreNetPrice = nPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var nRealNetPrice = nPrice + 449;
				var strRealNetPrice = nRealNetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				strHtml4Net = strHtml4Net.replace(strPreNetPrice, strRealNetPrice);
				lastPrice.find("div.math-box__line > div.math-box__price").html(strHtml4Net);
			} else{
				continue;
			}
		}
		priceInserted = true;
	}
	if( !removeBtns){
		if( $(".inventory-summary").length ){
			$(".inventory-summary").hide();
			$(".summary-button-container > a").hide();
			var arrHiddenBtnLabels = ['View Inventory', 'Request A Quote', 'Schedule a Test Drive', 'Locate a Dealer'];
			var arrAButtons = $("a.button");
			for( var i = 0; i < arrAButtons.length; i++){
				var curBtn = arrAButtons.eq(i);
				for( var j = 0; j < arrHiddenBtnLabels.length; j++){
					if( curBtn.text().indexOf(arrHiddenBtnLabels[j]) != -1){
						curBtn.hide();
					}
				}
			}
		}
	}
	if( logoChanged && priceInserted && removeBtns	){
		return true;
	}
	return false;
}
var interval = setInterval(function(){
	if(makeInterface() == true){
		// clearInterval(interval);
	}
});
makeInterface();
// alert("This is process.js");