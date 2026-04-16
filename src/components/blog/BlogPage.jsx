import React, { useRef, useMemo, useEffect } from "react";
import "./BlogPage.css";
import blogData from "../../assets/data/blogData";
import {
  useParams,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";

const CATEGORY_TAG_CLASS = {
  "All Topics": "bp-tag-navy",
  "NEET PG": "bp-tag-blue",
  "INI-CET": "bp-tag-red",
  FMGE: "bp-tag-purple",
  Journey: "bp-tag-amber",
};

function BlogPage() {
  const { blogId } = useParams();
  const blog = blogData.find((b) => String(b.id) === String(blogId));
  const navigate = useNavigate();
  const location = useLocation();
  const carouselRef = useRef(null);

  // Scroll to top on blog change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogId, location.pathname]);

  // Calculate reading time
  const readingTime = useMemo(() => {
    if (!blog?.para) return "2 min read";
    const words = blog.para.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  }, [blog]);

  // Table of Contents from h4 headings
  const tableOfContents = useMemo(() => {
    const headings = [];
    const temp = document.createElement("div");
    temp.innerHTML = blog?.para || "";
    const h4Elements = temp.querySelectorAll("h4");
    h4Elements.forEach((h4, index) => {
      headings.push({ id: `section-${index}`, title: h4.textContent });
    });
    return headings;
  }, [blog]);

  // Format blog content (add ids to h4s)
  const formatContent = (content) => {
    if (!content) return null;
    const paragraphs = content.split("\n\n").filter((p) => p.trim());
    let headingIndex = 0;

    return paragraphs.map((paragraph, index) => {
      if (paragraph.trim().startsWith("—")) {
        return (
          <p
            key={index}
            className="bp-author-signature"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        );
      }
      if (paragraph.includes("<h4>")) {
        const modified = paragraph.replace(
          /<h4>/g,
          () => `<h4 id="section-${headingIndex++}">`,
        );
        return (
          <div key={index} dangerouslySetInnerHTML={{ __html: modified }} />
        );
      }
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      );
    });
  };

  // Share handler
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.metaTitle,
          text: blog.metaDesc,
          url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Blog link copied to clipboard!");
    }
  };

  // Carousel scroll
  const handleScroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "next" ? 400 : -400,
        behavior: "smooth",
      });
    }
  };

  // Related blogs (exclude current)
  const relatedBlogs = blogData
    .filter((b) => String(b.id) !== String(blogId))
    .slice(0, 3);

  if (!blog) {
    return (
      <div className="bp-not-found">
        <Helmet>
          <title>Blog Not Found</title>
        </Helmet>
        <h2>Blog not found</h2>
        <NavLink to="/blogs" className="bp-back-btn">
          Back to Blogs
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDesc} />
        <meta property="og:title" content={blog.metaTitle} />
        <meta property="og:description" content={blog.metaDesc} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle} />
        <meta name="twitter:description" content={blog.metaDesc} />
        <meta name="twitter:image" content={blog.image} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="bp-wrapper">
        {/* Breadcrumb */}
        <div className="bp-breadcrumb">
          <span className="bp-bc-link" onClick={() => navigate("/")}>
            Home
          </span>
          <span className="bp-bc-sep">›</span>
          <span className="bp-bc-link" onClick={() => navigate("/blogs")}>
            Blogs
          </span>
          <span className="bp-bc-sep">›</span>
          <span className="bp-bc-current">{blog.metaTitle}</span>
        </div>

        {/* Article Hero */}
        <div className="bp-hero">
          <div className="bp-hero-text">
            <h1 className="bp-hero-title">{blog.metaTitle}</h1>
            <div className="bp-hero-meta">
              <p>📅 {blog.blogDate}</p>
              <span className="bp-meta-sep"></span>
              <p>⏱ {readingTime}</p>
            </div>
          </div>
          <div className="bp-hero-img-wrap">
            <img src={blog.image} alt={blog.alt} />
          </div>
        </div>

        {/* Main Layout */}
        <div className="bp-layout">
          <article className="bp-article">
            <div className="bp-share-bar">
              <span className="bp-share-label">
                Found this useful? Share it -
              </span>
              <div className="bp-share-btns">
                <button className="bp-share-btn" onClick={handleShare}>
                  🔗 Copy Link
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="bp-article-content">{formatContent(blog.para)}</div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="bp-tags-section">
                <div className="bp-tags-label">RELATED TAGS</div>
                <div className="bp-tags-row">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="bp-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share button at bottom */}
            <button className="bp-share-bottom-btn" onClick={handleShare}>
              🔗 Share This Article
            </button>
          </article>

          {/* Sidebar */}
          <aside className="bp-sidebar">
            {/* Table of Contents */}
            <div className="bp-sidebar-widget">
              <div className="bp-sw-header">
                <div className="bp-sw-accent"></div>
                <div className="bp-sw-title">Table of Contents</div>
              </div>
              <div className="bp-sw-body">
                {tableOfContents.length > 0 ? (
                  <ul className="bp-toc-list">
                    {tableOfContents.map((item, i) => (
                      <li key={i} className="bp-toc-item">
                        <div className="bp-toc-num">{i + 1}</div>
                        <a href={`#${item.id}`} className="bp-toc-text">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="bp-toc-empty">
                    Content sections will appear here.
                  </p>
                )}
              </div>
            </div>

            {/* CTA Widget */}
            <div className="bp-cta-widget">
              <div className="bp-cta-icon">🎯</div>
              <div className="bp-cta-title">Practice MCQs on This Topic</div>
              <p className="bp-cta-desc">
                Test your understanding with 40+ curated NEET PG questions on
                this subject.
              </p>
              <NavLink
                className="bp-cta-btn"
                to="https://portal.corebtr.com/tests"
                target="_blank"
              >
                Start Practice Test →
              </NavLink>
            </div>
          </aside>
        </div>

        {/* Recommended / Related Section */}
        <section className="bp-related">
          <div className="bp-related-header">
            <div className="bp-related-accent"></div>
            <h2 className="bp-related-title">You Might Also Like</h2>
          </div>

          <div className="bp-related-cards" ref={carouselRef}>
            {relatedBlogs.map((data) => (
              <Link
                key={data.id}
                to={`/blog/${data.id}`}
                className="bp-related-card"
              >
                <div className="bp-related-card-img">
                  <img src={data.image} alt={data.alt} />
                </div>
                <div className="bp-related-card-body">
                  <span
                    className={`bp-card-tag ${CATEGORY_TAG_CLASS[blog.category] || "bp-tag-blue"}`}
                  >
                    {blog.category || "Medicine"}
                  </span>
                  <div className="bp-related-card-title">{data.metaTitle}</div>
                  <div className="bp-related-card-meta">
                    <span>📅 {data.blogDate}</span>
                    <span className="bp-rc-read">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <hr className="bp-related-hr" />

          <div className="bp-related-nav-btns">
            <button
              className="bp-related-nav-btn"
              onClick={() => handleScroll("prev")}
            >
              ← Previous
            </button>
            <button
              className="bp-related-nav-btn"
              onClick={() => handleScroll("next")}
            >
              Next →
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogPage;
