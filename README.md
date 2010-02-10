# jQuery Tab Slider

Allows you to easily reproduce the slide-in kind of effect used for login/feedback boxes on various web applications.

## Requirements

* jQuery 1.3.2 (or above)

## Installation

Copy/paste the following in the `<head>` part of your HTML:

	<script src="/path/to/tab-slider/tab-slider.js" type="text/javascript"></script>
   <script type="text/javascript" charset="utf-8">
      $(document).ready(function() {
         $('#box-id').tabSlider();
      });
   </script>

## Configuration

Accepts the following options:

	{
		// position of the box (bottom|top left|right)
		// defaults to 'bottom left'
		position: '',
		// spacing to use for each position
		// all default to '0'
		bottom: '',
		left: '',
		right: '',
		top: '',
		// selector to slide
		// defaults to 'div'
		slider: '',
		// sliding speed (ie: 500, 'slow', etc.)
		// defaults to '1000'
		speed: '',
		// selector to use as tab
		// defaults to 'h3'
		tab: '',
		// text to use in the tab - leave empty if unchanged
		tabText: '',
	}

## Patches & Features

* Fork
* Mod, fix
* Test - this is important, so it's not unintentionally broken
* Commit - do not mess with license, todo, version, etc. (if you do change any, bump them into commits of their own that I can ignore when I pull)
* Pull request - bonus point for topic branches

## Bugs & Feedback

http://github.com/jadb/jquery-tab-slider