# hoatzin-debugger
JS bookmarklet that serves as a simple packet sniffer specific to testing Adobe Analytics.
Bookmarklet opens a new window with a summary table of all Adobe Analytics data.  User can click the bookmarklet again after navigating or refreshing the browser to add an additional column to the Adobe Analytics data and compare which values change between pages.

* Bookmarklet (save this as a browser bookmark and use it on any site with Adobe Analytics installed, such as www.rakuten.co.jp)adobe analytics implementations.  Based off of Adobe Digital Pulse debugger.

* javascript:void(window.open("","sc_debugger","width=600,height=600,location=0,menubar=0,status=1,toolbar=0,resizable=1,scrollbars=1").document.write("<script language=\"JavaScript\" id=dbg src=\"http://localhost/projects/new_debugger_tool/getimgrequest.js\"></"+"script>")) 