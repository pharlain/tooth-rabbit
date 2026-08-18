import PageHeader from '../../components/page-header/PageHeader';

const Contact = () => {
    return (
        <>
            <PageHeader title="Contact Us" />
            <div className="w-full min-w-0 mx-auto text-center">
                Contact us for enquiries, bookings, or collaborations. We would love to hear from yas:
                <br></br>
                <a href="mailto:contact@toothoftherabbit.com" className="text-blue-500 hover:underline">
                    contact@toothoftherabbit.com
                </a>
            </div>
        </>
    );
}

export default Contact