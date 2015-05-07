/*
 * sc_comparedebugger v1.1
 * @author Elliot Eaton
 */
 
//setTimeout(function(){
	// insert into bookmark with following code
	//javascript:void(window.open("","sc_debugger","width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1").document.write("<script language=\"JavaScript\" id=dbg src=\"http://localhost/projects/new_debugger_tool/getimgrequest.js\"></"+"script>"));
//javascript:void(window.open("","sc_debugger","width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1").document.write("<script language=\"JavaScript\" id=dbg src=\"//localhost/projects/new_debugger_tool/sc_hoatzin.js\"></"+"script>"));
	var sTemporary = {};

	if(!called){
		var sHoatzin = {};
		var iteration;
		var called=0;
	};
		
	function gup( name )
	{
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( document.getElementById("dbg").src );
	  if( results == null )
		return true;
	  else if( results[1] == "0" || results[1] == "false" )
		return false;
	  else
		return true;
	}


	function s_rep(s,n,meth,imgNum) {
			var sURL=s.replace(/\%3Cb\%3EParameter\:\%3C\/b\%3E\%20/gi,'').replace(/\%20\%3C\/td\%3E\%3Ctd\%3E\%20/gi,'');
			s = s.replace(/&([^&]*)/g,"~y~$1");

			if (s_object_names)
			{
				
			var stats_domain=s.replace(/^https*:\/\/([^\/]*).*/,"$1").split('.');

				
				var subs=s.replace(/.*?(([cv][0-9]{1,2}=[^<]*<\/td><\/tr><tr><td align = .right. nowrap>)+).*/g,"$1");
				s=s.replace(/(.*?)((<\/td><\/tr><tr><td align = .right. nowrap>[cv][0-9]{1,2}=[^<]*)+)(.*)/g,"$1~~placeholder~~$4");
				//alert(s);
				subs=subs.replace(/([cv])([0-9])=/g,"$10$2=");
				subs=subs.replace(/c((\|){0,1}[0-9]{1,2})=/g,"~z~$1=");
				var subs_array = subs.split(/<\/td><\/tr><tr><td align = .right. nowrap>/g);
				subs_array.sort();
				subs=subs_array.join("<\/td><\/tr><tr><td align = \"right\" width=\"165px\" nowrap>");
				subs=subs.replace(/~z~/g,"c");
				subs=subs.replace(/([cv])0([0-9])/g,"$1$2");
				s=s.replace(/~~placeholder~~/,subs);
				
				s=s.replace(/c([0-9]{1,2})=/g,"prop$1 </td><td> ");
				s=s.replace(/h([0-9]{1,2})=/g,"hier$1 </td><td> ");
				s=s.replace(/v([0-9]{1,2})=/g,"eVar$1 </td><td> ");
				s=s.replace(/l([0-9]{1,2})=/g,"list$1 </td><td> ");
				
				var context=s.replace(/.*~y~c\.([^\.]*)~y~\.c~y~.*/,"$1");
				context = context.replace(/~y~/g,"~y~ <b>Context: </b>").replace(/=/g," </td><td> ");
				s=s.replace(/~y~c\.([^\.]*)~y~\.c/,context);

				s=s.replace(/pageName=/,"pageName </td><td> ");
				s=s.replace(/pageType=/,"pageType </td><td> ");
				s=s.replace(/server=/,"server </td><td> ");
				s=s.replace(/products=/,"products </td><td id='productList'> ");
				s=s.replace(/events=/,"events </td><td> ");
				s=s.replace(/xact=/,"Transaction ID </td><td> ");
				s=s.replace(/purchaseID=/,"purchase ID </td><td> ");
				s=s.replace(/ch=/,"channel </td><td> ");
				s=s.replace(/vmt=/,"Visitor Migration Key </td><td> ");
				s=s.replace(/vmf=/,"Visitor Migration Server </td><td> ");
				s=s.replace(/vvp=/,"Variable Provider (Genesis) </td><td> ");
				s=s.replace(/tnt=/,"TNT Var </td><td> ");
				s=s.replace(/state=/,"state </td><td> ");
				s=s.replace(/zip=/,"zip </td><td> ");
				s=s.replace(/vID=/,"Visitor ID </td><td> ");
				s=s.replace(/vid=/,"Visitor ID </td><td> ");
				s=s.replace(/pe=/,"Request Type </td><td> ");
				/*Mobile */
				s=s.replace(/gn=/,"pageName </td><td> ");
				s=s.replace(/sv=/,"server </td><td> ");
				s=s.replace(/gt=/,"pageType </td><td> ");
				s=s.replace(/pl=/,"products </td><td> ");
				s=s.replace(/pi=/,"purchaseID </td><td> ");
				s=s.replace(/ev=/,"events </td><td> ");
				
				s=s.replace(/ce=/,"charSet </td><td> ");
				s=s.replace(/cc=/,"currencyCode </td><td> ");
				s=s.replace(/cdp=/,"cookieDomainPeriods </td><td> ");
				s=s.replace(/cl=/,"cookieLifetime </td><td> ");
				s=s.replace(/\/5\/=/,"mobile </td><td> ");
				s=s.replace(/\/1\/=/,"mobile </td><td> ");
				s=s.replace(/bw=/,"Browser Width </td><td> ");
				s=s.replace(/bh=/,"Browser Height </td><td> ");
				s=s.replace(/ct=/,"Connection Type </td><td> ");
				s=s.replace(/hp=/,"Home Page? </td><td> ");
				s=s.replace(/pid=/,"Page ID (ClickMap) </td><td> ");
				s=s.replace(/pidt=/,"Page ID Type (ClickMap) </td><td> ");
				s=s.replace(/ndh=/,"Sent From JavaScript File? </td><td> ");
				s=s.replace(/oid=/,"Object ID (ClickMap) </td><td> ");
				s=s.replace(/oidt=/,"Object ID Type (ClickMap) </td><td> ");
				s=s.replace(/ot=/,"Object Tag (ClickMap) </td><td> ");
				s=s.replace(/oi=/,"Source Index (ClickMap) </td><td> ");
				s=s.replace(/ns=/,"Name Space </td><td> ");
				s=s.replace(/ts=/,"Timestamp </td><td> ");
				s=s.replace(/AQB=/,"Query String Beginning </td><td> ");
				s=s.replace(/AQE=/,"Query String End </td><td> ");
				
				var current_date = s.replace(/.*~t=([^~]*).*/,"$1");
				current_date = formatDate(s_epa(current_date));
				s=s.replace(/t=([^~]*)/,"Date/Time </td><td> "+current_date);
				s=s.replace(/s=/,"Screen Resolution </td><td> ");
				s=s.replace(/c=/,"Color Depth </td><td> ");
				s=s.replace(/j=/,"JavaScript Version </td><td> ");
				s=s.replace(/v=/,"JavaScript Enabled </td><td> ");
				s=s.replace(/k=/,"Cookies Supported </td><td> ");
				s=s.replace(/r=/,"Referring URL </td><td> ");
				s=s.replace(/g=/,"Current URL </td><td> ");
				s=s.replace(/D=/,"Dynamic Copy of: ");
				s=s.replace(/p=/,"Plug-ins </td><td> ");
	//			s=s.replace(/=/," </td><td> ");
				s=s.replace(/,/g,", ");
			
				
		
				
				if(n!=' ')
					s='<table class = \'debugtable\' ><tr><td align = \'right\' width=\"165px\" nowrap>'+s+'</td></tr></table>'
			} 
			
			if(url_decode) s=s_epa(s);	
			s = s.replace(/~y~/g,n);
			sTemporary[imgNum]=s;
			return s
	}
	 
	function sToObject(tableName,sTemp){
		var tempArray={};
		tempArray[tableName] = sTemp.split("nowrap>");
		var len = tempArray[tableName].length
		
		
		if(!called){
			iteration = "img0";
		}else if(called){
			iteration = "img" + called
		};
		if(!sHoatzin[iteration]){
			sHoatzin[iteration]= {};
		};
		sHoatzin[iteration][tableName]={}
		sHoatzin[iteration][tableName]['Report Suite'] = tempArray[tableName][1].match(/\/b\/ss\/(\w*)\//i)[1];
		sHoatzin[iteration][tableName]['Version of Code'] = tempArray[tableName][1].match(/\/b\/ss\/\w*\/\w*\/([\w\.]*)\//i)[1];
		for (var i=0; i<len;i++){
			var temp=tempArray[tableName][i].replace(/\ <.*/,"")
			var length2 = temp.length +11
			if(typeof tempArray[tableName][i] !== undefined){
				sHoatzin[iteration][tableName][temp] = tempArray[tableName][i].substring(length2).replace(/\<.*/,"");
			};
		};
	}; 


	function s_epa(s) {
		var ret_val = "";
		if(/\%u/.test(s))
			ret_val = unescape(s.replace(/\+/g,' '));
		else
			try{ret_val = decodeURIComponent(s);}
			catch (e) { ret_val = unescape(s.replace(/\+/g,' '));}
		
		return ret_val;
	};
	 
	function formatDate(current_date) {


	var month_names = new Array ( );
	month_names[month_names.length] = "January";
	month_names[month_names.length] = "February";
	month_names[month_names.length] = "March";
	month_names[month_names.length] = "April";
	month_names[month_names.length] = "May";
	month_names[month_names.length] = "June";
	month_names[month_names.length] = "July";
	month_names[month_names.length] = "August";
	month_names[month_names.length] = "September";
	month_names[month_names.length] = "October";
	month_names[month_names.length] = "November";
	month_names[month_names.length] = "December";
	var hour = parseInt(current_date.replace(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4,4}) ([0-9]{1,2}):([0-9]{1,2}).*/,"$4"));
	var minute = parseInt(current_date.replace(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4,4}) ([0-9]{1,2}):([0-9]{1,2}).*/,"$5"));

	return month_names[parseInt(current_date.replace(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4,4}) ([0-9]{1,2}):([0-9]{1,2}).*/,"$2"))] + " " + current_date.replace(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4,4}) ([0-9]{1,2}):([0-9]{1,2}).*/,"$1") + ", " + current_date.replace(/([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4,4}) ([0-9]{1,2}):([0-9]{1,2}).*/,"$3") + " at " + (hour>12?hour-12:hour) + ":" + (minute<10?"0"+minute:minute) + " " + (hour>12?"PM":"AM");

	}
	// Requests in Images, Flash Movies, and global/window member image objects
	function request_list_get(sc) {
		var
			request_list = new Array;
			document.getElementById("sc_count").innerHTML="0";

		if (window.opener) {
			
			// SiteCatalyst Images
			if (window.opener.document.images) {
				for (var image_num = 0;image_num < window.opener.document.images.length;image_num++) {
					var
						src = window.opener.document.images[image_num].src;
					if (src.indexOf('/b/ss/') >= 0) {
						if(sc){
							var request = new Object;
							request.code = 'sc';
							request.method = 'SiteCatalyst Image';
							request.url    = src;
							request_list[request_list.length] = request;
						}
						document.getElementById("sc_count").innerHTML++;
			
					}
				}
			}
			// Global Image Objects
			for (var window_member in window.opener) {
				if ((window_member.substring(0,4) == 's_i_') && (window.opener[window_member].src)) {
					var
						src = window.opener[window_member].src;
					if (src.indexOf('/b/ss/') >= 0) {
						if(sc){
							var request = new Object;
							request.code = 'sc';
							request.method = 'SiteCatalyst Image';
							request.url    = src;
							request_list[request_list.length] = request;
						}
						document.getElementById("sc_count").innerHTML++;
					}
				}
			}
		}
	 
		return request_list;
	}
	 
	function request_list_display(request_list,auto_refresh,url_decode,s_object_names) {
		var
			cell = document.getElementById('request_list_cell'),
			display = '';
		if (cell) {
			if ((auto_refresh) || (cell.innerHTML.toUpperCase().indexOf("TABLE") < 0)) {
				display += "<table border=\"0\" cellpadding=\"2\" cellspacing=\"1\" width=\"100%\"><tr><td style=\"font:bold 11px arial,sans-serif;color:#000000;padding: 1px 3px 1px 3px\">"+request_list.length+" Request"+(request_list.length==1?"":"s")+" Displayed</td></tr>";
				if (request_list.length > 0) {
					for (var request_num = 0;request_num < request_list.length;request_num++) {
						var request_box = s_rep(request_list[request_num].url,(s_object_names? "</td></tr><tr><td width=\"165px\" align = \'right\' nowrap>" :"<br>"),request_list[request_num].method,request_num);
										
						display += ''
							+ "<tr bgcolor=\"" + (request_num % 2 == 0 ? "#EFEFEF" : "#EFEFEF") + "\"><td style=\"border: 0 none;font:11px arial,sans-serif;color:#000000;\">"
							+ "<tr style=\"font-size:8px;\"><td height=\"8px\"> </td></tr>"
							
						;
					}
				} else {
					display += "<tr><td align=\"center\" style=\"font:11px arial,sans-serif;color:#FF0000;\">No Requests Found</td></tr>";
				}
				display += "</table>";
				var imgCount = document.getElementById("sc_count").innerHTML
				for(var i=0;i<imgCount;i++){
					sToObject("table"+i,sTemporary[i]);
				};
			};
		};
	};
	 
	function request_list_run(){
		var qs = "";
			if(!window.auto_refresh) qs+="auto_refresh=0&";
			if(!window.url_decode) qs+="url_decode=0&";
			if(!window.s_object_names) qs+="s_object_names=0&";
			if(!window.sc) qs+="sc=0&";

		
		request_list_display(
			request_list_get(window.sc),
			window.auto_refresh,
			window.url_decode, 
			window.s_object_names
			
		);
	//	setTimeout("request_list_run()",5000);
		//request_list_run()
	}

	if(!called){
		//Header
		document.write("<!DOCTYPE html><head><title>Site Navi Design Team - Hoatzin Debugger</title>"
			+ "<link rel=\"shortcut icon\" href=\"//www.digitalpulse.omniture.com/dp/digitalpulse.ico\">"
			+ "<link rel=\"stylesheet\" type=\"text/css\" href=\" //www.rakuten.co.jp/com/js/omniture/plugin/hoatzin/css/sc_hoatzin.css\">"
			//+ "<link rel=\"stylesheet\" type=\"text/css\" href=\" //localhost/projects/new_debugger_tool/debugger.css\">"
			+ "</head><body style=\"padding:10px\">"
			+ "<form name=\"debugger\">"
			+ "<div id=\"help\" class=\"help\">Try asking Takeda-san?</div>"
			+ "<div id=\"char_limit\" class=\"help\">There is a 2083 character limit to the length of a URL for IE versions 4-8. IE9 extends the length to over 5000 characters. This limit can cause truncation in your data collection for applicable users.  The DigitalPulse Debugger alerts you to situations where you may need to reduce the length of the URL to ensure quality data capture.</div>"
			+ /* "<a href=\"http://www.omniture.com/en/products/online_analytics/digitalpulse?s_cid=dp_debugger_dp\" target=\"_blank\">*/"<img src=\"//media-cdn.tripadvisor.com/media/photo-s/01/99/4a/8a/hoatzin-guyana-s-national.jpg\" width=\"100px\" style=\"padding-bottom:10px;\" alt=\"Site Navi Design Team - Hoatzin\" border=\"0\"><p style=\"float:right;TEXT-ALIGN: center\">Let's challenge debugging life together</p>" // </a><p style=\"float:right;TEXT-ALIGN: center\">Bookmark Current Options: <a style=\"BORDER-BOTTOM: #70a100 2px outset; BORDER-LEFT: #70a100 2px outset; BACKGROUND: #70a100; COLOR: #fff; BORDER-TOP: #70a100 2px outset; BORDER-RIGHT: #70a100 2px outset; TEXT-DECORATION: none\" id=\"bookmarklet\" href=\"javascript:void(window.open(%22%22,%22stats_debugger%22,%22width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1%22).document.write(%22<script%20language=\\\%22JavaScript\\\%22%20id=dbg%20src=\\\%22http://localhost/projects/new_debugger_tool/getimgrequest.js\\\%22></%22+%22script>%22%20+%20%22<script%20language=\\\%22JavaScript\\\%22>window.focus();</script>%22));\">Site Navi Design Team - Hoatzin Debugger</a><br/><span id=\"box\"></span></p>"
			+ "<div class=\"rpt_header\"><h1 class=\"rpt_title\">Site Navi Design Team - Hoatzin Debugger</h1><div class=\"help_link\"><a onMouseOver=\"javascript:document.getElementById('help').style.visibility='visible'\" onMouseOut=\"javascript:document.getElementById('help').style.visibility='hidden'\">Help</a></div></div> "
		);
		
		// Requests 
		document.write(''
			+ "<table border=\"0\" width=\"100%\">"
			+ "<a href=\"//www.omniture.com/en/products/online_analytics/sitecatalyst?s_cid=dp_debugger_sc\" target=\"_blank\">SiteCatalyst</a>&nbsp;<b>[<span id=\"sc_count\">0</span>]</b></td><td class=\"options\">"
			+ "</td></tr></table></td></tr>"
			+ "</td></tr>"
			+ "</table>"
			+ "<table border=\"0\" width=\"100%\">"
			+ "<tr><td id=\"request_list_cell\" align=\"center\" style=\"border: 0 none;\"></td></tr>"
			+ "</table>"
		);
		
		// Title, status, and background color
		document.title = 'Site Navi Design Team - Hoatzin Debugger';
		window.status = 'Site Navi Design Team - Hoatzin Debugger';
		 
		// Get and display requests
		window.url_decode = gup("url_decode"); 
		window.auto_refresh = gup("auto_refresh");
		window.s_object_names = gup("s_object_names");
		window.sc = gup("sc");
	}
	
	request_list_run();
	
	if(!called){
		// content tables
		var imgCount = parseInt(document.getElementById("sc_count").innerHTML)
		for(var i=0;i<imgCount;i++){
			var tableID = "sc_debug_table"+i
			document.write(''
				+ "<p class=imgNum>imgrequest#"+i+"</p>"
				+ "<table id=\""+tableID+"\" class=\"sc_debug_table\" border=\"0\" width=\"100%\">"
				+ "</table>"
			);
		};
		// Footer
		document.write(''
			+ "<table border=\"0\" cellpadding=\"10\" width=\"100%\">"
			+ "<tr><td style=\"border: 0 none;\"><br/><input type=\"button\" name=\"close2\" value=\"Close\" onclick=\"window.close();\"></td></tr></table>"
			+ "</form>"
			+ "</body></html>"
		);
	};
	
	function addParameter(type,counter,objectTableName,newTable){
		for(var i=0;i<counter;i++){
			if(counter > 1){
				var thisCell = type + i
			}else{
				var thisCell = type
			};
			//create left column with parameter
			var tr = document.createElement('tr');
			tr.className = thisCell;
			var tdParameter = document.createElement('td');
			tdParameter.appendChild(document.createTextNode(thisCell));
			tdParameter.className = thisCell + " parameter";
			tr.appendChild(tdParameter);
			
			var calledCount = called+1
			for(var j=0;j<calledCount;j++){
				var imgNum = "img" + j;
				var tdValue = document.createElement('td');
				tdValue.className= thisCell + " value"
				tdValue.appendChild(document.createTextNode(sHoatzin[imgNum][objectTableName][thisCell]));
				if(typeof sHoatzin[imgNum][objectTableName][thisCell] !== "undefined"){
					tr.style.display="table-row";
				}else if(typeof sHoatzin[imgNum][objectTableName][thisCell] == "undefined"){
					tr.style.display="none";
					tr.className=thisCell + " noData";
				}
				tr.appendChild(tdValue);
				if(j>0){
					if(sHoatzin[imgNum][objectTableName][thisCell] !== sHoatzin["img0"][objectTableName][thisCell]){
						tr.className=thisCell + " mismatch"
					};
				};
			};
		newTable.appendChild(tr);
		};
		return newTable;
	};
			
	//Code to build my table starts from here
	function buildTable(typeOfImgRequest){
		var tableID = "sc_debug_" + typeOfImgRequest
		var oldTable = document.getElementById(tableID);
		var newTable = oldTable.cloneNode();
		
		//how do I get report suite ID, Third Party Cookies, Version of Code
		newTable = addParameter("Report Suite",1,typeOfImgRequest,newTable);
		newTable = addParameter("Version of Code",1,typeOfImgRequest,newTable);
		newTable = addParameter("Date/Time",1,typeOfImgRequest,newTable);
		newTable = addParameter("charSet",1,typeOfImgRequest,newTable);
		newTable = addParameter("Name Space",1,typeOfImgRequest,newTable);
		newTable = addParameter("cookieDomainPeriod",1,typeOfImgRequest,newTable);
		newTable = addParameter("pageName",1,typeOfImgRequest,newTable);
		newTable = addParameter("currencyCode",1,typeOfImgRequest,newTable);
		newTable = addParameter("Current URL",1,typeOfImgRequest,newTable);
		newTable = addParameter("channel",1,typeOfImgRequest,newTable);
		newTable = addParameter("server",1,typeOfImgRequest,newTable);
		newTable = addParameter("eVar",76,typeOfImgRequest,newTable);
		newTable = addParameter("prop",76,typeOfImgRequest,newTable);
		newTable = addParameter("peeVar2",1,typeOfImgRequest,newTable);

		
		oldTable.parentNode.replaceChild(newTable, oldTable);
	};
	
	//call the functions to build tables after all the objects have been defined, use loop to check for number of imgRequests
	for(var i=0;i<imgCount;i++){
		tableName= "table"+i
		buildTable(tableName);
	};


	var called = called + 1;
 //},1500)