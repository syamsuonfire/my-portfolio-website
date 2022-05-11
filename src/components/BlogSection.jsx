function BlogSection() {
  return (
    <section id="blog" className="bg-slate-700 pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-full text-center">
            <h3 className="mb-2 text-lg font-semibold text-primary">BLog</h3>
            <h4 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Tulisan Terkini
            </h4>
            <p className="text-md font-medium text-secondary md:text-lg">
              Tulisan terbaru dari kami dapat dilihat di sini.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="mb-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-dark">
              <img
                src="https://source.unsplash.com/360x200?programming"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://karyakarsa.com/ciptosuhari/dokumentasi-nextjs-v11-bahsa"
                    rel="noreferrer"
                    target="_blank"
                    className=" mb-3 block truncate text-xl font-semibold underline hover:text-primary dark:text-white"
                  >
                    Tips Belajar Framework Next.js
                  </a>
                </h3>

                <p className="mb-6 text-base font-medium text-secondary">
                  Tulisan tentang serba serbi Next.js framework JavaScript
                </p>
                <a
                  href="https://karyakarsa.com/ciptosuhari/dokumentasi-nextjs-v11-bahsa"
                  className=" rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="mb-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-dark">
              <img
                src="https://source.unsplash.com/360x200?javascript"
                alt="Javascript"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://karyakarsa.com/ciptosuhari/dokumentasi-swr-hook-v10"
                    rel="noreferrer"
                    target="_blank"
                    className=" mb-3 block truncate text-xl font-semibold underline hover:text-primary dark:text-white"
                  >
                    Tips Belajar SWR Hook
                  </a>
                </h3>

                <p className="mb-6 text-base font-medium text-secondary">
                  Belajar SWR Hook dengan mudah bagi pemula
                </p>
                <a
                  href="https://karyakarsa.com/ciptosuhari/dokumentasi-swr-hook-v10"
                  className=" rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="mb-6 w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-dark">
              <img
                src="https://source.unsplash.com/360x200?Reactjs"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="https://karyakarsa.com/ciptosuhari/dokumentasi-react-router-web-v530"
                    rel="noreferrer"
                    target="_blank"
                    className=" mb-3 block truncate text-xl font-semibold underline hover:text-primary dark:text-white"
                  >
                    Tips Belajar React Router DOM
                  </a>
                </h3>

                <p className="mb-6 text-base font-medium text-secondary">
                  Panduan Wajib belajar React Router DOM untuk pemula
                </p>
                <a
                  href="https://karyakarsa.com/ciptosuhari/dokumentasi-react-router-web-v530"
                  className=" rounded-lg bg-primary py-2 px-4 text-sm font-medium text-white hover:opacity-80"
                >
                  {" "}
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
