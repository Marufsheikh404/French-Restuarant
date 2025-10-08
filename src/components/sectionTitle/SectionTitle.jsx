
const SectionTitle = ({title,subTitle}) => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <p className="text-[#D99904] border-b-4 w-5/12 text-center mb-3">--- {title} ---</p>
            <h1 className="text-4xl font-bold border-b-4 w-5/12 text-center mb-3">{subTitle}</h1>
        </div>
    );
};

export default SectionTitle;