interface ResumeData {
    name: string;
    role: string;
    email: string;
    contact: string;
    profilePic: string;
    expertise: string;
    skills: string[];
    hobbies: string[];
    education: string[];
    experience: string[];
}

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collecting values from form inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const profilePic = (document.getElementById('profilePic') as HTMLInputElement).value;
    const expertise = (document.getElementById('expertise') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value.split(',');
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split('\n');

    const resumeData: ResumeData = {
        name,
        role,
        email,
        contact,
        profilePic,
        expertise,
        skills: skills.map(skill => skill.trim()),
        hobbies: hobbies.map(hobby => hobby.trim()),
        education: education.map(edu => edu.trim()),
        experience: experience.map(exp => exp.trim())
    };

    // Generate resume HTML
    const resumeOutput = `
        <div class="resume-top">
            <div class="rtop-left">
                <p class="name">${resumeData.name}</p>
                <p class="role">${resumeData.role}</p>
            </div>
            <div class="rtop-right">
                <p class="hire">Hire Me</p>
                <p>${resumeData.email}</p>
                <p>${resumeData.contact}</p>
            </div>
            <div class="r-profile-pic">
                <img src="${resumeData.profilePic || 'default.jpg'}" alt="Profile Picture">
            </div>
        </div>
        <div class="resume-center">
            <h2>EXPERTISE</h2>
            <p class="para">${resumeData.expertise}</p>
        </div>
        <div class="resume-bottom">
            <div class="rbottom-left">
                <div class="rb-skills">
                    <h2>Skills</h2>
                    <ul>
                        ${resumeData.skills.map(skill => `<li><p>${skill}</p></li>`).join('')}
                    </ul>
                </div>
                <div class="rb-hobbies">
                    <h2>Hobbies</h2>
                    <ul>
                        ${resumeData.hobbies.map(hobby => `<li><p>${hobby}</p></li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="rbottom-right">
                <div class="r-education">
                    <h2>Education</h2>
                    <ul>
                        ${resumeData.education.map(edu => `<li><p>${edu}</p></li>`).join('')}
                    </ul>
                </div>
                <div class="r-experience">
                    <h2>Experience</h2>
                    <ul>
                        ${resumeData.experience.map(exp => `<li><p>${exp}</p></li>`).join('')}
                    </ul>
                </div>
                <div class="r-contact">
                    <h2>Contact Me</h2>
                    <ul>
                        <li><p>Email: ${resumeData.email}</p></li>
                        <li><p>Phone: ${resumeData.contact}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
});
