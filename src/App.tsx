import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const App = () => {
  return (
    <>
      <Header />

      {/* hero section  */}
      <section
        className="bg-cover bg-center h-96 mx-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1739989934211-c4614827fc82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to My Blog</h1>
            <p className="mt-4 text-xl">
              Insights, stories, and tips from the world of blogging
            </p>
          </div>
        </div>
      </section>

      {/* main content  */}
      <main className="container mx-auto px-16 py-8">
        {/* top 3 blogs  */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold mb-6">Top Blogs</h2>
            <a
              href="#"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              See All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt="Image of a beautiful sunrise over a mountain range"
                className="w-full h-48 object-cover"
                width="400"
                height="300"
                src="https://images.unsplash.com/photo-1734004691776-d7f04732c174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of the blog post content goes here. It
                  should be engaging and informative.
                </p>
                <a className="text-blue-500 hover:underline" href="#">
                  Read more
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt="Image of a bustling cityscape at night"
                className="w-full h-48 object-cover"
                width="400"
                height="300"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-oZIGHc1AuLEHklMMahwp7QNd.png?st=2025-04-16T03%3A08%3A58Z&amp;se=2025-04-16T05%3A08%3A58Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=cc612491-d948-4d2e-9821-2683df3719f5&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2025-04-15T04%3A53%3A12Z&amp;ske=2025-04-16T04%3A53%3A12Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=9oNJ4CuE6dz4wT7zUUlx8P7OMHAbT8AGwN4OHig2cK4%3D"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of the blog post content goes here. It
                  should be engaging and informative.
                </p>
                <a className="text-blue-500 hover:underline" href="#">
                  Read more
                </a>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                alt="Image of a serene beach with crystal clear water"
                className="w-full h-48 object-cover"
                width="400"
                height="300"
                src="https://images.unsplash.com/photo-1741851374674-e4b7e573a9e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of the blog post content goes here. It
                  should be engaging and informative.
                </p>
                <a className="text-blue-500 hover:underline" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* top 3 authors  */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Top Authors</h2>
            <a
              href="#"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              See All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Author 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
              <img
                alt="Portrait of Author 1"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                width="150"
                height="150"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              />
              <h3 className="text-xl font-bold mb-2">Author 1</h3>
              <p className="text-gray-700 mb-4">
                A brief bio of the author goes here. It should highlight their
                expertise and experience.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>

            {/* Author 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
              <img
                alt="Portrait of Author 2"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                width="150"
                height="150"
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
              />
              <h3 className="text-xl font-bold mb-2">Author 2</h3>
              <p className="text-gray-700 mb-4">
                A brief bio of the author goes here. It should highlight their
                expertise and experience.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>

            {/* Author 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
              <img
                alt="Portrait of Author 3"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                width="150"
                height="150"
                src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
              />
              <h3 className="text-xl font-bold mb-2">Author 3</h3>
              <p className="text-gray-700 mb-4">
                A brief bio of the author goes here. It should highlight their
                expertise and experience.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* footer section  */}
      <Footer />
    </>
  );
};

export default App;
