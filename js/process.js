var logoChanged = false;
var priceInserted = false;
var removeBtns = false;
var financeChanged = false;
var financeValues = [];
var strPreNetPrice = 0;
var strRealNetPrice = 0;
var financeValue = 0;

var leaseChanged = false;
var leaseValue = 0;

function removeFooter(){
	if( document.location.href.indexOf("www.buick.ca") != -1 ||
		document.location.href.indexOf("www.chevrolet.ca") != -1 ||
		document.location.href.indexOf("www.gmccanada.ca") != -1
		){
		$("footer").remove();
	}
}
removeFooter();
function addBrochureLink(){
	var url = document.location.href;
	if( url.indexOf("build-and-price") == -1)
		return;
	var arrPictures = $("picture");
	var arrLinks = [];
	var nSiteCat = 0;
	if( url.indexOf("www.chevrolet.ca") != -1){
		nSiteCat = 1;
		arrLinks = {
			"Blazer" : "https://drive.google.com/open?id=1inl3PayK-FqZGm69Zx0CBqEmMaX1N9RZ",
			"Bolt EV" : "https://drive.google.com/open?id=15dHXvisjDL1XqEXeYp2jGFzuSZH-9KHL",
			"Camero" : "https://drive.google.com/open?id=1Qswro0zQ2kUYtI31Mkdw7aWp9QuYHKW0",
			"Colorado" : "https://drive.google.com/open?id=1O2noM5IrceXLiz7AE4OJ9VCCs9fhCkZK",
			"Corvette" : "https://drive.google.com/open?id=1Ojd-oo080vECHnRycVgtOv7fvq9FhcWg",
			"Cruze" : "https://drive.google.com/open?id=1qqg3RCQGaa5Q7qe1Vf3Ivf9gCEX7rdfE",
			"Equinox" : "https://drive.google.com/open?id=1qjPypDomgP_jq_ShDywJFSU_MZjiZhXS",
			"Express Cargo" : "https://drive.google.com/open?id=1kSSkBgsbeoxeRxUANllf9GI0SEjJsowi",
			"Express Passenger" : "https://drive.google.com/open?id=19yU5zokuaKCPamy-JBXv3W9qhg397J0x",
			"Impala" : "https://drive.google.com/open?id=134lVk8frySh97h3VcBxrY_GyFymSM4ji",
			"Malibu" : "https://drive.google.com/open?id=1HjmaILAGmx6u7JHuLmKKH-XP2iK87_uu",
			"Silverado 1500" : "https://drive.google.com/open?id=1C-_4eqpKNX_FYQZTjeUaezoc_tebSJUb",
			"Silverado 1500 LD" : "https://drive.google.com/open?id=1M26BzqUD3l_oKnxYWWlKqMXGPA0gOzgm",
			"Silverado 2500 HD" : "https://drive.google.com/open?id=15S4BlNhZICb82DF8W2s8uWNLWgP1thMk",
			"Silverado 3500 HD" : "https://drive.google.com/open?id=11jSObk9-wan9UMgy2peza0-AnaWxQry8",
			"Spark" : "https://drive.google.com/open?id=1eQkpKgZwzetki1kzoXK33Tnguyd5yd3F",
			"Surburban" : "https://drive.google.com/open?id=1EdFda1Dv5U2Z2T61T2A1sGXg4ajMOWkY",
			"Tahoe" : "https://drive.google.com/open?id=1VNrn9Q2ZkQsixin60hMwwPZPVGphNGde",
			"Traverse" : "https://drive.google.com/open?id=1WLcnbCjcicX3xhHxyZEyrr_A_B7Rm5P8",
			"Trax" : "https://drive.google.com/open?id=1KRNi-RC3GZzFMHzvBMiEvT1EJVSBt0Xn",
			"Volt" : "https://drive.google.com/open?id=1owzELt6FOKLNHrNKNTTszYjEEpw4z2eL",
		};
	} else if( url.indexOf("www.gmccanada.ca") != -1){
		nSiteCat = 2;
		arrLinks = {
			"Terrain" : "https://drive.google.com/open?id=1EHdqScBvalUp30eww93fsMku-JbhewD1",
			"Terrain Denali" : "https://drive.google.com/open?id=1EHdqScBvalUp30eww93fsMku-JbhewD1",
			"Acadia" : "https://drive.google.com/open?id=1mEK9IyWh0LQlEcePytdDyb5pjNgtwxod",
			"Acadia Denali" : "https://drive.google.com/open?id=1mEK9IyWh0LQlEcePytdDyb5pjNgtwxod",
			"Yukon" : "https://drive.google.com/open?id=1l7QXkesUXQG55RKAMCec3E8PmDUdTKb_",
			"Yukon XL" : "https://drive.google.com/open?id=1l7QXkesUXQG55RKAMCec3E8PmDUdTKb_",
			"Yukon Denali" : "https://drive.google.com/open?id=1l7QXkesUXQG55RKAMCec3E8PmDUdTKb_",
			"Yukon XL Denali" : "https://drive.google.com/open?id=1l7QXkesUXQG55RKAMCec3E8PmDUdTKb_",
			"Canyon" : "https://drive.google.com/open?id=1UQ-XhbAx4Ba7Pe4pPy1W3ekEQhCuZ78Q",
			"Cannyon All Terrain" : "https://drive.google.com/open?id=1UQ-XhbAx4Ba7Pe4pPy1W3ekEQhCuZ78Q",
			"Canyon Denali" : "https://drive.google.com/open?id=1UQ-XhbAx4Ba7Pe4pPy1W3ekEQhCuZ78Q",
			"Sierra 1500" : "https://drive.google.com/open?id=1uvvuPafdzvv9q3W0tSCgI6eAhZ7kHyLa",
			"Sierra 1500 Limited" : "https://drive.google.com/open?id=1uvvuPafdzvv9q3W0tSCgI6eAhZ7kHyLa",
			"Sierra AT4" : "https://drive.google.com/open?id=1uvvuPafdzvv9q3W0tSCgI6eAhZ7kHyLa",
			"Serria 1500 Denali" : "https://drive.google.com/open?id=1uvvuPafdzvv9q3W0tSCgI6eAhZ7kHyLa",
			"Sierra 2500HD" : "https://drive.google.com/open?id=1i0wfaw37b47YI-RY9sncj25RDTzb8s6K",
			"Sierra 3500HD" : "https://drive.google.com/open?id=1i0wfaw37b47YI-RY9sncj25RDTzb8s6K",
			"Sierra 2500 Denali HD" : "https://drive.google.com/open?id=1i0wfaw37b47YI-RY9sncj25RDTzb8s6K",
			"Sierra 3500 Denali HD" : "https://drive.google.com/open?id=1i0wfaw37b47YI-RY9sncj25RDTzb8s6K",
			// "Savana Cargo" : "Do not include brochure link",
			// "Savana Passenger" : "Do not include brochure link",
		};
	} else if( url.indexOf("www.buick.ca") != -1){
		nSiteCat = 3;
		arrLinks = {
			"Encore" : "https://drive.google.com/open?id=1K84V1UWoX9e3xHRggEVJCr_ZfxnHP3wb",
			"Envision" : "https://drive.google.com/open?id=1d534mK3IidnwN2SaaqzBQIMJu8vWViYp",
			"Enclave" : "https://drive.google.com/open?id=14GqcBSFPPhBt3pWTpJ_qV75V9zzpJ4Ry",
			"Regal Avenir" : "https://drive.google.com/open?id=1Dv29ZV5REF5f3dkCphjkXs0zB_ZO3BkQ",
			"Lacrosse Avenir" : "https://drive.google.com/open?id=1iXO5KluAXEP37JoB3P4TewLHGnY9Lpem",
			"Enclave Avenir" : "https://drive.google.com/open?id=14GqcBSFPPhBt3pWTpJ_qV75V9zzpJ4Ry",
			"Regal Sportback" : "https://drive.google.com/open?id=1Dv29ZV5REF5f3dkCphjkXs0zB_ZO3BkQ",
			"Regal GS" : "https://drive.google.com/open?id=1Dv29ZV5REF5f3dkCphjkXs0zB_ZO3BkQ",
			"Lacrosse" : "https://drive.google.com/open?id=1iXO5KluAXEP37JoB3P4TewLHGnY9Lpem",
		};
	}
	for( var i = 0; i < arrPictures.length; i++){
		var curPic = arrPictures.eq(i);
		var curDiv;
		switch( nSiteCat){
			case 1:
				curDiv = curPic.parent().parent().parent().parent().parent().parent().parent();
				break;
			case 2:
				curDiv = curPic.parent().parent().parent().parent().parent().parent();
				break;
			case 3:
				curDiv = curPic.parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
				break;

		}
		// console.log(curDiv);
		if( !curDiv)
			continue;
		var title = curDiv.find(">div").eq(1).text().trim();
		if( nSiteCat == 1){
			title = curDiv.find("h3.q-descriptive1").eq(0).text().trim();
		}
		if( nSiteCat == 3){
			title = curDiv.find("p").eq(0).text().trim();
		}
		console.log(title);
		var isFound = false;
		function isMatching(_key, _title){
			// debugger;
			switch( _key){
				case "cruze": case "corvette": if(_title.indexOf(_key) != -1) return true;
				break;
				case "camero": if( _title.indexOf("camaro") != -1) return true;
				break;
				case "surburban": if( _title.indexOf("suburban") != -1) return true;
				break;
			}
			var arr_key = _key.split(" ");
			var arr_title = _title.split(" ");
			for( var i = 0; i < arr_title.length; i++){
				if( i == 0 && arr_title[i] == "2019")
					continue;
				if( arr_key.indexOf( arr_title[i]) == -1)
					return false;
			}
			return true;
		}
		for( var key in arrLinks){
			var linkage = arrLinks[key];
			var nStartPos = title.toLowerCase().lastIndexOf(key.toLowerCase());
			// if( nStartPos != -1 && nStartPos == title.length - key.length){
			if( isMatching( key.toLowerCase(), title.toLowerCase())){
				console.log( key);
				isFound = true;
				var strLinkage = "";
				switch( nSiteCat){
					case 1:
						strLinkage = "<div style='text-align: center;'><a href='" + 
							linkage + "' style='color: #4d4d4d;' target='_blank' style='text-align: center;'>Brochure</a></div>"
						curDiv.append(strLinkage);
						break;
					case 2:
						strLinkage = "<div><a href='" + 
							linkage + "' style='color: #c00;' target='_blank' style='text-align: center;'>Brochure</a></div>"
						$(strLinkage).insertAfter(curDiv.find(">a"));
						break;
					case 3:
						curDiv.find(">a").removeClass("large-margin");
						strLinkage = "<div class='large-margin'><a href='" + 
							linkage + "' style='color: #c9480c;' target='_blank' style='text-align: center;'>Brochure</a></div>"
						$(strLinkage).insertAfter(curDiv.find(">a"));
						break;
				}
				break;
			}
		}
		if( isFound == false){
			console.log("Not found");
		}
	}
}
addBrochureLink();

function removeHeader(){
	if( document.location.href.indexOf("www.buick.ca") != -1 ||
		document.location.href.indexOf("www.gmccanada.ca") != -1
		){
		$(".q-nav-list-container").remove();
	}
	else if( document.location.href.indexOf("www.georgianchevrolet.com") != -1){
		$(".logosWrapper .franchise").remove();
	}
}
removeHeader();

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
	_logo.parent().attr("href", "https://www.georgianchevrolet.com/");

	chevrolet_logo = '<a href="https://www.chevrolet.ca/en/build-and-price" class="global-nav__brand stat-logo" data-dtm="global nav"><img alt="chevrolet" src="' + chrome.extension.getURL("image/chevrolet-logo.png") + '"></a>';
	gmc_logo = '<a href="https://www.gmccanada.ca/en/build-and-price" class="global-nav__brand stat-logo" data-dtm="global nav"><img alt="gmc" src="' + chrome.extension.getURL("image/gmc-logo.png") + '"></a>';
	buick_logo = '<a href="https://www.buick.ca/en/build-and-price" class="global-nav__brand stat-logo" data-dtm="global nav"><img alt="gmc" src="' + chrome.extension.getURL("image/buick-logo.png") + '"></a>';

	all_logos = chevrolet_logo + gmc_logo + buick_logo;
	$(all_logos).insertAfter(_logo.parent());
	// $(gmc_logo).insertAfter($(chevrolet_logo));
	$("a.stat-logo img").height("50px");
	if( document.location.href.indexOf("www.buick.ca") != -1){
		$(_logo).parent().removeClass("q-nav-logo");
	}
	if( document.location.href.indexOf("www.gmccanada.ca") != -1){
		$(_logo).width( "180px");
		$(_logo).css("max-width", "none");
		// $("nav.q-top-bar").css("background", "seagreen");
	}
	// if( document.location.href.indexOf("www.georgianchevrolet.com") != -1){

	// }

	// style = '.global.nav img'
	logoChanged = true;
}
function addLinks(){
	if( document.location.href.indexOf("www.georgianchevrolet.com") == -1){
		return;
	}
	chevrolet_logo = '<a href="https://www.chevrolet.ca/en/build-and-price" class="global-nav__brand stat-logo" data-dtm="global nav"><img alt="chevrolet" src="' + chrome.extension.getURL("image/chevrolet-logo.png") + '"></a>';
	gmc_logo = '<a href="https://www.gmccanada.ca/en/build-and-price" class="global-nav__brand stat-logo" data-dtm="global nav"><img alt="gmc" src="' + chrome.extension.getURL("image/gmc-logo.png") + '"></a>';
	buick_logo = '<a href="https://www.buick.ca/en/build-and-price" class="global-nav__brand stat-logo" data-dtm="global nav"><img alt="gmc" src="' + chrome.extension.getURL("image/buick-logo.png") + '"></a>';

	all_logos = chevrolet_logo + gmc_logo + buick_logo;
	$(all_logos).insertAfter($(".logosWrapper .dealer .logo"));
	logoChanged = true;
}
addLinks();
function calcFinance( P, r, n){
	if( r == 0){
		return Math.round(P * 1 / n * 100) / 100;
	}
	var A;
	var temp = 1;
	for( var i = 0; i < n; i++){
		temp *= ( 1 + r);
	}
	console.log( temp);
	A = Math.round(P * r * temp / (temp - 1) * 100) / 100;
	console.log( A);
	return A;
}
function calcLease(_PV, _FV, _N, _i){
	if( _i == 0){
		return -1;
	}
	var temp = 1;
	for( var i = 0; i < _N; i++){
		temp *= (1 + _i);
	}
	A = Math.round( (_PV - _FV / temp) / ((1 - 1 / temp) / _i) * 100) / 100;
	console.log(A);
	return A;
}
var strFinanceDetails = "";
	strFinanceDetails = '<span class="gmst-summary-text-extra-string"> HST and Lic Fees extra</span>';
var strLeaseDetails = "";
	strLeaseDetails = '<span class="gmst-summary-text-extra-string"> HST and Lic Fees extra</span>';
function makeInterface(){
	if( document.location.href.indexOf("www.chevrolet.ca") != -1){
		$(".q-nav-primary.q-mod.q-mod-nav-primary").hide();
	}
	var logo = $("#navGroup a img[alt=chevrolet]");
	if( logo.length && !logoChanged ){
		// $("#navGroup .global-nav__bar > a").attr("href", "https://www.georgianchevrolet.com/");
		logoChange(logo);
	}
	if( logo.length == 0 && !logoChanged){
		logo = $("img.q-nav-logo-image");
		if( logo.length && !logoChanged){
			// $("#navGroup a").attr("href", "https://www.georgianchevrolet.com/");
			logoChange(logo);
		} else if(logo.length == 0 && logoChanged){
			addLinks();
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
				strPreNetPrice = nPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				var nRealNetPrice = nPrice + 449;
				strRealNetPrice = nRealNetPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				strHtml4Net = strHtml4Net.replace(strPreNetPrice, strRealNetPrice);
				lastPrice.find("div.math-box__line > div.math-box__price").html(strHtml4Net);
			} else{
				continue;
			}
		}
		priceInserted = true;
	}
	if( priceInserted && !financeChanged ){
		var finance_container = $(".finance-options__container");
		if( finance_container.length != 0){
			var finance_currencies = finance_container.find(">.finance-options__content .finance-options__content-finance");
			if( finance_currencies.length != 0) {
				var currency = finance_currencies.eq(0);
				if( currency.find(".gmst-summary gmwc-currency-format").length ){
					console.log(strFinanceDetails);
					var A = currency.find(".gmst-summary gmwc-currency-format").eq(0).html().replace("$", "") * 1;
					var P = strPreNetPrice.split(",").join( "") * 1 + 449;
					var n = currency.find("span.gmst-summary-term").eq(0).html() * 1;
					var r = currency.find("span.gmst-pe-finance-summary-termApr").eq(0).html().replace("%", "") * 1 / 100 / 12;
					console.log("P:", P);
					console.log("A:", A);
					console.log("n:", n);
					console.log("r:", r);
					financeValue = calcFinance(P, r, n);
					financeChanged = true;
					$(".finance-options__container > .finance-options__content .finance-options__content-finance .gmst-summary-text").html(strFinanceDetails);
				}
			}
		}
	}
	if( financeChanged){
		$(".finance-options__container > .finance-options__content .finance-options__content-finance .gmst-summary gmwc-currency-format").html("$" + financeValue);
		$(".finance-options__container > .finance-options__content .finance-options__content-finance .gmst-summary .gmst-summary-permonth").html("monthly for ");
		$(".finance-options__container > .finance-options__content .finance-options__content-finance .gmst-summary-text gmwc-currency-format").html("$" + 	strRealNetPrice);
		if( $(".finance-options__container > .finance-options__content .finance-options__content-finance .gmst-summary-text .gmst-summary-text-extra-string").length == 0){
			$(".finance-options__container > .finance-options__content .finance-options__content-finance .gmst-summary-text").append(strFinanceDetails);
		}
	}
	if( priceInserted && !leaseChanged ){//finance-options__content-lease
		// $("#gmwc-modal")
		var finance_container = $(".finance-options__container");
		if( finance_container.length != 0){
			var finance_currencies = finance_container.find(">.finance-options__content .finance-options__content-lease");
			if( finance_currencies.length != 0) {
				var currency = finance_currencies.eq(0);
				if( currency.find(".gmst-summary gmwc-currency-format").length ){
					var PV = strPreNetPrice.split(",").join( "") * 1 + 449;
					var _i = currency.find("span.gmst-pe-finance-summary-termApr").eq(0).html().replace("%", "") * 1 / 100 / 12;
					var N = currency.find("span.gmst-summary-term").eq(0).html() * 1;
					$("gm-translate").click();
					$("#gmwc-modal").css("opacity", "0");
					setTimeout( function(){
						var leaseEle = $("span.gmst-modal-lease").eq(1);
						var value = leaseEle.text().replace( leaseEle.find("gm-translate").eq(0).text(), "");
						value = value.replace("$", "");
						var FV = parseInt(value.replace(",", ""));

						console.log("PV:", PV);
						console.log("N:", N);
						console.log("_i:", _i);
						console.log("FV: ", FV);
						leaseValue = calcLease(PV, FV, N, _i);

						$(".gmst-modal-disclosure-close").click();
						console.log(".gmst-modal-disclosure-close clicked");
						$("#gmwc-modal").css("opacity", "1");
					});
					leaseChanged = true;
				}
			}
		}
	}
	if( leaseChanged){
		$(".finance-options__container > .finance-options__content .finance-options__content-lease .gmst-summary gmwc-currency-format").html("$" + leaseValue);
		$(".finance-options__container > .finance-options__content .finance-options__content-lease .gmst-summary .gmst-summary-permonth").html("monthly for ");
		// $(".finance-options__container > .finance-options__content .finance-options__content-lease .gmst-summary-text gmwc-currency-format").html("$" + 	strRealNetPrice);
		if( $(".finance-options__container > .finance-options__content .finance-options__content-lease .gmst-summary-text .gmst-summary-text-extra-string").length == 0){
			$(".finance-options__container > .finance-options__content .finance-options__content-lease .gmst-summary-text").append(strLeaseDetails);
		}
	}
	// for( var j = 0; j < financeValues.length; j++){
	// 	$(".finance-options__container>.finance-options__content .gmst-summary gmwc-currency-format").eq(j).html(financeValues[j]);
	// }
	if( !removeBtns){
		if( $(".inventory-summary").length ){
			$(".inventory-summary").hide();
			// $(".summary-button-container > a").hide();
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