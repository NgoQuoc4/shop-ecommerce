import React from 'react'
import BlogItem from '../../components/BlogItem'
import Pagination from '../../components/Pagination'
const BlogContentSection = () => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="entry-container max-col-2" data-layout="fitRows">
                            <BlogItem />
                            <BlogItem />
                            <BlogItem />
                            <BlogItem />
                            <BlogItem />
                            <BlogItem />
                        </div>
                        <Pagination />
                        {/* <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                                        <span aria-hidden="true">
                                            <i className="icon-long-arrow-left" />
                                        </span>Prev </a>
                                </li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link page-link-next" href="#" aria-label="Next"> Next <span aria-hidden="true">
                                        <i className="icon-long-arrow-right" />
                                    </span>
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                    <aside className="col-lg-3">
                        <div className="sidebar">
                            <div className="widget widget-search">
                                <h3 className="widget-title">Search</h3>
                                <form action="#">
                                    <label htmlFor="ws" className="sr-only">Search in blog</label>
                                    <input type="search" className="form-control" name="ws" id="ws" placeholder="Search in blog" required />
                                    <button type="submit" className="btn">
                                        <i className="icon-search" />
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget-cats">
                                <h3 className="widget-title">Categories</h3>
                                <ul>
                                    <li>
                                        <a href="#">Lifestyle <span>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Shopping <span>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Fashion <span>1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Travel <span>3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Hobbies <span>2</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h3 className="widget-title">Popular Posts</h3>
                                <ul className="posts-list">
                                    <li>
                                        <figure>
                                            <a href="#">
                                                <img src="assets/images/blog/sidebar/post-1.jpg" alt="post" />
                                            </a>
                                        </figure>
                                        <div>
                                            <span>Nov 22, 2018</span>
                                            <h4>
                                                <a href="#">Aliquam tincidunt mauris eurisus.</a>
                                            </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <a href="#">
                                                <img src="assets/images/blog/sidebar/post-2.jpg" alt="post" />
                                            </a>
                                        </figure>
                                        <div>
                                            <span>Nov 19, 2018</span>
                                            <h4>
                                                <a href="#">Cras ornare tristique elit.</a>
                                            </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <a href="#">
                                                <img src="assets/images/blog/sidebar/post-3.jpg" alt="post" />
                                            </a>
                                        </figure>
                                        <div>
                                            <span>Nov 12, 2018</span>
                                            <h4>
                                                <a href="#">Vivamus vestibulum ntulla nec ante.</a>
                                            </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <figure>
                                            <a href="#">
                                                <img src="assets/images/blog/sidebar/post-4.jpg" alt="post" />
                                            </a>
                                        </figure>
                                        <div>
                                            <span>Nov 25, 2018</span>
                                            <h4>
                                                <a href="#">Donec quis dui at dolor tempor interdum.</a>
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-banner-sidebar">
                                <div className="banner-sidebar-title">ad box 280 x 280</div>
                                <div className="banner-sidebar banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/blog/sidebar/banner.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                            <div className="widget">
                                <h3 className="widget-title">Browse Tags</h3>
                                <div className="tagcloud">
                                    <a href="#">fashion</a>
                                    <a href="#">style</a>
                                    <a href="#">women</a>
                                    <a href="#">photography</a>
                                    <a href="#">travel</a>
                                    <a href="#">shopping</a>
                                    <a href="#">hobbies</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default BlogContentSection