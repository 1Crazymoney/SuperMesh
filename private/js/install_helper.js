var fs = require('fs');
var SuperMesh = require("./app_functions.js");
var lshw = require("./lshw.js");

	var APFile = '/opt/SuperMeshData/hostapd_conf.data'
	var APData = ''

var obj = JSON.parse(fs.readFileSync(APFile, 'utf8'));

console.log(obj.wlan_Interface);

/*
lshw.status(function(err, status) {
	//console.log(status);
	for (i = 0; i < status.length; i++) {
		//console.log(status[i]);
		if ( status[i].network === 'wlan0' ) {
			if ( status[i].driver === 'brcmfmac' ) {
				console.log(status[i].driver);
				SuperMesh.RunCmd('sudo rm -f /usr/sbin/hostapd; sudo ln -s /usr/sbin/hostapd_original /usr/sbin/hostapd; sudo systemctl restart isc-dhcp-server; sudo systemctl restart hostapd');
			} else if ( status[i].driver === 'rtl8192cu' ) {
				console.log(status[i].driver);
				SuperMesh.RunCmd('sudo rm -f /usr/sbin/hostapd; sudo ln -s /usr/sbin/hostapd_edimax_bgn /usr/sbin/hostapd; sudo systemctl restart isc-dhcp-server; sudo systemctl restart hostapd');
			} else {
				console.log(status[i].driver);
				SuperMesh.RunCmd('sudo rm -f /usr/sbin/hostapd; sudo ln -s /usr/sbin/hostapd_original /usr/sbin/hostapd; sudo systemctl restart isc-dhcp-server; sudo systemctl restart hostapd');
			}
		}
	}
});
*/