import React, { useEffect } from "react";
import ill from "./illustration.jpg";

import "./Slider.css";

import bg from "../images/laws.jpg";

import bg2 from "../images/s.jpg";

import bg3 from "../images/illustration.jpg";

const Slider = () => {
	useEffect(() => {
		let active = false;
		// and define our dom elements to make it easier to read
		let scrollerMiddle = document.querySelector(".scroller-middle");
		let scrollerTop = document.querySelector(".scroller-top");

		// First we'll have to set up our event listeners
		// We want to watch for clicks on our scroller
		scrollerMiddle?.addEventListener("mousedown", function () {
			active = "middle";
			// Add our scrolling class so the scroller has full opacity while active
			scrollerMiddle.classList.add("scrolling");
		});
		// We also want to watch the body for changes to the state,
		// like moving around and releasing the click
		// so let's set up our event listeners
		document?.body.addEventListener("mouseup", function () {
			active = false;
			scrollerMiddle.classList.remove("scrolling");
		});
		document?.body.addEventListener("mouseleave", function () {
			active = false;
			scrollerMiddle.classList.remove("scrolling");
		});
		// We'll have to do the same for our top scroller

		scrollerTop?.addEventListener("mousedown", function () {
			active = "top";
			scrollerTop.classList.add("scrolling");
		});

		document?.body.addEventListener("mouseup", function () {
			active = false;
			scrollerTop.classList.remove("scrolling");
		});
		document?.body.addEventListener("mouseleave", function () {
			active = false;
			scrollerTop.classList.remove("scrolling");
		});

		// Let's figure out where their mouse is at
		document?.body.addEventListener("mousemove", function (e) {
			if (!active) return;
			// Their mouse is here...
			let x = e.pageX;
			// but we want it relative to our wrapper
			x -= document.querySelector(".wrapper").getBoundingClientRect().left;
			// Okay let's change our state
			scrollIt(x);
		});

		// Let's use this function
		function scrollIt(x) {
			// Calculate our transform
			let transform = Math.max(
				0,
				Math.min(x, document.querySelector(".wrapper")?.offsetWidth)
			);
			// we show all our bottom image but how much of our middle and top,
			// that'll depend on what we're dragging
			// if we're dragging the middle slider
			if (active === "middle") {
				if (document) {
					var elements = document.getElementsByClassName("middle");
					for (var i = 0; i < elements.length; i++) {
						elements[i].style.width = transform + "px";
					}
					// document.querySelector('.middle').style.width = transform+"px";
					scrollerMiddle.style.left = transform - 25 + "px";
					// if we're using scroller-middle, middle must always be to the right of top
					if (
						scrollerTop?.getBoundingClientRect().left >
						scrollerMiddle.getBoundingClientRect().left - 5
					) {
						document.querySelector(".top").style.width = transform - 5 + "px";
						scrollerTop.style.left = transform - 30 + "px";
					}
				}
			}
			// if we're dragging the top slider
			if (active === "top") {
				document.querySelector(".top").style.width = transform + "px";
				scrollerTop.style.left = transform - 25 + "px";
				// if we're using scroller-top, top must always be to the left
				if (
					scrollerTop.getBoundingClientRect().left >
					scrollerMiddle.getBoundingClientRect().left - 5
				) {
					document.querySelector(".middle").style.width = transform + 5 + "px";
					scrollerMiddle.style.left = transform - 20 + "px";
				}
			}
		}

		// Let's set our opening state based off the width,
		// we want to show a bit of both images so the user can see what's going on
		active = "middle";
		scrollIt(460);
		active = "top";
		scrollIt(230);
		active = false;

		// And finally let's repeat the process for touch events
		// first our middle scroller...
		scrollerMiddle?.addEventListener("touchstart", function () {
			active = "middle";
			scrollerMiddle.classList.add("scrolling");
		});
		document?.body.addEventListener("touchend", function () {
			active = false;
			scrollerMiddle.classList.remove("scrolling");
		});
		document?.body.addEventListener("touchcancel", function () {
			active = false;
			scrollerMiddle.classList.remove("scrolling");
		});

		// then scroller top, our second scroller
		scrollerTop?.addEventListener("touchstart", function () {
			active = "top";
			scrollerTop.classList.add("scrolling");
		});
		document?.body.addEventListener("touchend", function () {
			active = false;
			scrollerTop.classList.remove("scrolling");
		});
		document?.body.addEventListener("touchcancel", function () {
			active = false;
			scrollerTop.classList.remove("scrolling");
		});

		if (document) {
			document
				?.querySelector(".wrapper")
				.addEventListener("touchmove", function (e) {
					if (!active) return;
					e.preventDefault();
					let x = e.touches[0].pageX;
					x -= document.querySelector(".wrapper").getBoundingClientRect().left;
					scrollIt(x);
				});
		}
	}, []);

	return (
		<div>
			{" "}
			<div class='wrapper'>
				<div class='bottom'>
					<img
						src={bg2}
						draggable='false'
						alt=''
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				<div class='middle'>
					<img
						src={bg3}
						draggable='false'
						alt=''
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				{/* <div class="scroller scroller-middle">
          <svg
            class="scroller__thumb"
            src={bg2}
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <polygon
              points="0 50 37 68 37 32 0 50"
              style={{ color: ":#000" }}
            />
            <polygon
              points="100 50 64 32 64 68 100 50"
              style={{ color: ":#000" }}
            />
          </svg>
        </div> */}
				<div class='top'>
					<img
						src={bg2}
						draggable='false'
						alt=''
						style={{ width: "100%", height: "100%" }}
					/>
				</div>
				{/* <div class="scroller scroller-top">
          <svg
            class="scroller__thumb"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <polygon
              points="0 50 37 68 37 32 0 50"
              style={{ color: ":#000" }}
            />
            <polygon
              points="100 50 64 32 64 68 100 50"
              style={{ color: ":#000" }}
            />
          </svg>
        </div> */}
			</div>
		</div>
	);
};

export default Slider;
