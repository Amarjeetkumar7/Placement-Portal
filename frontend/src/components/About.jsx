import Navbar from "./shared/Navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <section class="bg-purple-300 py-12 shadow-sm shadow-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold text-purple-700 mb-4">About Us</h2>
          <p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            <strong>JobConnect</strong> is a cutting-edge job portal designed to
            connect job seekers with top companies across various industries.
            Our platform leverages the latest technologies to offer a seamless
            experience for both candidates and employers.
          </p>
          <p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            Whether you're a fresher looking for your first opportunity or an
            experienced professional seeking a career change, we make the
            process effortless and efficient. Our platform offers a wide range
            of features, including:
          </p>
          <div class="flex justify-center space-x-8 mt-8">
            <div class="text-left">
              <h3 class="text-xl font-semibold text-purple-600">
                🎯 For Job Seekers:
              </h3>
              <ul class="list-disc list-inside text-gray-600">
                <li>Advanced job search and filters</li>
                <li>Personalized job recommendations</li>
                <li>Resume submission and ATS tracking</li>
              </ul>
            </div>
            <div class="text-left">
              <h3 class="text-xl font-semibold text-purple-600">
                🏢 For Employers:
              </h3>
              <ul class="list-disc list-inside text-gray-600">
                <li>Post and manage job listings</li>
                <li>Access a vast pool of candidates</li>
                <li>Streamlined hiring process with ATS integration</li>
              </ul>
            </div>
          </div>
          <p class="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mt-8">
            At <strong>JobConnect</strong>, we are committed to transforming the
            job search experience by offering a platform that is intuitive,
            reliable, and tailored to meet the needs of our users.
          </p>
        </div>
      </section>

      {/* <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <div className="bg-[rgb(165,113,224)] text-black shadow-2xl rounded-lg p-6">
          <p className="text-lg mb-4">
            Hi, I'm [Your Name]. I'm a passionate web developer with experience
            in creating responsive and user-friendly websites. I love turning
            ideas into reality through code and design.
          </p>
          <p className="text-lg mb-4">
            My journey in web development started [X] years ago, and since then,
            I've worked on various projects ranging from small business websites
            to complex web applications. I'm always eager to learn new
            technologies and improve my skills.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me [Your Hobbies/Interests]. I
            believe in continuous learning and giving back to the community
            through open-source contributions and mentoring aspiring developers.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default About;
