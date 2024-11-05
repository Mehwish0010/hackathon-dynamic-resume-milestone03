var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collecting values from form inputs
    var name = document.getElementById('name').value;
    var role = document.getElementById('role').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var profilePic = document.getElementById('profilePic').value;
    var expertise = document.getElementById('expertise').value;
    var skills = document.getElementById('skills').value.split(',');
    var hobbies = document.getElementById('hobbies').value.split(',');
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value.split('\n');
    var resumeData = {
        name: name,
        role: role,
        email: email,
        contact: contact,
        profilePic: profilePic,
        expertise: expertise,
        skills: skills.map(function (skill) { return skill.trim(); }),
        hobbies: hobbies.map(function (hobby) { return hobby.trim(); }),
        education: education.map(function (edu) { return edu.trim(); }),
        experience: experience.map(function (exp) { return exp.trim(); })
    };
    // Generate resume HTML
    var resumeOutput = "\n        <div class=\"resume-top\">\n            <div class=\"rtop-left\">\n                <p class=\"name\">".concat(resumeData.name, "</p>\n                <p class=\"role\">").concat(resumeData.role, "</p>\n            </div>\n            <div class=\"rtop-right\">\n                <p class=\"hire\">Hire Me</p>\n                <p>").concat(resumeData.email, "</p>\n                <p>").concat(resumeData.contact, "</p>\n            </div>\n            <div class=\"r-profile-pic\">\n                <img src=\"").concat(resumeData.profilePic || 'default.jpg', "\" alt=\"Profile Picture\">\n            </div>\n        </div>\n        <div class=\"resume-center\">\n            <h2>EXPERTISE</h2>\n            <p class=\"para\">").concat(resumeData.expertise, "</p>\n        </div>\n        <div class=\"resume-bottom\">\n            <div class=\"rbottom-left\">\n                <div class=\"rb-skills\">\n                    <h2>Skills</h2>\n                    <ul>\n                        ").concat(resumeData.skills.map(function (skill) { return "<li><p>".concat(skill, "</p></li>"); }).join(''), "\n                    </ul>\n                </div>\n                <div class=\"rb-hobbies\">\n                    <h2>Hobbies</h2>\n                    <ul>\n                        ").concat(resumeData.hobbies.map(function (hobby) { return "<li><p>".concat(hobby, "</p></li>"); }).join(''), "\n                    </ul>\n                </div>\n            </div>\n            <div class=\"rbottom-right\">\n                <div class=\"r-education\">\n                    <h2>Education</h2>\n                    <ul>\n                        ").concat(resumeData.education.map(function (edu) { return "<li><p>".concat(edu, "</p></li>"); }).join(''), "\n                    </ul>\n                </div>\n                <div class=\"r-experience\">\n                    <h2>Experience</h2>\n                    <ul>\n                        ").concat(resumeData.experience.map(function (exp) { return "<li><p>".concat(exp, "</p></li>"); }).join(''), "\n                    </ul>\n                </div>\n                <div class=\"r-contact\">\n                    <h2>Contact Me</h2>\n                    <ul>\n                        <li><p>Email: ").concat(resumeData.email, "</p></li>\n                        <li><p>Phone: ").concat(resumeData.contact, "</p></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ");
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
});
