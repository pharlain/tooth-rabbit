type PageHeaderProps = {
    title: string;
};

const PageHeader = (props: PageHeaderProps) => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-5xl courier-font">{props.title}</h1>
            </div>
            <br></br>
        </>
    );
}

export default PageHeader;