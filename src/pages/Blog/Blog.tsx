import ReactMarkdown from 'react-markdown';
import PageHeader from '../../components/page-header/PageHeader';
import blogs from '../../data/loadBlogs';

const Blog = () => {
    return (
        <>
            <PageHeader title="Blog" />
            <div className="w-full min-w-0 mx-auto">
                {blogs.map((blog) => (
                    <div key={blog.id} className="post-preview">
                        <p>{blog.date.toLocaleDateString()}</p>
                        <h2 className="text-3xl font-bold mb-4 mt-6">{blog.title}</h2>
                        <ReactMarkdown components={{
                            p: (props) => <p className="mb-6" {...props} />,
                            h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
                            h2: (props) => <h2 className="text-3xl font-bold" {...props} />,
                            h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
                            img: (props) => <img className="w-40 h-auto m-auto" {...props} />
                        }}>
                            {blog.content}
                        </ReactMarkdown>
                        <hr className="border-dashed border-3 border-gray-300 mb-6"></hr>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blog