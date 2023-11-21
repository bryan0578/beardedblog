const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
            <div>
                <h1 className="text-7xl">The Daily BeardedBlog</h1>
                <h2 className='mt-5 md:mt-0'>
                    Welcome to the{" "}
                    <span className='underline decoration-4 decoration-[#ff6601]'>
                        BeardedCash's
                    </span>{" "}daily{" "}
                    <span className='underline decoration-4 decoration-[#ff6601]'>
                        BeardedBlog
                    </span>
                </h2>
            </div>

            <p className='mt-5 md:mt-2 max-w-sm text-slate-300'>
                New technology | Tips and Tricks | My experiences as a designer and developer
            </p>
        </div>
    );
};

export default Banner;
