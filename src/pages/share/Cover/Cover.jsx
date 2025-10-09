
const Cover = ({ image ,title,explain}) => {
    return (
        <section>
            <div
                className="hero h-[700px] p-[170px] rounded-md"
                style={{
                    backgroundImage:
                        `url(${image})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {
                                explain
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cover;