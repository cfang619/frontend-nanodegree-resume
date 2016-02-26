/*
This is empty on purpose! Your code to build the resume will go here.
 */

$(document).click(function(loc) {
  // your code goes here
  logClicks(loc.pageX, loc.pageY);
});



var skills = ['Cooking', 'Coding', 'Eating'];

var bio = 
{
	"name" : "Clement Fang",
	"role" : "Engineer",
	"contacts" : {
		"mobile": "408-786-8555",
		"email" : "cfang619@gmail.com",
		"github" :  "cfang619",
		"location" : "San Jose"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Hi, this is my resume!",
	"skills" : skills
};

var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedHeaderRole);
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedHeaderName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub);


if(bio.skills.length) {
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
}

var work = {
	"jobs": [
		{
			"employer": "Qualcomm",
			"title": "Engineer",
			"dates": "April 2013 - current",
			"description": "Engineer in Modem FW group",
			"location": "Santa Clara"
		}
	]
}


var displayWork = function() {	
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerandTitle = formattedEmployer + formattedJobTitle;
		$(".work-entry:last").append(formattedEmployerandTitle);

		var formattedJobDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedJobDate);
		var formattedJobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedJobLocation);
		var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedJobDescription);
	}
}

displayWork();

var projects = {
	"projects": [
		{
			"title": "Smart Cycle/Restorator",
			"dates": "September 2012 to May 2013",
			"description": "Workout cycle and restorator outfitted with strain gauge, interfaced with android app." +
				"Prototyped for use by hospitals for exercise post surgery with automated workout feedback."
		},
		{
			"title": "Smart Toothbrush",
			"dates": "September 2011 to January 2013",
			"description": "Modified toothbrush with accelerometer,gyrometer,magnetometer and voltage sensor on motor. " +
				"Interfaced with wireless link to build brushing profile of user."
		},
	],

	"display": function() {
		for(project in this.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedPrjTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
			$(".project-entry:last").append(formattedPrjTitle);

			var formattedPrjDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
			$(".project-entry:last").append(formattedPrjDates);

			var formattedPrjDesc = HTMLprojectDescription.replace("%data%", this.projects[project].description);
			$(".project-entry:last").append(formattedPrjDesc);
		}
	}

}

projects.display();


var education = {
	"schools": [
		{
			"name": "UCLA",
			"city:": "Los Angeles, CA, US",
			"degree": "B.S.",
			"major": "Electrical Engineering",
			"years": "2006-2010",
			"location": "Los Angeles, CA, USA"
		},
		{
			"name": "UCLA",
			"city:": "Los Angeles, CA, US",
			"degree": "M.S.",
			"major": "Electrical Engineering",
			"years": "2011-2013",
			"location": "Los Angeles, CA, USA"

		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com/course/ud804"
		}
	],

	"display": function() {
		for(school in this.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[school].years);
			$(".education-entrylast").append(formattedSchoolDates);

			var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", this.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLoc);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		$("#education").append(HTMLonlineClasses);
		for(course in this.onlineCourses) {

			$("#education").append(HTMLschoolStart);
			var formattedCourseTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
			$(".education-entry:last").append(formattedCourseTitle);

			var formattedSchoolTitle = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
			$(".education-entry:last").append(formattedSchoolTitle);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

education.display();

$("#mapDiv").append(googleMap);