function BackToTop() {
  return (
    <a
      href="#home"
      id="back-to-top"
      className=" item-center fixed bottom-4 right-4 z-[999] hidden h-14 w-14 justify-center rounded-full bg-primary p-4 hover:animate-pulse"
    >
      <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
    </a>
  );
}

export default BackToTop;
