
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-6">
            <p className="text-yellow-600 text-lg">--- {subHeading} ----</p>
            <p className="text-3xl border-y-4 uppercase py-4">{heading}</p>

        </div>
    );
};

export default SectionTitle;