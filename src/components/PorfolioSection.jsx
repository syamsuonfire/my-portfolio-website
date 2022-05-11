function PortfolioSection() {
    return (
        <section
            id="portfolio"
            className="pt-16 pb-16 bg-slate-100 dark:bg-slate-800"
        >
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto mb-16 text-center">
                        <h3 className="mb-2 text-lg font-semibold text-primary">
                            Portfolio
                        </h3>
                        <h4 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                            Project Terbaru
                        </h4>
                        <p className="font-medium text-md text-secondary md:text-lg">
                            Ini adalah beberapa project yang pernah saya
                            kerjakan dalam proses belajar web programming dan
                            data scraping.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center w-full px-4 xl:mx-auto xl:w-10/12">
                    <div className="p-4 mb-12 md:w-1/2">
                        <div className="p-2 overflow-hidden rounded-md shadow-md dark:shadow-slate-500">
                            <img
                                src={require("../images/portfolio-4.png")}
                                alt=""
                                className="w-full"
                            />
                            <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                                <a
                                    href="https://github.com/syamsuonfire/api-blog-with-jwt-laravel-9"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="underline"
                                >
                                    API-Blog-with-JWT-Laravel-9
                                </a>
                            </h3>

                            <p className="text-base font-medium text-secondary">
                                Laravel 9 boilerplate for a handy REST API Blog
                                Development with JWT Authentication.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 mb-12 md:w-1/2">
                        <div className="p-2 overflow-hidden rounded-md shadow-md dark:shadow-slate-500">
                            <img
                                src={require("../images/portfolio-3.png")}
                                alt=""
                                className="w-full"
                            />
                            <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                                <a
                                    href="https://github.com/syamsuonfire/Final-Project-Sanbercode-Flutter"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="underline"
                                >
                                    Final-Project-Sanbercode-Flutter
                                </a>
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                This repositories contain Final Project
                                Sanbercode Flutter.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 mb-12 md:w-1/2">
                        <div className="p-2 overflow-hidden rounded-md shadow-md dark:shadow-slate-500">
                            <img
                                src={require("../images/portfolio-2.png")}
                                alt=""
                                className="w-full"
                            />

                            <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                                <a
                                    href="https://github.com/syamsuonfire/Final-Project-2-Full-Stack-Web-Dev-PKS-DS"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="underline"
                                >
                                    Final-Project-Full-Stack-Web-Dev-PKS-DS
                                </a>
                            </h3>

                            <p className="text-base font-medium text-secondary">
                                This repositories contain Final Project PKS
                                Digischool.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 mb-12 md:w-1/2">
                        <div className="p-2 overflow-hidden rounded-md shadow-md dark:shadow-slate-500">
                            <img
                                src={require("../images/portfolio-1.png")}
                                alt=""
                                className="w-full"
                            />
                            <h3 className="mt-5 text-lg font-semibold text-dark dark:text-white">
                                <a
                                    href="https://github.com/syamsuonfire/Final-Project-Sanbercode-React"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="underline"
                                >
                                    Final-Project-Sanbercode-React
                                </a>
                            </h3>
                            <p className="text-base font-medium text-secondary">
                                This repositories contain Final Project
                                Sanbercode React.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
