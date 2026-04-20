import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./BlogHome.css";
import blogData from "../../assets/data/blogData";
import { Helmet } from "react-helmet";

const BLOGS_PER_PAGE = 6;

const CATEGORIES = [
  { label: "All Topics", colorClass: "tab-all" },
  { label: "NEET PG", colorClass: "tab-neetpg" },
  { label: "INI-CET", colorClass: "tab-inicet" },
  { label: "FMGE", colorClass: "tab-fmge" },
  { label: "Journey", colorClass: "tab-journey" },
];

const CATEGORY_TAG_CLASS = {
  "All Topics": "bh-tag-navy",
  "NEET PG": "bh-tag-blue",
  "INI-CET": "bh-tag-red",
  FMGE: "bh-tag-purple",
  Journey: "bh-tag-amber",
};

const BlogHome = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogData.filter((blog) => {
    const matchCategory =
      activeCategory === "All Topics" ||
      (blog.category && blog.category === activeCategory);
    const matchSearch =
      !searchQuery ||
      blog.metaTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.metaDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const indexOfLast = currentPage * BLOGS_PER_PAGE;
  const indexOfFirst = indexOfLast - BLOGS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  const featuredBlogs = blogData.slice(0, 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (page) => setCurrentPage(page);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <>
      <Helmet>
        <title>Blogs - CoreBTR</title>
        <meta
          name="description"
          content="Explore CoreBTR blogs for expert insights, exam strategies, concept clarity & practical tips to boost preparation for NEET PG and INICET aspirants."
        />
      </Helmet>

      <div className="bh-wrapper">
        {/* Blog Banner */}
        <div className="bh-banner">
          <img
            src="https://cdn.dribbble.com/userupload/47391567/file/bbf0aaf6510d6aa56744a96f33f8093a.jpg"
            alt="CoreBTR Workbook by Dr. Zainab Vora"
          />
        </div>

        {/* Breadcrumb */}
        <div className="bh-breadcrumb">
          <span className="bh-bc-link" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="bh-bc-sep">›</span>
          <span className="bh-bc-current">Blogs</span>
        </div>

        {/* Filter Bar */}
        <div className="bh-filter-bar">
          <div className="bh-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className={`bh-filter-tab ${cat.colorClass}${activeCategory === cat.label ? " active" : ""}`}
                onClick={() => handleCategoryChange(cat.label)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <main className="bh-main">
          {/* All Blogs Grid */}
          <div className="bh-section-header">
            <div className="bh-section-label">
              <div className="bh-section-accent"></div>
              <h2 className="bh-section-title">Recent Articles</h2>
              <span className="bh-section-count">
                {filteredBlogs.length} total
              </span>
            </div>
          </div>

          {currentBlogs.length === 0 ? (
            <div className="bh-no-results">
              <p>No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <section className="bh-blogs-grid">
              {currentBlogs.map((blog) => (
                <NavLink
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="bh-blog-card"
                >
                  <div className="bh-blog-card-img">
                    <img src={blog.image} alt={blog.alt} />
                  </div>
                  <div className="bh-card-body">
                    <span
                      className={`bh-card-tag ${CATEGORY_TAG_CLASS[blog.category] || "bh-tag-blue"}`}
                    >
                      {blog.category || "Medicine"}
                    </span>
                    <h3 className="bh-blog-card-title">{blog.metaTitle}</h3>
                    <p className="bh-blog-card-excerpt">{blog.metaDesc}</p>
                    <div className="bh-card-footer">
                      <div className="bh-card-meta">
                        <span>📅 {blog.blogDate}</span>
                      </div>
                      <span className="bh-card-read-more">Read More →</span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </section>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bh-pagination">
              <button
                className="bh-page-nav"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                ← Prev
              </button>
              <div className="bh-page-numbers">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`bh-page-btn${currentPage === i + 1 ? " active" : ""}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                className="bh-page-nav"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </main>

        {/* Newsletter Strip */}
        <div className="bh-newsletter-strip">
          <div className="bh-newsletter-text">
            <h3>The Ultimate Revision App for NEET PG | INI-CET | FMGE</h3>
            <p>From Revision to Revolution</p>
          </div>

          <NavLink
            className="bh-newsletter-btn"
            target="_blank"
            to="https://portal.corebtr.com/login"
          >
            Get Started with CoreBTR
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
