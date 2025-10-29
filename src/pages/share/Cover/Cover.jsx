const Cover = ({ image, title, explain }) => {
    return (
        <section className="w-full">
            <div
                className="relative hero w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center rounded-md overflow-hidden"
                style={{ backgroundImage: `url(${image})` }}
            >
                {/* 🔹 Overlay full responsive & properly positioned */}
                <div className="absolute sm:m-[60px] rounded-md inset-0 bg-black/50 z-0"></div>

                {/* 🔹 Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-neutral-content h-full px-4 sm:px-8 md:px-20">
                    <div className="max-w-md">
                        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
                            {title}
                        </h1>
                        <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                            {explain}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cover;
