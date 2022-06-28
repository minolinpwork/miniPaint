import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'mpatchdev@gmail.com';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="/images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">ADA NFT Creator</span>'},
				{title: "Editor Base:", html: '<span class="about-name">miniPaint 5.0.10 by ViliusL</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online NFT image creator for Cardano"},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "GitHub:", html: '<a href="https://github.com/minolinpwork/miniPaint">https://github.com/minolinpwork/miniPaint</a>'},
				{title: "Version:", value: VERSION},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
