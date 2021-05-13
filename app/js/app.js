const API = "api/app.php";
const AppName = "Nurse Call System";
var _device = {};

window.addEventListener('load', function() {
    init_device();
});

function init_device() {
    var d = window.localStorage.getItem('device');
    if (d == null || d == '') {
        fetch(API + "?x=generate_device_id")
        .then(r => r.text())
        .then(id => {
            _device = {
                'DeviceID': id,
                'BangsalID': '',
                'KamarID': '',
                'TTID' : '',
                'MEDRECID': '',
                'RegID': '',
                'Nama': ''
            };
            window.localStorage.setItem('device', JSON.stringify(_device));
        })
        .catch(e => {
            console.error("INIT_DEVICE_ERROR", e);
        });
    } else {
        _device = JSON.parse(d);
    }
}