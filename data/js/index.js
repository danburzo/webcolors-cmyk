(function() {
	var mode_wrapper = document.getElementById('mode');
	var radios = document.querySelectorAll('[name=mode]');
	radios.forEach(function(radio) {
		radio.addEventListener('change', function(e) {
			var value = e.target.value;
			mode_wrapper.className = value;
		});
	});
	radios[0].checked = true;
})();