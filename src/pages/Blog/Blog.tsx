import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PageHeader from '../../components/page-header/PageHeader';
import { getBlogs, type Blog as BlogType } from '../../data/getBlogs';

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getBlogs()
            .then(setBlogs)
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <PageHeader title="Blog" />
            <div className="w-full min-w-0 mx-auto">
                {loading && <p>Loading…</p>}
                {error && <p>Couldn't load posts.</p>}
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <p>{blog.date.toLocaleDateString()}</p>
                        <h2 className="text-3xl font-bold mb-4 mt-6">{blog.title}</h2>
                        <ReactMarkdown components={{
                            p: (props) => <p className="mb-6" {...props} />,
                            h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
                            h2: (props) => <h2 className="text-3xl font-bold" {...props} />,
                            h3: (props) => <h3 className="text-2xl font-bold" {...props} />,
                            img: (props) => <img className="w-70 h-auto m-auto" {...props} />
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