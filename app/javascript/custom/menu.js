function addToggleListener(selected_id, menu_id, toggle_class) {
	document
		.querySelector(`#${selected_id}`)
		.addEventListener("click", function (event) {
			event.preventDefault();
			document.querySelector(`#${menu_id}`).classList.toggle(toggle_class);
		});
}

// Add toggle listeners to listen for clicks.
document.addEventListener("turbo:load", function () {
	addToggleListener("hamburger", "navbar-menu", "collapse");
	addToggleListener("account", "dropdown-menu", "active");
});
