const NavigationBar = () => {
  return (
    <div className="flex justify-between center gap-12 fixed top-0 w-full wrap p-4">
      <div className="font-bold text-primary cursor-pointer">
        Girish Khedikar
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        About
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Skills
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Projects
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Experience
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Education
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Testimonials
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Contact
      </div>
      <div className="btn-primary cursor-pointer h-full p-4 rounded animation">
        Resume
      </div>
    </div>
  );
};

export default NavigationBar;
