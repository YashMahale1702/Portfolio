// Typed.js

var options = {
	strings: ["Flutter Developer.", "Web Developer.", "UI Designer."],
	smartBackspace: true,
	loop: true,
	typeSpeed: 100,
	backSpeed: 40,
	startDelay: 3300,
};

var typed = new Typed(".main_typing-dynamic", options);

// For menu options

const container = document.querySelector(".nav-list-container");
const containerItem = document.querySelector(".nav-list-container-items");
const menu = document.querySelector(".fa-bars");
const icon = document.querySelector(".nav-icon");

icon.addEventListener("click", function () {
	container.classList.toggle("nav-list-container-hidden");

	if (menu.classList.contains("fa-bars")) {
		menu.classList.replace("fa-bars", "fa-xmark");
	} else {
		menu.classList.replace("fa-xmark", "fa-bars");
	}
});

containerItem.addEventListener("click", function () {
	container.classList.toggle("nav-list-container-hidden");

	if (menu.classList.contains("fa-bars")) {
		menu.classList.replace("fa-bars", "fa-xmark");
	} else {
		menu.classList.replace("fa-xmark", "fa-bars");
	}
});

// Particles.js

particlesJS("particles-js", {
	particles: {
		number: {
			value: 350,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: ["#FDF6EC", "#FFD300", "#B8E986", "#50E3C2"],
			// value: [ '#FDF6EC' ]
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#FDF6EC",
			},
			polygon: {
				nb_sides: 5,
			},
			// image: {
			// 	src: 'img/github.svg',
			// 	width: 100,
			// 	height: 100
			// }
		},
		opacity: {
			value: 0.48927153781200905,
			random: false,
			anim: {
				enable: true,
				speed: 0.2,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 2,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				size_min: 0,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 0.2,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: true,
				mode: "bubble",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 83.91608391608392,
				size: 1,
				duration: 3,
				opacity: 1,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 1,
			},
			remove: {
				particles_nb: 1,
			},
		},
	},
	retina_detect: true,
});
